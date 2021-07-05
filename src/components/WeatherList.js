import React from "react";
import { useSelector } from "react-redux";
import Chart from "./Chart";

function WeatherList() {
  const weather = useSelector((state) => state.weather);

  const renderWeather = (cityData, index) => {
    const temps = cityData.list
      .map((weather) => weather.main.temp)
      .map((temp) => temp - 273);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const name = cityData.city.name;
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>
          <Chart data={temps} units="&deg;C" />
        </td>
        <td>
          <Chart data={pressures} units="hPa" />
        </td>
        <td>
          <Chart data={humidities} units="%" />
        </td>
      </tr>
    );
  };

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature(&deg;C)</th>
          <th>Pressure(hPa)</th>
          <th>Humidity(%)</th>
        </tr>
      </thead>
      <tbody>{weather.map(renderWeather)}</tbody>
    </table>
  );
}

export default WeatherList;
