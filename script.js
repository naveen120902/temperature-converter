const celsiusEl = document.getElementById("Celsius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celsius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celsiusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;



        default:
            break;
    }
}