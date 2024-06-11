/** @format */

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import SearchForm from "./SearchForm";
import Spinner from "./Spinner";

export default function Home(props) {
  const API_KEY = "999578f3887427bd053ca64a0764e4f5";

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [spinner, setspinner] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherDataByCoords(latitude, longitude);
      },
      (error) => setError("Unable to retrieve your location")
    );
  }, []);

  // Api fetch weather by getting location Access
  const fetchWeatherDataByCoords = async (lat, lon) => {
    try {
      setspinner(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setspinner(false);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data.");
      setspinner(false);
    }
  };

  // Api fetch data by asking location and Zip Code
  const fetchWeatherData = async (loc) => {
    try {
      setspinner(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}&units=metric`
      );
      setspinner(false);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data. Please check your input.");
      setspinner(false);
    }
  };

  const handleSearch = (loc) => {
    fetchWeatherData(loc);
  };

  return (
    <div className="col-sm-12 mx-auto  main bg-${props.mode} navbar-${props.mode}">
      <div class="position-relative mt-2 me-3">
        <div class="position-absolute top-0 end-0">
          <div
            className={`form-check form-switch  text-${
              props.mode === "light" ? "dark" : "light"
            } `}
          >
            <input
              className="form-check-input border-1 shadow-none "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label>
          </div>
        </div>
      </div>
      <h1
        className="appname py-5"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        WEATHER APP
      </h1>

      {/* search form section start */}

      <SearchForm onSearch={handleSearch} />
      <div className="col-12 col-md-6 mx-auto mt-4">
        {error && (
          <h5
            className="error"
            style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          >
            {error}
          </h5>
        )}
      </div>
      {/* search form section end */}

      {/* Spinner component start */}

      <div className="col-4 col-md-1 mx-auto mt-4">
        {spinner === true ? <Spinner /> : ""}
      </div>
      {/* Spinner component end */}

      {/* Weather display component start */}

      <div className="col-sm-12 my-4">
        {weatherData && <WeatherDisplay data={weatherData} mode={props.mode} />}
      </div>

      {/* weather component end */}
    </div>
  );
}
