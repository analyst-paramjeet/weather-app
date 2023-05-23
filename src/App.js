import Form from "./components/Form";
import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import useFetch from "./hooks/useFetch";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const url = "https://example-apis.vercel.app/api/weather/europe";
  const { isGoodWeather, condition, temperature } = useFetch(url);

  function handleAddActivity(activityData) {
    activityData.id = uid();
    setActivities([...activities, activityData]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((item) => id !== item.id));
  }

  return (
    <div className="App">
      <header>
        {condition} {temperature} °C
      </header>
      <main>
        <List
          activities={activities}
          isGoodWeather={isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
        {/* <Activities activities={activities} /> */}
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
