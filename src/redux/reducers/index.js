import { combineReducers } from "redux";
import weatherReducer from "./reducer_weather";

const rootreducer = combineReducers({
  weather: weatherReducer,
});
export default rootreducer;
