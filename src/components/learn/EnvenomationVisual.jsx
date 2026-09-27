import styles from "./EnvenomationVisual.module.css";

const comparisons = {
  exposure: ["Three questions before selecting a product", [
    ["Where and what?", "Location, actual animal evidence and exposure time"],
    ["What is failing?", "Breathing, circulation, neurologic function, tissue or coagulation"],
    ["What matches?", "Specialist-selected product, supportive care and monitoring"],
  ]],
  firstaid: ["Help transport. Avoid adding injury.", [
    ["Do", "Keep still, remove constrictors and arrange urgent care."],
    ["Avoid", "Ice, cutting, suction, tourniquets and animal capture."],
    ["Ask", "Regional guidance determines any exposure-specific immobilization technique."],
  ]],
  observation: ["Control starts the observation clock.", [
    ["During and after infusion", "Monitor reactions and response; at least 60 minutes after Anavip infusion."],
    ["After initial control", "At least 18 hours in a health care setting."],
    ["If findings recur", "Reassess for additional treatment; the clock alone never determines discharge."],
  ]],
  coral: ["A shared common name does not establish coverage.", [
    ["Eastern / Texas", "Within the reviewed coral antivenin label's coverage."],
    ["Arizona / Sonoran", "The label does not establish neutralization; specialist advice is essential."],
    ["Suspected exposure", "Immediate hospital assessment and at least 24 hours of observation after the bite."],
  ]],
  attribution: ["How strong is the exposure evidence?", [
    ["Unexplained wound", "Keep infection and other causes in the differential."],
    ["Animal actually observed", "Assess whether identification and timing support the diagnosis."],
    ["Clinical pattern", "Use the history and examination together; a wound photo alone is not species confirmation."],
  ]],
  widow: ["Escalation follows severity and response.", [
    ["Symptomatic treatment", "Analgesia and appropriate anxiolysis, with sedation monitoring."],
    ["Refractory or severe illness", "Toxicology assessment for widow antivenom."],
    ["Before administration", "Review asthma, anaphylaxis and horse-serum exposure; confirm product and emergency readiness."],
  ]],
  recluse: ["A urine-only screen can miss hemolysis.", [
    ["Delayed illness", "New systemic symptoms can emerge days after the exposure."],
    ["Negative urine dipstick", "Does not exclude extravascular hemolysis."],
    ["Reassessment", "Clinical review and appropriate blood testing assess the new concern."],
  ]],
  scorpion: ["Anascorp: keep the two dose phases separate.", [
    ["Initial", "3 vials; dilute combined contents to 50 mL; infuse over 10 minutes."],
    ["Additional, if needed", "1 vial at intervals of 30-60 minutes; each dose diluted to 50 mL and infused over 10 minutes."],
    ["Reassess", "Monitor during and up to 60 minutes after each infusion."],
  ]],
  tetanus: ["The wound changes the booster interval.", [
    ["Complete series + dirty/major wound", "Booster at 5 or more years since the last dose."],
    ["Complete series + clean minor wound", "Booster at 10 or more years since the last dose."],
    ["Unknown or incomplete series", "Vaccinate for any wound; assess TIG for dirty/major wounds."],
    ["HIV or severe immunodeficiency", "TIG is indicated for dirty/major wounds. Clean minor wounds do not require TIG."],
  ]],
};

export const envenomationVisualTypes = ["envenomation-phases", "envenomation-volumes", "envenomation-triage", "envenomation-follow-up", ...Object.keys(comparisons).map(key => `envenomation-${key}`)];

export default function EnvenomationVisual({ type }) {
  const comparison = comparisons[type?.replace(/^envenomation-/, "")];
  if (comparison) return <figure className={styles.figure} aria-label={comparison[0]}>
    <figcaption><span>Clinical decision guide</span><strong>{comparison[0]}</strong></figcaption>
    <div className={styles.triage}>{comparison[1].map(([heading, body]) => <section key={heading}><h4>{heading}</h4><p>{body}</p></section>)}</div>
  </figure>;
  if (type === "envenomation-phases") return (
    <figure className={styles.figure} aria-label="Pit viper antivenom treatment phases">
      <figcaption><span>Product → phase → reassessment</span><strong>A vial count is not a conversion factor.</strong></figcaption>
      <div className={styles.products}>
        <section><h4>CroFab <small>Ovine Fab</small></h4><ol>
          <li><b>4-6 vials</b><span>Usual initial dose; repeat for control as directed.</span></li>
          <li><b>2 vials every 6 hours × 3</b><span>Labeled schedule after initial control.</span></li>
          <li><b>Reassess later findings</b><span>Additional treatment depends on the clinical course.</span></li>
        </ol></section>
        <section><h4>Anavip <small>Equine F(ab′)2</small></h4><ol>
          <li><b>10 vials</b><span>Initial dose; additional 10-vial doses for control.</span></li>
          <li><b>Observe at least 18 hours</b><span>Measured from initial control in a health care setting.</span></li>
          <li><b>4 vials if needed</b><span>For re-emerging findings; not routine scheduled maintenance.</span></li>
        </ol></section>
      </div>
      <p className={styles.note}>Control means arrested local progression, resolved systemic findings and coagulation results normalizing or trending toward normal. These are product-specific teaching summaries, not complete administration orders.</p>
    </figure>
  );
  if (type === "envenomation-volumes") return (
    <figure className={styles.figure} aria-label="Antivenom reconstitution versus final infusion volumes">
      <figcaption><span>Preparation arithmetic</span><strong>Per vial and final total answer different questions.</strong></figcaption>
      <div className={styles.volumes}>
        {[
          ["CroFab", "18 mL per vial", "250 mL total", "Use within 4 hours"],
          ["Anavip", "10 mL per vial", "250 mL total", "Use within 6 hours"],
          ["Anascorp", "5 mL per vial", "50 mL total", "Infuse over 10 minutes"],
        ].map(([name, perVial, total, note]) => <section key={name}>
          <h4>{name}</h4><div className={styles.flow}><p><small>Reconstitute</small><b>{perVial}</b></p><span aria-hidden="true">→</span><p><small>Combine and dilute to</small><b>{total}</b></p></div><p className={styles.note}>{note}</p>
        </section>)}
      </div>
      <p className={styles.note}>These three products use 0.9% sodium chloride. Final total does not mean that amount of additional diluent. Anavip fluid volume may need adjustment for very small children or infants. Check the selected label for mixing, inspection, infusion and monitoring instructions.</p>
    </figure>
  );
  if (type === "envenomation-triage") return (
    <figure className={styles.figure} aria-label="Local sting care versus allergic emergency">
      <figcaption><span>Symptoms choose the urgency</span><strong>Start with breathing and circulation.</strong></figcaption>
      <div className={styles.triage}>
        <section><small>Emergency</small><h4>Throat symptoms, wheeze or collapse</h4><p>Suspect anaphylaxis. Give prompt intramuscular epinephrine according to the emergency plan and activate emergency assistance. Hives may be absent.</p></section>
        <section><small>Urgent exposure assessment</small><h4>Snakebite or systemic venom effects</h4><p>Obtain medical and poison-center assessment. A small skin finding does not exclude dangerous envenomation.</p></section>
        <section><small>After danger is excluded</small><h4>Uncomplicated local itch or discomfort</h4><p>Use exposure-appropriate wound and symptom care, with instructions for worsening symptoms.</p></section>
      </div>
    </figure>
  );
  if (type === "envenomation-follow-up") return (
    <figure className={styles.figure} aria-label="Delayed symptoms after envenomation treatment">
      <figcaption><span>After the initial response</span><strong>Two return patterns. One clear follow-up owner.</strong></figcaption>
      <div className={styles.products}>
        <section><h4>New bleeding or bruising</h4><p>Promptly reassess for coagulation abnormalities and other causes. Initial control does not exclude recurrence.</p></section>
        <section><h4>Fever, rash or joint symptoms</h4><p>Assess for delayed hypersensitivity and competing causes. Patients should report symptoms rather than diagnose the mechanism themselves.</p></section>
      </div>
      <p className={styles.note}>Record the product, doses, response, reactions, planned laboratory review and responsible service. Breathing difficulty or collapse requires emergency help.</p>
    </figure>
  );
  return null;
}
