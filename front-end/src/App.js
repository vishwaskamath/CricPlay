import "./App.css";
import React, { useState } from "react";
import PlayerFirst from "./PlayerFirst";
import PlayerSecond from "./PlayerSecond";

function App() {
  const [isFirstPlayerDone, setIsFirstPlayerDone] = useState(false);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);

  const handleFirstPlayerOut = (score) => {
    console.log(score);
    setFirstPlayerScore(score);
    setIsFirstPlayerDone(true);
  };

  return (
    <div className="App">
      <h1>CricPlay</h1>
      {!isFirstPlayerDone ? (
        <PlayerFirst onOut={handleFirstPlayerOut} />
      ) : (
        <PlayerSecond target={firstPlayerScore} />
      )}
    </div>
  );
}

export default App;
