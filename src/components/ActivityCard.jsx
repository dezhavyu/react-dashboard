export default function ActivityCard({ activity, index, view }) {
  const colors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
  ];

  const timeframe = activity.timeframes[view];
  const label = view === "daily" ? "Yesterday" : "Last Week";

  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: colors[index] }}></div>
      <div className="card-content">
        <h2>
          {activity.title}
          <span>...</span>
        </h2>
        <p className="hours">{timeframe.current}{timeframe.current === 1 ? "hr" : "hrs"}</p>
        <p className="previous">{label} - {timeframe.previous}{timeframe.previous === 1 ? "hr" : "hrs"}</p>
      </div>
    </div>
  );
}
