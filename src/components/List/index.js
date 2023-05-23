import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  const goodWeatherText = "The weather is awesome! Go outside and:";
  const badWeatherText = "Bad weather outside! Here's what you can do now:";
  const text = isGoodWeather ? goodWeatherText : badWeatherText;
  const emptyListText = "There are no activities to do.";

  const filteredActivities = activities
    .filter((activity) => activity.isForGoodWeather === isGoodWeather)
    .map(({ id, name }) => {
      return (
        <li key={id}>
          {name}
          <button onClick={() => onDeleteActivity(id)}>x</button>
        </li>
      );
    });

  return (
    <>
      <h2>{filteredActivities.length > 0 ? text : emptyListText}</h2>
      <ul className="list">{filteredActivities}</ul>
    </>
  );
}
