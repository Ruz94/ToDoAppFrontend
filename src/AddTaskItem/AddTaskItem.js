import React, { useState } from "react";
import "./AddTaskItem.css";

function TaskItem({ listId, addTask = () => {} }) {
  const [task, setTask] = useState("");

  const handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      addAndResetTask();
    }
  };

  const updateTask = ({ target: { value = "" } = {} }) => {
    setTask(value);
  };

  const addAndResetTask = () => {
    addTask(task, listId);
    setTask("");
  };

  return (
    <div className="addTaskItem">
      <span onClick={addAndResetTask}>+</span>
      <input type="text" placeholder="Add New Item..." value={task} onChange={updateTask} onKeyPress={handleKeyPress} />
    </div>
  );
}

export default TaskItem;
