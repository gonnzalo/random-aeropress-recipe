import React from "react";

function Dice({ value }) {
  return (
    <div>
      <br />
      <h1>{value[0]}</h1>
      {value.length > 1 && (
        <>
          <h1>-</h1>
          <h1>{value[1]}</h1>
        </>
      )}
      <br />
    </div>
  );
}

export default Dice;
