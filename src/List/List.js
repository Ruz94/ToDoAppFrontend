import React, { useState } from "react";
import Modal from "../Modal/Modal";
import AddTaskItem from "../AddTaskItem/AddTaskItem";
import TaskItem from "../TaskItem/TaskItem";
import "./List.css";

function List({
  listId,
  title = "",
  tasks = [],
  deleteTask = () => {},
  toggleTask = () => {},
  addTask = () => {},
  addList = () => {},
  deleteList = () => {},
}) {
  //sort tasks by date created then put the uncompleted tasks at the top
  tasks.sort((a, b) => a.dateCreated - b.dateCreated).sort(({ completed }) => (completed ? 1 : -1));

  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const saveChanges = (name) => {
    addList(name, listId);
    handleClose();
  };

  const delList = () => {
    if (window.confirm(`Are you sure you wish to delete "${title}"`)) {
      deleteList(listId);
    }
  };

  return (
    <div className="list">
      <h4>{title}</h4>
      <button type="button" className="list__title__modifier" onClick={handleShow}>
        ✎
      </button>
      <button type="button" className="list__title__modifier" onClick={delList}>
        🗑
      </button>
      {smShow ? <Modal title="Rename List" listname={title} status={smShow} onSave={saveChanges} handleClose={handleClose} /> : ""}
      <AddTaskItem listId={listId} addTask={addTask} />
      {tasks.map(({ text = "", completed = false, id }) => (
        <TaskItem key={id} id={id} text={text} completed={completed} deleteTask={deleteTask} toggleTask={toggleTask} />
      ))}
    </div>
  );
}

export default List;
