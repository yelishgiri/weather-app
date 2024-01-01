/* eslint-disable */

const renderDom = function (object) {
  const content = document.querySelector(".content");
  if (document.contains(document.getElementById("generated"))) {
    document.getElementById("generated").remove();
  }
  const generatedContent = document.createElement("div");
  generatedContent.setAttribute("id", "generated");
  const location = document.createElement("h1");
  const tempDiv = document.createElement("div");
  const humidityDiv = document.createElement("div");
  const conditionDiv = document.createElement("div");
  const feelTempDiv = document.createElement("div");
  const iconDiv = document.createElement("img");
  location.textContent = `${object.location.name}`;
  tempDiv.textContent = `${object.current.temp_c}`;
  humidityDiv.textContent = `${object.current.humidity}`;
  conditionDiv.textContent = `${object.current.condition.text}`;
  feelTempDiv.textContent = `${object.current.feelslike_c}`;
  iconDiv.setAttribute("src", `${object.current.condition.icon}`);
  generatedContent.append(
    location,
    tempDiv,
    humidityDiv,
    conditionDiv,
    iconDiv,
    feelTempDiv,
  );
  content.appendChild(generatedContent);
};

export { renderDom };
