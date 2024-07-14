import { useEffect, useState } from "react";

function Watch() {
  const [elapsetime, setElapsetime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsetime((e) => e + 1);
      }, 1000);
      console.log(intervalId);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const reset = () => {
    setIsRunning(false);
    setElapsetime(0);
  };

  const timeSchema = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingTime = seconds % 60;
    return `${minutes}:${remainingTime < 10 ? "0" : ""}${remainingTime}`;
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <div>
        Time <span>{timeSchema(elapsetime)}</span>
      </div>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Watch;
