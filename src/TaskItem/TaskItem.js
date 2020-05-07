import React from "react";
import "./TaskItem.css";

function TaskItem() {
  return (
    <div className="taskItem">
      <p>
        <input type="checkbox" />
        <input type="text" value="Item 1" className="taskItem__listItems" />
        <span>×</span>
      </p>
    </div>
  );
}

export default TaskItem;
