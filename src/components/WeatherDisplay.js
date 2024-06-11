/** @format */

import React from "react";
import windspeed from "../imges/wind.png";
import humidity from "../imges/humidity.png";
import cloud from "../imges/cloud.png";
function WeatherDisplay(props) {
  const { data } = props;
  const { name, main, weather, sys, wind, clouds } = data;
  const currentDate = new Date().toLocaleString();
  const iconCode = weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const country = sys.country.toLowerCase();

  return (
    <div className="weather-display col-12 col-md-6 mx-auto">
      <div className="location">
        {" "}
        <h2 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {name}
        </h2>
      </div>
      <img
        className="countryimage ms-3"
        src={`https://flagcdn.com/144x108/${country}.png `}
        alt={`Flag of ${sys?.country}`}
      />

      <div className="description mt-2">
        {" "}
        <h3 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {weather[0].description}
        </h3>
      </div>
      <div className="description mt-2">
        {" "}
        <p style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {currentDate}
        </p>
      </div>
      <div className="description mt-0">
        <img src={iconUrl} />
      </div>

      <div className="description mt-2">
        {" "}
        <h1 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {main.temp}°C
        </h1>
      </div>

      {/* card section start*/}
      <div class="container my-5">
        <div
          class="row cardinfo"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
          }}
        >
          <div
            class="col-md-4 cardbody"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
            }}
          >
            <div
              class="card"
              style={{
                backgroundColor: props.mode === "dark" ? "#6A89AA" : "white",
              }}
            >
              <img
                src={windspeed}
                class=" mx-auto d-block"
                alt="Card Image 1"
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                >
                  Wind Speed
                </h5>
                <h5
                  class="card-title"
                  style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                >
                  {wind.speed}
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 cardbody">
            <div
              class="card"
              style={{
                backgroundColor: props.mode === "dark" ? "#6A89AA" : "white",
              }}
            >
              <img src={humidity} class="mx-auto d-block" alt="Card Image 2" />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                >
                  Humidity
                </h5>
                <h5
                  class="card-title"
                  style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                >
                  {main.humidity}
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 cardbody">
            <div
              class="card"
              style={{
                backgroundColor: props.mode === "dark" ? "#6A89AA" : "white",
              }}
            >
              <img src={cloud} class="mx-auto d-block" alt="Card Image 3" />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                >
                  Rain chnace
                </h5>
                <h5
                  class="card-title"
                  style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                >
                  {clouds.all}%
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section end */}
    </div>
  );
}

export default WeatherDisplay;
