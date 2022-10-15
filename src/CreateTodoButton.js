import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
};
