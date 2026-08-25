import { NextResponse } from "next/server";

const labelSections = [
  ["indications_and_usage", "Indications and usage"],
  ["mechanism_of_action", "Mechanism of action"],
  ["clinical_pharmacology", "Clinical pharmacology"],
  ["dosage_forms_and_strengths", "Dosage forms and strengths"],
  ["boxed_warning", "Boxed warning"],
  ["warnings_and_cautions", "Warnings and precautions"],
  ["contraindications", "Contraindications"],
  ["adverse_reactions", "Adverse reactions"],
  ["drug_interactions", "Drug interactions"],
  ["information_for_patients", "Patient information"],
];

function normalizeText(value) {
  if (!value) return "";
  return (Array.isArray(value) ? value.join("\n\n") : String(value))
    .replace(/\s+/g, " ")
    .trim();
}

export async function GET(request) {
  const name = request.nextUrl.searchParams.get("name")?.trim().slice(0, 100);
  if (!name || name.length < 2) return NextResponse.json({ profile: null, labels: [] });

  const escapedName = name.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
  const openFdaEndpoint = new URL("https://api.fda.gov/drug/label.json");
  openFdaEndpoint.searchParams.set("search", `openfda.generic_name:"${escapedName}"`);
  openFdaEndpoint.searchParams.set("sort", "effective_time:desc");
  openFdaEndpoint.searchParams.set("limit", "1");

  const dailyMedEndpoint = new URL("https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json");
  dailyMedEndpoint.searchParams.set("drug_name", name);
  dailyMedEndpoint.searchParams.set("name_type", "generic");
  dailyMedEndpoint.searchParams.set("pagesize", "5");

  const [openFdaResult, dailyMedResult] = await Promise.allSettled([
    fetch(openFdaEndpoint, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(7000) }),
    fetch(dailyMedEndpoint, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(7000) }),
  ]);

  let profile = null;
  let labels = [];

  if (openFdaResult.status === "fulfilled" && openFdaResult.value.ok) {
    const payload = await openFdaResult.value.json();
    const record = payload.results?.[0];
    if (record) {
      const openFda = record.openfda || {};
      profile = {
        brandNames: openFda.brand_name || [],
        manufacturers: openFda.manufacturer_name || [],
        routes: openFda.route || [],
        dosageForms: openFda.dosage_form || [],
        effectiveDate: record.effective_time || null,
        setId: record.set_id || null,
        sections: labelSections
          .map(([key, label]) => ({ key, label, text: normalizeText(record[key]) }))
          .filter((section) => section.text),
      };
    }
  }

  if (dailyMedResult.status === "fulfilled" && dailyMedResult.value.ok) {
    const payload = await dailyMedResult.value.json();
    labels = (payload.data || []).map((label) => ({
      setId: label.setid,
      title: label.title,
      publishedDate: label.published_date,
      version: label.spl_version,
    }));
  }

  return NextResponse.json({ profile, labels, unavailable: !profile && labels.length === 0 });
}
