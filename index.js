function convertTemperature() {
    var temperatureInput = document.getElementById('temperature').value;
    var unit = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');

     
    if (isNaN(temperatureInput)) {
        resultElement.innerHTML = 'Please enter a valid number.';
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var convertedUnit;

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemperature = temperature + 273.15;
        convertedUnit = 'Kelvin';
    }

    resultElement.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}