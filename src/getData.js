/* eslint-disable */

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3a24b595fea8448f85c165328233012&q=${location}`,
      { mode: "cors" },
    );
    const weatherDataPromise = response.json();
    const weatherData = await weatherDataPromise;
    return weatherData;
  } catch {
    (error) => {
      console.log(error);
    };
  }
}

export { getWeatherData };
