const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "4a6776bce7eec69034c55ac2bf83a585";
const grd = document.querySelector(".grd");

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if(city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
    grd.style.display = "flex";
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
}

function displayWeatherInfo(data) {
    // console.log(data);
    const { name: city,
            main: { temp, humidity }, // Corrected spelling of humidity
            weather: [{ description, id }]
          } = data;
    card.textContent = "";
    card.style.display = "flex"; // Corrected the way to set display property

    const cityD = document.createElement("h1");
    const tempD = document.createElement("p");
    const humidityD = document.createElement("p"); // Corrected variable name
    const descriptionD = document.createElement("p");
    const idD = document.createElement("p");

    cityD.textContent = `${city}`;
    tempD.textContent = `Temperature: ${(temp-273.15).toFixed(1)}*C`;
    humidityD.textContent = `Humadity: ${humidity}%`; // Corrected variable name
    descriptionD.textContent = `Description: ${description}`;
    idD.textContent = `ID: ${id}`;

    card.appendChild(cityD);
    card.appendChild(tempD);
    card.appendChild(humidityD);
    card.appendChild(descriptionD);
    // card.appendChild(idD);

    // Update UI to display weather information
}


function getWeatherEmoji(weatherId) {
    // Implement logic to get weather emoji based on weather ID
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    // Append error message to the DOM where you want to display it
    // For example: card.appendChild(errorDisplay);
}
