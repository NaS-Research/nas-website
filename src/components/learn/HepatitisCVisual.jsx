const views = {
  "virus-natural-history": ["RNA", "NS5B", "Fibrosis", "Cirrhosis"],
  "screening-diagnosis": ["Antibody", "RNA", "Viremia", "Linkage"],
  "fibrosis-eligibility": ["FIB-4", "Stiffness", "CTP", "Pathway"],
  "daa-mechanisms": ["NS3/4A", "NS5A", "NS5B", "Combine"],
  "initial-regimens": ["Mavyret", "Epclusa", "Food", "Duration"],
  "pretreatment-safety": ["Medicines", "HBV", "HIV", "Pregnancy"],
  "interaction-engineering": ["Acid", "Inducers", "Statins", "Amiodarone"],
  "monitoring-delivery": ["Adherence", "Glucose", "INR", "Liver injury"],
  "svr-follow-up": ["RNA timing", "Cure test", "Cure", "Reinfection"],
  "cirrhosis-special": ["CTP A", "CTP B/C", "HCC", "Referral"],
  "retreatment-prevention": ["Prior DAA", "RAS", "Salvage", "Prevent"],
  "integrated-case": ["Diagnose", "Stage", "Treat", "Cure test"],
};
export const hepatitisCVisualTypes = Object.keys(views).map((key) => `hepatitis-c-${key}`);
export default function HepatitisCVisual({ type }) {
  const key = type.replace("hepatitis-c-", "");
  const labels = views[key] || views["integrated-case"];
  const reviewedCaptions = {
    "daa-mechanisms": "Map complementary viral targets and verify the complete regimen’s eligibility.",
    "cirrhosis-special": "Use current and prior liver state to guide therapy and continuing cirrhosis care.",
    "retreatment-prevention": "Review prior response, distinguish reinfection, and pair therapy with prevention.",
    "virus-natural-history": "Connect the RNA virus and replication targets with progressive liver injury.",
    "screening-diagnosis": "Use RNA to identify current viremia and link the result to care.",
    "fibrosis-eligibility": "Integrate fibrosis evidence and compensation before choosing the pathway.",
    "pretreatment-safety": "Connect baseline testing, medicines, coinfections, and pregnancy context.",
    "svr-follow-up": "Confirm cure with post-treatment RNA and preserve risk-based follow-up.",
    "integrated-case": "Connect diagnosis, staging, treatment delivery, and documented cure.",
    "initial-regimens": "Connect combination therapy, food, duration, and liver eligibility.",
    "interaction-engineering": "Review acidity, induction, concomitant medicines, and cardiac safety.",
    "monitoring-delivery": "Support adherence and review glucose, INR, and liver injury.",
  };
  return <figure className="chol-visual hepatitis-c-visual" aria-label={`Hepatitis C visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Curable viral infection</span><h3>{key.replaceAll("-", " ")}</h3><p>{reviewedCaptions[key] || "Connect viral targets, fibrosis, regimen delivery, sustained response, and lifelong liver risk."}</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`hcv-${key}`}><stop stopColor="#e7bd79" stopOpacity=".52"/><stop offset="1" stopColor="#5b2f43" stopOpacity=".03"/></radialGradient></defs>
      <path d="M215 65 C275 40 390 62 430 121 C466 174 421 231 343 242 C269 252 196 226 173 178 C152 135 166 85 215 65Z" fill={`url(#hcv-${key})`} stroke="#d1a061" strokeOpacity=".32"/>
      <path d="M245 112 C270 82 306 150 331 116 C358 82 390 148 409 116 M232 157 C269 123 298 194 337 157 C366 129 395 188 420 153 M230 198 C263 170 300 223 337 193 C372 165 399 211 423 187" fill="none" stroke="#cc7c70" strokeWidth="4" strokeOpacity=".58"/>
      {labels.map((label,index)=>{const p=[[86,56],[534,56],[86,247],[534,247]][index];return <g key={label}><line x1={p[0]} y1={p[1]} x2="310" y2="150" stroke="#c99a62" strokeOpacity=".22"/><circle cx={p[0]} cy={p[1]} r="5" fill={index===0?"#efd19a":"#a85365"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14" className={reviewedCaptions[key] ? "[font-size:32px] sm:[font-size:14px]" : undefined}>{label}</text></g>})}
    </svg></div>
  </figure>;
}
