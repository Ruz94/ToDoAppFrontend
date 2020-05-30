import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./NewList.css";

function NewList({ id, addList = () => {} }) {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (listName) => {
    addList(listName, id);
    handleClose();
  };

  return (
    <>
      <div className="newList" onClick={handleShow}>
        <p>Add New List</p>
        <button type="button" className="newList__addIcon">
          +
        </button>
      </div>
      {smShow ? <Modal title="Create New List" status={smShow} handleClose={handleClose} onSave={onSave} /> : ""}
    </>
  );
}

export default NewList;
