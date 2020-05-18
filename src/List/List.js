import React from "react";
import "./List.css";
import AddTaskItem from "../AddTaskItem/AddTaskItem";
import TaskItem from "../TaskItem/TaskItem";

function List({ listId, title = "", tasks = [], deleteTask = () => {}, toggleTask = () => {}, addTask = () => {} }) {
  //sort tasks by date created then put the uncompleted tasks at the top
  tasks.sort((a, b) => a.dateCreated - b.dateCreated).sort(({ completed }) => (completed ? 1 : -1));

  return (
    <div className="list">
      <h4>{title}</h4>
      <AddTaskItem listId={listId} addTask={addTask} />
      {tasks.map(({ text = "", completed = false, id }) => (
        <TaskItem key={id} id={id} text={text} completed={completed} deleteTask={deleteTask} toggleTask={toggleTask} />
      ))}
    </div>
  );
}

export default List;
