function Counter(props) {
  return (
    <div>
      <input
        type="text"
        value={props.timer.hours || ""}
        // onChange={props.handleHours}
        onChange={props.countDown}
      ></input>
      <input
        type="text"
        value={props.timer.minutes || ""}
        onChange={props.countDown}
        // onChange={props.handleMinutes}
      ></input>
      <input
        type="text"
        value={props.timer.seconds || ""}
        onChange={props.countDown}
        // onChange={props.handleSeconds}
      ></input>
      <button onClick={props.pauseCount}>Pause</button>
      <button onClick={props.restartCount}>Restart</button>
    </div>
  );
}

export default Counter;
