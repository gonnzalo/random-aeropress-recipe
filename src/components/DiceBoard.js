import React, { useState } from "react";
import Dice from "./Dice";
import Header from "./Header";
import "./DiceBoard.css";

function DiceBoard() {
  const [optionA, setOptionA] = useState("15g Coffe : 250g Water");
  const [optionB, setOptionB] = useState("85°C | 185°F");
  const [optionC, setOptionC] = useState("Medium Fine | 90 seconds");
  const [optionD, setOptionD] = useState(
    "Standar | 60 Secs Bloom in 60g Water"
  );
  const [optionE, setOptionE] = useState("Twice Clockwise Before Pressing");

  const coffe = [
    "12g Coffe : 200g Water",
    "15g Coffe : 200g Water",
    "15g Coffe : 250g Water",
    "24g Coffe : 200g Water (Dilute To Share)",
    "30g Coffe : 200g Water (Dilute To Share)",
    "Your Choice"
  ];

  const temp = [
    "75°C | 167°F",
    "80°C | 176°F",
    "85°C | 185°F",
    "90°C | 194°F",
    "95°C | 203°F",
    "Your Choice"
  ];

  const grind = [
    "Very Fine | 30 seconds",
    "Fine | 60 seconds",
    "Medium Fine | 90 seconds",
    "Medium | 120 seconds",
    "Corase | 4 minutes",
    "Your Choice"
  ];
  const bloom = [
    "Standar | No Bloom",
    "Standar | 30 secs Bloom in 30g Water",
    "Standar | 60 Secs Bloom in 60g Water",
    "Inverted | No Bloom",
    "Inverted | 30 secs Bloom in 30g Water",
    "Inverted | 30 secs Bloom in 30g Water"
  ];
  const stir = [
    "Once Clockwise Before Pressing",
    "Twice Clockwise Before Pressing",
    "Once Cloackwise & Once Anticlockwise",
    "Thrice Clockwise Before Pressing",
    "No Stir",
    "Your Choice"
  ];

  function handleClick() {
    setOptionA(coffe[Math.floor(Math.random() * 6)]);
    setOptionB(temp[Math.floor(Math.random() * 6)]);
    setOptionC(grind[Math.floor(Math.random() * 6)]);
    setOptionD(bloom[Math.floor(Math.random() * 6)]);
    setOptionE(stir[Math.floor(Math.random() * 6)]);
  }

  return (
    <div className="app-container">
      <Header />
      <div className="option-container">
        <h3 className="option-tittle">Coffe : Water Ratio</h3>
        <Dice value={optionA} />
      </div>
      <div className="option-container ">
        <h3 className="option-tittle">Temperature</h3>
        <Dice value={optionB} />
      </div>
      <div className="option-container">
        <h3 className="option-tittle">Grind Size | Brew Time</h3>
        <Dice value={optionC} />
      </div>
      <div className="option-container ">
        <h3 className="option-tittle">Orientation | Bloom</h3>
        <Dice value={optionD} />
      </div>
      <div className="option-container">
        <h3 className="option-tittle">Stirring</h3>
        <Dice value={optionE} />
      </div>
      <button type="button" onClick={handleClick} className="btn">
        generate
      </button>
    </div>
  );
}

export default DiceBoard;
