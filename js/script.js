function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
    var result;
  
    if (unit === "celsius") {
      result = (temperature * 9/5) + 32;
      resultElement.innerHTML = temperature + " °C = " + result.toFixed(2) + " °F";
    } else if (unit === "fahrenheit") {
      result = (temperature - 32) * 5/9;
      resultElement.innerHTML = temperature + " °F = " + result.toFixed(2) + " °C";
    } else if (unit === "kelvin") {
      result = temperature - 273.15;
      resultElement.innerHTML = temperature + " K = " + result.toFixed(2) + " °C";
    }
  }
  