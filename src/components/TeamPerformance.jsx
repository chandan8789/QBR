import React from "react";

function TeamPerformance({ data }) {
  return (
    <div className="section">
      <h2>Team Performance</h2>
      <p>
        <strong>Achievements:</strong> {data.achievements}
      </p>
      <p>
        <strong>Challenges:</strong> {data.challenges}
      </p>
    </div>
  );
}

export default TeamPerformance;
