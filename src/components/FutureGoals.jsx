import React from "react";

function FutureGoals({ data }) {
  return (
    <div className="section">
      <h2>Future Goals</h2>
      <ul>
        {data.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}

export default FutureGoals;
