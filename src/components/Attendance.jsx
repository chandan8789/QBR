import React from "react";

function Attendance({ data }) {
  return (
    <div className="section">
      <h2>Attendance of Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Days Present</th>
            <th>Days Absent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.daysPresent}</td>
              <td>{employee.daysAbsent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
