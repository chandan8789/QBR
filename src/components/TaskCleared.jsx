import React from "react";

function TaskCleared({ data }) {
  return (
    <div className="section">
      <h2>Task Cleared</h2>
      <ul>
        {data.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskCleared;
