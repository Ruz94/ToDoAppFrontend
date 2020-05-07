import React from "react";
import "./AddTaskItem.css";

function TaskItem() {
  return (
    <div className="addTaskItem">
      <span>+</span>
      <input type="text" placeholder="Add New Item..." />
    </div>
  );
}

export default TaskItem;
