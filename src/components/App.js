import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

function App() {
  return (
    <div className="App">
      <div>
        <div className="header">
          <h2>WEATHER APP</h2>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    </div>
  );
}

export default App;
