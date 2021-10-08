import React, { useState } from "react";
import "./Input.css";
import { connect } from "react-redux";
import { addTodo } from "../store/modules/Todo/actions";

const Input = ({ handleAddTodo }) => {
  const [input, setInput] = useState("");

  const onClick = (e) => {
    handleAddTodo(input);
    setInput("");
  };

  const handleEnterButton = (e) => {
    if (e.key === "Enter") {
      handleAddTodo(input);
      setInput("");
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleEnterButton}
      />
      <button onClick={onClick}>Add !</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (description) => dispatch(addTodo(description)),
  };
};

export default connect(null, mapDispatchToProps)(Input);
