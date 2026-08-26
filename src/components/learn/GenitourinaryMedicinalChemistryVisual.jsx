export const genitourinaryMedicinalChemistryVisualTypes = [
  "gu-medchem-steroid",
  "gu-medchem-estrogen",
  "gu-medchem-progestin",
  "gu-medchem-fiveari",
  "gu-medchem-pde5",
  "gu-medchem-antimuscarinic",
  "gu-medchem-adrenergic",
  "gu-medchem-product",
];

const diagrams = {
  "gu-medchem-steroid": ["Molecular foundation", "One nucleus, several biologic signals", ["Shape", "Fused rings", "Rigid geometry positions every substituent"], ["Tune", "Functional groups", "Hydroxyls, carbonyls, and side chains change recognition"], ["Orient", "Stereochemistry", "Three-dimensional identity controls receptor fit"], ["Deliver", "Route", "First pass, local exposure, and depot release reshape the signal"]],
  "gu-medchem-estrogen": ["Estrogen design", "Modify delivery without erasing biology", ["Persist", "17 alpha ethynyl", "Slows rapid C17 oxidation for oral exposure"], ["Release", "Estradiol ester", "Lipophilic depot undergoes hydrolysis"], ["Formulate", "Particles and mixtures", "Micronization and composition define the product"], ["Select", "Receptor conformation", "Coregulator context creates tissue-dependent response"]],
  "gu-medchem-progestin": ["Progestin map", "Follow ancestry, active species, and receptor profile", ["Classify", "Structural family", "Progesterone, testosterone, or spironolactone ancestry"], ["Resolve", "Stereochemical identity", "Levonorgestrel preserves the active configuration"], ["Activate", "Desogestrel", "Metabolism forms active etonogestrel"], ["Differentiate", "Drospirenone", "Distinct antiandrogenic and antimineralocorticoid activity"]],
  "gu-medchem-fiveari": ["Androgen pathway", "Interrupt ligand formation before receptor signaling", ["Substrate", "Testosterone", "5 alpha reductase normally forms DHT"], ["Inhibit", "Finasteride", "Preferential type 2 enzyme inhibition"], ["Broaden", "Dutasteride", "Type 1 and type 2 inhibition with long persistence"], ["Remodel", "Tissue response", "Reduced DHT gradually changes prostate and follicle biology"]],
  "gu-medchem-pde5": ["Second-messenger control", "Preserve cGMP, then respect the interaction window", ["Initiate", "Nitric oxide", "Upstream signaling activates guanylate cyclase"], ["Signal", "cGMP", "Smooth-muscle relaxation follows messenger accumulation"], ["Preserve", "PDE5 inhibitor", "Catalytic-pocket binding slows cGMP breakdown"], ["Avoid", "Nitrate convergence", "More production plus less breakdown can collapse pressure"]],
  "gu-medchem-antimuscarinic": ["Distribution logic", "Charge, metabolism, and route shape antimuscarinic burden", ["Bind", "Cationic center", "Hydrophobic groups complete muscarinic recognition"], ["Partition", "Tertiary amine", "A partly uncharged fraction can cross membranes"], ["Restrict", "Quaternary charge", "Trospium has limited passive diffusion"], ["Engineer", "Oxybutynin route", "Release and first pass alter parent and active metabolite exposure"]],
  "gu-medchem-adrenergic": ["Two autonomic targets", "Store urine or reduce outlet tone through distinct chemistry", ["Store", "Mirabegron", "Noncatechol beta 3 activation relaxes detrusor"], ["Separate", "Vibegron", "Shared receptor, distinct disposition and interactions"], ["Open", "Alpha 1 blockade", "Scaffold and subtype preference tune outlet relaxation"], ["Interpret", "Functional groups", "One shared motif does not prove cross-allergy"]],
  "gu-medchem-product": ["Product reality", "The molecule is only one layer of the medicine", ["Define", "Active species", "Parent, prodrug, metabolite, salt, and stereochemistry"], ["Control", "Delivery system", "Matrix, membrane, depot, device, and local route"], ["Verify", "Regulatory label", "Strength, manipulation, indication, dose, and interactions"], ["Decide", "Patient context", "Organ function, evidence, preferences, and monitoring"]],
};

export default function GenitourinaryMedicinalChemistryVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual gu-medchem-visual" aria-label={title}>
      <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
      <div className="chol-visual__grid">
        {nodes.map(([verb, focus, detail], index) => (
          <div key={focus}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{verb}</strong>
            <em>{focus}</em>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
