const convertToCelsius = function(temp) {
  const tempVal = (temp - 32) * (5 / 9);
  if (tempVal - Math.floor(tempVal) != 0) {
    const rounded = tempVal.toFixed(1); 
  return parseFloat(rounded);
  }
  else {
    return tempVal;
  }
};

const convertToFahrenheit = function(temp) {
  const tempVal = (temp * 9 / 5 + 32);
  if (tempVal - Math.floor(tempVal) != 0) {
    const rounded = tempVal.toFixed(1);
  return parseFloat(rounded);
  }
  else {
    return tempVal;
  }
};

//convertToCelsius(100);
convertToFahrenheit(0);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/* TOP solution 
const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
}; */