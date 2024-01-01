/* eslint-disable */

const renderDom = function (object) {
  const content = document.querySelector(".content");
  if (document.contains(document.getElementById("generated"))) {
    document.getElementById("generated").remove();
  }
  const generatedContent = document.createElement("div");
  generatedContent.setAttribute("id", "generated");
  const headingDiv = document.createElement("div");
  headingDiv.setAttribute("class", "heading");
  const location = document.createElement("h1");
  const tempDiv = document.createElement("div");
  const humidityDiv = document.createElement("div");
  const conditionDiv = document.createElement("h2");
  const feelTempDiv = document.createElement("div");
  const iconDiv = document.createElement("img");
  iconDiv.style.cssText = "width: 100px; height: 100px;";
  location.textContent = `${object.location.name}`;
  tempDiv.textContent = `Temperature: ${object.current.temp_c}C`;
  humidityDiv.textContent = `Humidity: ${object.current.humidity}`;
  conditionDiv.textContent = `${object.current.condition.text}`;
  feelTempDiv.textContent = `Feels Like: ${object.current.feelslike_c}C`;
  iconDiv.setAttribute("src", `${object.current.condition.icon}`);
  headingDiv.append(location, iconDiv);
  generatedContent.append(
    headingDiv,
    conditionDiv,
    tempDiv,
    feelTempDiv,
    humidityDiv,
  );

  content.appendChild(generatedContent);
};

export { renderDom };
