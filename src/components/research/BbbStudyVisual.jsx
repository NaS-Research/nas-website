import "./bbb-study-visuals.css";

function Frame({ title, children, caption }) {
  return <figure className="bbb-visual">
    <h3>{title}</h3>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function BbbStudyVisual({ section }) {
  if (section === "question") return <Frame title="One question, three tests" caption="Study map. The audit contains 200 model runs; the follow-up adds 75 controlled and 25 external-training runs. Retention policies reuse fitted predictions.">
    <ol className="bbb-study-map">
      <li><span className="bbb-step">01 · Audit</span><strong>Does the test change the score?</strong><p>Reconstruct source versions and compare eight evaluation designs.</p><span className="bbb-count">200 model runs</span></li>
      <li><span className="bbb-step">02 · Control</span><strong>What changes with closer chemistry?</strong><p>Keep test rows, training size and class balance fixed within each seed.</p><span className="bbb-count">75 model runs</span></li>
      <li><span className="bbb-step">03 · Transfer</span><strong>Does the benefit carry over?</strong><p>Evaluate external records, then measure error and class retention when predictions are withheld.</p><span className="bbb-count">25 model runs</span></li>
    </ol>
    <p className="bbb-visual-takeaway">The follow-up tests the interpretation of the benchmark, not just its headline score.</p>
  </Frame>;

  if (section === "provenance") return <Frame title="From deposited records to the analysis cohort" caption="Record counts at successive representations. These are rows or retained representatives, not interchangeable counts of unique molecules. The historical 1,970 count remains unresolved.">
    <ol className="bbb-provenance">
      {[["2,053", "Martins deposit"], ["2,050", "MoleculeNet"], ["2,039", "TDC download"], ["2,030", "TDC loader"], ["1,935", "Integrity cohort"]].map(([count, label]) => <li key={label}><strong>{count}</strong><span>{label}</span></li>)}
    </ol>
    <div className="bbb-disposition"><span>From the 2,030-row reference</span><p><b>49</b> duplicate members · <b>25</b> conflicting representations · <b>20</b> ambiguous mixtures · <b>1</b> unstable standardization</p></div>
  </Frame>;

  if (section === "selection") return <Frame title="Lower accepted error. Uneven class retention." caption="Illustrative descriptor-confidence policy on the 428-record S-data cohort, averaged over five seeds. Cutoffs were fixed on separate validation records at nominal 75% coverage; this example was selected for discussion after outcomes were available.">
    <div className="bbb-error-comparison">
      <div><span>All records</span><strong>12.34<span>%</span></strong><small>Error before selection</small></div>
      <span className="bbb-compare-arrow" aria-hidden="true">→</span>
      <div><span>Accepted records</span><strong>5.55<span>%</span></strong><small>Error at 74.95% coverage</small></div>
    </div>
    <div className="bbb-retention">
      <h4>Which records were retained?</h4>
      {[["Positive records", 80.23], ["Negative records", 50.13]].map(([label, value]) => <div className="bbb-retention-row" key={label}><div><span>{label}</span><strong>{value.toFixed(2)}%</strong></div><div className="bbb-bar-track" aria-hidden="true"><span style={{width: `${value}%`}} /></div></div>)}
    </div>
    <p className="bbb-visual-takeaway">Accepted specificity was <b>52.90%</b>. Reweighting to the original class balance gave <b>8.31%</b> accepted error.</p>
  </Frame>;
  return null;
}
