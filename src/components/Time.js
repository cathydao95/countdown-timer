function Time(props) {
  return (
    <div>
      <input
        type="number"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        name={props.name}
      ></input>
    </div>
  );
}

export default Time;
