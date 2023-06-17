import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.changeTrig} type="text" value={props.value} />
      <button onClick={props.addItemTrig}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
