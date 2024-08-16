import React from "react";

function ProgressGoals({ data }) {
  return (
    <div className="section">
      <h2>Progress on Present Goals</h2>
      <p>{data}</p>
    </div>
  );
}

export default ProgressGoals;
