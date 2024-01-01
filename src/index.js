/* eslint-disable */

import "./style.css";
import { getWeatherData } from "./getData.js";
import { renderDom } from "./renderDOM.js";

const searchButton = document.querySelector(".search-btn");
searchButton.addEventListener("click", async (event) => {
  const locationInput = document.getElementById("search-bar-input");
  event.preventDefault();
  const weatherObject = await getWeatherData(locationInput.value);
  console.log(weatherObject);
  renderDom(weatherObject);
});
