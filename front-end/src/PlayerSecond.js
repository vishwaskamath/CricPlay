import "./PlayerSecond.css";
import React, { useEffect, useState } from "react";

function PlayerSecond({ target }) {
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [randomChoice, setRandomChoice] = useState(0);
  const [totalRuns, setTotalRuns] = useState(0);
  let total = 0;

  useEffect(() => {
    setComputerChoice(randomChoice);
  }, [userChoice, randomChoice]);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const random = Math.floor(Math.random() * 6) + 1;
    setRandomChoice(random);
    if (random === choice) {
      prompt("You lost bro");
    } else {
      total = totalRuns + choice;
      if (total >= target + 1) {
        prompt("Won bro congrats");
      }

      setTotalRuns(total);
    }
  };

  return (
    <div className="PlayerSecond">
      <div className="Scoreboard">
        <div className="ScorePlayer">
          <h2>Player 1</h2>
          <h3>{userChoice}</h3>
        </div>
        <div className="ScorePlayer2">
          <h2>Player 2</h2>
          <h3>{computerChoice}</h3>
        </div>
      </div>
      <div>
        <h4>PLAYER 2 IS BATTING</h4>
        <h4>TOTAL RUNS: {totalRuns} </h4>
        <h4>TARGET RUNS: {target + 1} </h4>
      </div>

      <div className="UserChoice">
        <h4>SELECT YOUR CHOICE</h4>
        <div className="ChoiceRow">
          <button className="ChoiceButton" onClick={() => handleUserChoice(1)}>
            1
          </button>
          <button className="ChoiceButton" onClick={() => handleUserChoice(2)}>
            2
          </button>
          <button className="ChoiceButton" onClick={() => handleUserChoice(3)}>
            3
          </button>
        </div>
        <div className="ChoiceRow2">
          <button className="ChoiceButton" onClick={() => handleUserChoice(4)}>
            4
          </button>
          <button className="ChoiceButton" onClick={() => handleUserChoice(5)}>
            5
          </button>
          <button className="ChoiceButton" onClick={() => handleUserChoice(6)}>
            6
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerSecond;
