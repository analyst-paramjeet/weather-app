import { useRef } from "react";
import "./Form.css";

export default function Form({ onAddActivity }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (!data.name || data.name === " ") {
      return;
    }

    data.isForGoodWeather = data.isForGoodWeather ? true : false;
    onAddActivity(data);
    event.target.reset();
    inputRef.current.focus();
  }

  const inputRef = useRef();

  return (
    <form onSubmit={onSubmit}>
      <h2>Add new Activity:</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input ref={inputRef} className="activity__name" name="name" id="name" type="text" />
      </div>
      <div>
        <label htmlFor="isForGoodWeather">Good-weather activity:</label>
        <input name="isForGoodWeather" id="isForGoodWeather" type="checkbox" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
