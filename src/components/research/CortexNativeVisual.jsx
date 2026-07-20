function NativeTable({ visual }) {
  return (
    <figure className="native-research-visual native-research-table">
      <figcaption>
        <span>Table {String(visual.number).padStart(2, "0")}</span>
        <strong>{visual.title}</strong>
      </figcaption>
      <div className="native-research-table__scroll" tabIndex="0" role="region" aria-label={`Table ${visual.number}: ${visual.title}`}>
        <table>
          <thead>
            <tr>{visual.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr>
          </thead>
          <tbody>
            {visual.rows.map((row, rowIndex) => (
              <tr key={`${visual.number}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  cellIndex === 0
                    ? <th scope="row" key={`${rowIndex}-${cellIndex}`}>{cell}</th>
                    : <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {visual.notes.length > 0 && (
        <div className="native-research-table__notes">
          {visual.notes.map((note) => <p key={note}>{note}</p>)}
        </div>
      )}
    </figure>
  );
}

function CortexDiagram({ visual }) {
  return (
    <figure className="native-research-visual native-cortex">
      <figcaption>
        <span>Architecture</span>
        <strong>{visual.title}</strong>
        <small>{visual.subtitle}</small>
      </figcaption>
      <div className="native-cortex__map" aria-label={`${visual.title}: ${visual.gyri.join(", ")}`}>
        {visual.gyri.slice(0, 4).map((gyrus, index) => (
          <div className={`native-cortex__gyrus native-cortex__gyrus--${index + 1}`} key={gyrus}>{gyrus}</div>
        ))}
        <div className="native-cortex__core">
          <span>NaS</span>
          <strong>NICOLE</strong>
          <small>Digital cortex</small>
        </div>
        {visual.gyri.slice(4).map((gyrus, index) => (
          <div className={`native-cortex__gyrus native-cortex__gyrus--${index + 5}`} key={gyrus}>{gyrus}</div>
        ))}
      </div>
    </figure>
  );
}

export default function CortexNativeVisual({ visual }) {
  if (visual.kind === "cortex") return <CortexDiagram visual={visual} />;
  return <NativeTable visual={visual} />;
}
