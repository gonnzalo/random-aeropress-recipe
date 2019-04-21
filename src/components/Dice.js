import React from "react";
import PropTypes from "prop-types";
import "./Dice.css";

function Dice({ value }) {
  return (
    <div className="dice-container">
      <h3 className="options">{value || "generate"}</h3>
    </div>
  );
}

Dice.propTypes = {
  value: PropTypes.string.isRequired
};

export default Dice;
