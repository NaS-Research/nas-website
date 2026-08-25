const diagrams = {
  "peds-pn-decision": { accent: "#d6a17d", eyebrow: "Decision architecture", title: "Age, gut, access, horizon.", steps: [["01", "Patient", "Gestation, age, weight, growth"], ["02", "Need", "Deficit and enteral feasibility"], ["03", "Access", "Peripheral, central, or umbilical"], ["04", "Plan", "Duration, goals, reassessment"]] },
  "peds-pn-glucose": { accent: "#d9bd70", eyebrow: "Glucose engine", title: "Weight and time define delivery.", steps: [["GIR", "Prescribe", "mg/kg/min"], ["×", "Scale", "weight and 1,440 minutes"], ["g", "Convert", "divide milligrams by 1,000"], ["Trend", "Advance", "glucose and clinical tolerance"]] },
  "peds-pn-macros": { accent: "#c88376", eyebrow: "Growth substrate", title: "Protein and lipid, safely advanced.", steps: [["AA", "Protein", "age and evidence based g/kg"], ["ILE", "Lipid", "product and age specific dose"], ["Rate", "Protect", "avoid rapid delivery"], ["Growth", "Follow", "actual intake and response"]] },
  "peds-pn-micros": { accent: "#91b18d", eyebrow: "Micronutrient balance", title: "Growth demand meets organ maturity.", steps: [["Ca/P", "Mineral", "bone accretion and solubility"], ["Na/K/Mg", "Electrolytes", "losses, kidneys, medicines"], ["MVI", "Vitamins", "age and product label"], ["TE", "Trace", "losses, cholestasis, duration"]] },
  "peds-pn-safety": { accent: "#8da8c7", eyebrow: "Safety envelope", title: "Compatibility is only one layer.", steps: [["Mix", "Validate", "calcium, phosphate, pH, process"], ["Al", "Limit", "sum total aluminum exposure"], ["1.2", "Filter", "current PN filtration"], ["Light", "Protect", "neonatal bag and administration set"]] },
  "peds-pn-audit": { accent: "#b39ac4", eyebrow: "Daily closed loop", title: "Calculate, deliver, observe, revise.", steps: [["Rx", "Order", "weight, grams, volume, route"], ["Bag", "Verify", "sources, compatibility, label"], ["Bed", "Deliver", "pump, filter, line, actual intake"], ["Next", "Revise", "growth, labs, enteral progress"]] },
};

export default function PediatricParenteralNutritionVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="peds-pn-visual" style={{ "--peds-pn-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="peds-pn-visual__flow">{diagram.steps.map(([index, heading, detail], itemIndex) => <div className="peds-pn-visual__step" key={heading}><span>{index}</span><strong>{heading}</strong><p>{detail}</p>{itemIndex < diagram.steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
  </figure>;
}
