import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modal({ title = "", listname = "", status = false, handleClose = () => {}, onSave = () => {} }) {
  const [listName, setListName] = useState(listname);

  const updateListName = ({ target: { value = "" } = {} }) => {
    setListName(value);
  };

  const saveChanges = () => {
    onSave(listName);
  };

  return (
    <BootstrapModal size="sm" show={status} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id="example-modal-sizes-title-sm">{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <label className="Modal__label">
          <input className="Modal__input" type="text" placeholder="Enter list name" value={listName} onChange={updateListName} />
        </label>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={saveChanges} disabled={!listName}>
          Save
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
