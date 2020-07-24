import React from "react";

export const Button = ({ text = "Button", arrow = true, clickHandler = () => {} }) => {
  return (
    <div className="styledButton" onClick={clickHandler}>
      <button type="button" className="styledButton__element">
        {arrow ? (
          <span className="button__circle">
            <span className="button__arrow"></span>
          </span>
        ) : null}
        <span className="button__text">{text}</span>
      </button>
    </div>
  );
};
