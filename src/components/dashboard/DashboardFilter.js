import nextKey from "react-id-generator";

function DashboardFilter({ context }) {
  const switchFolder = (e) => {
    context.switchDashboardFolder(e);
  };
  return (
    <div className="DashboardFilter" onClick={switchFolder}>
      {[
        ["Generator", "generator"],
        ["RECs", "recs"],
        ["Orders", "orders"],
        ["Transactions", "transaction"],
      ].map((f) => (
        <div
          className="DashboardFilter-item"
          data-title={f[1]}
          id={
            context.dashboardFolder === f[1] ? "DashboardFilter-active-tab" : ""
          }
          key={nextKey()}
        >
          {f[0]}
        </div>
      ))}
    </div>
  );
}

export default DashboardFilter;
