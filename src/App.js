import React, { useState } from "react";
import ProgressGoals from "./components/ProgressGoals";
import FutureGoals from "./components/FutureGoals";
import TaskCleared from "./components/TaskCleared";
import ChangeInPlans from "./components/ChangeInPlans";
import PerformanceGraph from "./components/PerformanceGraph";
import TeamPerformance from "./components/TeamPerformance";
import Attendance from "./components/Attendance";
import "./App.css";

function App() {
  const [data, setData] = useState({
    progressGoals: "50% of goals completed",
    futureGoals: ["Complete project A", "Start project B", "Review project C"],
    taskCleared: ["Completed task 1", "Completed task 2"],
    changesInPlans: "Shifted focus to project B due to client requirements",
    performanceData: {
      completed: 8,
      pending: 4,
    },
    teamPerformance: {
      achievements: "Delivered project A on time",
      challenges: "Faced delays due to resource constraints",
    },
    attendance: [
      { name: "Chandan Sharma", daysPresent: 30, daysAbsent: 5 },
      { name: "Sumit Kumar Pandey", daysPresent: 25, daysAbsent: 3 },
      { name: "Krishan Kant", daysPresent: 20, daysAbsent: 2 },
      { name: "Sujeet Kumar Sharma", daysPresent: 20, daysAbsent: 3 },
    ],
  });

  return (
    <div className="App">
      <h1>Quarterly Business Review (QBR)</h1>
      <ProgressGoals data={data.progressGoals} />
      <FutureGoals data={data.futureGoals} />
      <TaskCleared data={data.taskCleared} />
      <ChangeInPlans data={data.changesInPlans} />
      <PerformanceGraph data={data.performanceData} />
      <TeamPerformance data={data.teamPerformance} />
      <Attendance data={data.attendance} />
    </div>
  );
}

export default App;
