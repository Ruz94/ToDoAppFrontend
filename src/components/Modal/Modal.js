import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";

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
        <button type="button" className="secondaryButton" onClick={handleClose}>
          Cancel
        </button>
        <button type="button" className="primaryButton" onClick={saveChanges} disabled={!listName}>
          Save
        </button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
