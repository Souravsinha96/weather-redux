import axios from "axios";

const API = process.env.REACT_APP_API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => async (dispatch) => {
  const url = `${ROOT_URL}&q=${city}`;
  const response = await axios.get(url);

  dispatch({
    type: FETCH_WEATHER,
    payload: response.data,
  });
};
