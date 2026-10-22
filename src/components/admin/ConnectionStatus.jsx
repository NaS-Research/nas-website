import {connectionHealth,displayTime} from '@/lib/admin/activity-connection.mjs';
export default function ConnectionStatus({sources=[],now,connection}){
 const health=connectionHealth(sources,now,connection);
 return <section className="activity-connection" aria-label="Activity connection">
  <div className="connection-summary" role="status"><strong>{health.backend}</strong><span>{health.publisher}</span><span>Coverage: partial</span></div>
  <details><summary>Connection evidence and source coverage</summary>
   <p>Last successful browser check: {displayTime(connection?.lastSuccessAt?new Date(connection.lastSuccessAt).toISOString():null)}. Browser checks do not refresh producer evidence.</p>
   <p>A sleeping or disconnected Mac sends no updates. Missing reports cannot distinguish sleep, network loss, a stopped publisher or a storage guard. Fresh reception alone does not prove that any worker is running.</p>
   <div className="connection-feeds">{health.feeds.map(feed=><article key={feed.source}>
    <h3>{feed.name} <span>{feed.state}</span></h3>
    <dl><dt>Last received by backend</dt><dd>{displayTime(feed.receivedAt)}</dd><dt>Local collection sampled</dt><dd>{displayTime(feed.capturedAt)}</dd><dt>Latest task evidence</dt><dd>{displayTime(feed.latestEvidenceAt)}</dd><dt>Event-store read</dt><dd>{feed.eventStore}</dd><dt>Process census</dt><dd>{feed.processCensus}</dd><dt>Reported records</dt><dd>{feed.records}; {feed.staleJobs} nonterminal records stale or unknown; {feed.omitted} omitted by report limits</dd></dl>
    {feed.readers.map((reader,i)=><p key={i}><b>{reader.name}: {reader.state}</b><br/>{displayTime(reader.at)}</p>)}
    {feed.publisherSession&&<p>Publisher session <code>{feed.publisherSession}</code></p>}
   </article>)}</div>
   <p>Coverage includes only connected producers and a bounded Core task list. Project placement, employees, Codex collaboration, models and cost remain unknown where no verified source reports them. Completion records and organization roles are separate from current execution.</p>
  </details>
 </section>;
}
