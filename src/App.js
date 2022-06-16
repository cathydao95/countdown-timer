import Time from "./components/Time";
// import Buttons from "./components/Buttons";
import Start from "./components/Start";
import Counter from "./components/Counter";
import { useState, useEffect } from "react";

function App() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  function handleStart() {
    setRunning(true);
    console.log(timer);
  }

  function pauseCount() {
    console.log("pausing");
  }

  function restartCount() {
    console.log("restarting");
    setRunning(false);
  }

  // console.log(timer);

  function handleChange(event) {
    setTimer((prevTimer) => {
      return {
        ...prevTimer,
        [event.target.name]: Number(event.target.value),
      };
    });
    countDown();
  }

  function countDown() {
    console.log("this works");
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      {running ? (
        <div>
          <Counter
            pauseCount={pauseCount}
            restartCount={restartCount}
            timer={timer}
          />
        </div>
      ) : (
        <div>
          <Time placeholder="HH" name="hours" handleChange={handleChange} />
          <Time placeholder="MM" name="minutes" handleChange={handleChange} />
          <Time placeholder="SS" name="seconds" handleChange={handleChange} />
          <Start handleStart={handleStart} />
        </div>
      )}
    </div>
  );
}

export default App;
