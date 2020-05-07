import React from "react";
import "./NewList.css";

function NewList() {
  return (
    <div className="newList">
      <p>Add New List</p>
      <button type="button" className="newList__addIcon">
        +
      </button>
    </div>
  );
}

export default NewList;
