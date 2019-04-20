import React, { useState } from "react";
import Dice from "./Dice";

function DiceBoard() {
  const [optionA, setOptionA] = useState(["coffe - water ratio"]);
  const [optionB, setOptionB] = useState(["temperature"]);
  const [optionC, setOptionC] = useState(["grind size - brew time"]);
  const [optionD, setOptionD] = useState(["orientation - bloom"]);
  const [optionE, setOptionE] = useState(["stirring"]);

  const coffe = [
    ["12g Coffe", "200g Water"],
    ["15g Coffe", "200g Water"],
    ["15g Coffe", "250g Water"],
    ["24g Coffe", "200g Water / Dilute To Share"],
    ["30g Coffe", "200g Water / Dilute To Share"],
    ["Your Choice"]
  ];

  const temp = [
    ["75°C", "167°F"],
    ["80°C", "176°F"],
    ["85°C", "185°F"],
    ["90°C", "194°F"],
    ["95°C", "203°F"],
    ["Your Choice"]
  ];

  const grind = [
    ["Very Fine", "30 seconds"],
    ["Fine", "60 seconds"],
    ["Medium Fine", "90 seconds"],
    ["Medium", "120 seconds"],
    ["Corase", "4 minutes"],
    ["Your Choice"]
  ];
  const bloom = [
    ["Standar", "No Bloom"],
    ["Standar", "30 secs Bloom in 30g Water"],
    ["Standar", "60 Secs Bloom in 60g Water"],
    ["Inverted", "No Bloom"],
    ["Inverted", "30 secs Bloom in 30g Water"],
    ["Inverted", "30 secs Bloom in 30g Water"]
  ];
  const stir = [
    ["Once Clockwise Before Pressing"],
    ["Twice Clockwise Before Pressing"],
    ["Once Cloackwise & Once Anticlockwise before Pressing"],
    ["Thrice Clockwise Before Pressing"],
    ["No Stir"],
    ["Your Choice"]
  ];

  function handleClick() {
    setOptionA(coffe[Math.floor(Math.random() * 6)]);
    setOptionB(temp[Math.floor(Math.random() * 6)]);
    setOptionC(grind[Math.floor(Math.random() * 6)]);
    setOptionD(bloom[Math.floor(Math.random() * 6)]);
    setOptionE(stir[Math.floor(Math.random() * 6)]);
  }

  return (
    <div>
      <Dice value={optionA} />
      <Dice value={optionB} />
      <Dice value={optionC} />
      <Dice value={optionD} />
      <Dice value={optionE} />
      <button type="button" onClick={handleClick}>
        random
      </button>
    </div>
  );
}

export default DiceBoard;
