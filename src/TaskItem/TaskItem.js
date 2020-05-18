import React from "react";
import "./TaskItem.css";

function TaskItem({ text = "", completed = false, id, deleteTask = () => {}, toggleTask = () => {} }) {
  const delTask = () => {
    deleteTask(id);
  };

  const togTask = () => {
    toggleTask(id);
  };

  return (
    <div className="taskItem">
      <p>
        <input type="checkbox" value={completed} onClick={togTask} />
        <input type="text" defaultValue={text} className={`taskItem__listItem taskItem__listItem${completed ? "--complete" : ""}`} />
        <span onClick={delTask}>×</span>
      </p>
    </div>
  );
}

export default TaskItem;
