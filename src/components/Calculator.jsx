import React, { Component } from "react";

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="input-field">
          <p> 765758</p>
        </div>
        <div className="wrapper">
          <div className="row">
            <button type="button" className="clear-small-button">
              AC
            </button>
            <button type="button" className="clear-small-button">
              +/-
            </button>
            <button type="button" className="clear-small-button">
              %
            </button>
            <button type="button" className="clear-small-button operator-button">
            ÷
            </button>
          </div>
          <div className="row">
            <button type="button" className="clear-small-button">
              7
            </button>
            <button type="button" className="clear-small-button">
              8
            </button>
            <button type="button" className="clear-small-button">
              9
            </button>
            <button type="button" className="clear-small-button operator-button">
              x
            </button>
          </div>
          <div className="row">
            <button type="button" className="clear-small-button">
              4
            </button>
            <button type="button" className="clear-small-button">
              5
            </button>
            <button type="button" className="clear-small-button">
              6
            </button>
            <button type="button" className="clear-small-button operator-button">
              -
            </button>
          </div>
          <div className="row">
            <button type="button" className="clear-small-button">
              1
            </button>
            <button type="button" className="clear-small-button">
              2
            </button>
            <button type="button" className="clear-small-button">
              3
            </button>
            <button type="button" className="clear-small-button operator-button">
              -
            </button>
          </div>
          <div className="row">
            <button type="button" className="clear-large-button">
              0
            </button>
            <button type="button" className="clear-small-button">
              .
            </button>
            <button type="button" className="clear-small-button operator-button">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
