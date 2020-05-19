import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./NewList.css";

function NewList() {
  const [smShow, setSmShow] = useState(false);
  const [listName, setListName] = useState("");

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const updateListName = ({ target: { value = "" } = {} }) => {
    setListName(value);
  };

  return (
    <>
      <div className="newList" onClick={handleShow}>
        <p>Add New List</p>
        <button type="button" className="newList__addIcon">
          +
        </button>
      </div>

      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Create New List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            List Name:
            <input type="text" placeholder="Enter list name" value={listName} onChange={updateListName} />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} disabled={!listName}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewList;
