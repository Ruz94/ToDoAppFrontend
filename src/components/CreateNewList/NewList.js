import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Button } from "components/Shared/Button";

function NewList({ id, modifyList = () => {} }) {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const onSave = (listName) => {
    modifyList(listName, id);
    handleClose();
  };

  return (
    <div className="newList">
      <Button clickHandler={handleShow} text="Add New List" />
      {smShow ? <Modal title="Create New List" status={smShow} handleClose={handleClose} onSave={onSave} /> : ""}
    </div>
  );
}

export default NewList;
