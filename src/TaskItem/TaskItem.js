import React from "react";
import "./TaskItem.css";

function TaskItem({ text = "", completed = false, id, deleteTask = () => {}, toggleTask = () => {}, updateTask = () => {} }) {
  const delTask = () => {
    deleteTask(id);
  };

  const togTask = () => {
    toggleTask(id);
  };

  const modifyTask = ({ target: { value = "" } = {} }) => {
    updateTask(value, id);
  };

  return (
    <div className="taskItem">
      <p>
        <input type="checkbox" defaultChecked={completed} onClick={togTask} />
        <input
          type="text"
          defaultValue={text}
          onChange={modifyTask}
          className={`taskItem__listItem taskItem__listItem${completed ? "--complete" : ""}`}
        />
        <span onClick={delTask}>×</span>
      </p>
    </div>
  );
}

export default TaskItem;
