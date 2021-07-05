import React, { useState } from "react";
import { fetchWeather } from "../redux/actions";
import { useDispatch } from "react-redux";

function SearchBar() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(term));
    setTerm("");
  };

  return (
    <form onSubmit={onFormSubmit} className="input-group mb-3">
      <input
        placeholder="Get a five-day forecast in your favourite cities"
        className="form-control"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </span>
    </form>
  );
}

export default SearchBar;
