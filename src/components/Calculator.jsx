import React, { useState, useEffect } from "react";
import calculate from "../logic/calculate";


const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  
  useEffect =() => {
    setState({
      total: null,
      next: null,
      opreration: null,
    });
     
  };



  const updateObject = (e) => {
    const myObj = calculate(state, e.target.textContent);
    setState(myObj);
  };

  const { next, operation, total } = state;
  const op = operation === "%" ? "mod" : operation;
  let result = "";
  if (total) {
    result = `${total} ${op || ""} ${next || ""}`;
  } else if (next) {
    result = `${next} ${op || ""}`;
  }

  return (
    <div className="container">
      <div className="input-field">
        <p>{result || 0}</p>
      </div>
      <div className="wrapper">
        <div className="row">
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            AC
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            %
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button operator-button"
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            7
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            8
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            9
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button operator-button"
          >
            x
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            4
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            5
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            6
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button operator-button"
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            1
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            2
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            3
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button operator-button"
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={updateObject}
            className="clear-large-button"
          >
            0
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button"
          >
            .
          </button>
          <button
            type="button"
            onClick={updateObject}
            className="clear-small-button operator-button"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
