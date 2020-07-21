import React, { useState } from "react";
import Modal from "../Modal/Modal";

function NewList({ id, modifyList = () => {} }) {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (listName) => {
    modifyList(listName, id);
    handleClose();
  };

  return (
    <>
      <div className="newList" onClick={handleShow}>
        <button type="button" className="newList__addIcon">
          <span className="newList__circle" aria-hidden="true">
            <span className="newList__arrow"></span>
          </span>
          <span className="newList__text">Add New List</span>
        </button>
      </div>
      {smShow ? <Modal title="Create New List" status={smShow} handleClose={handleClose} onSave={onSave} /> : ""}
    </>
  );
}

export default NewList;
