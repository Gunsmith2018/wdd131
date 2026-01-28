
// Hard Coded varaiables used to have windChill to operate for Farhrenheit
let mph = 5;   // This is wind speed in Miles Per Hour
let farH = 34; // This is in Fahrenheit 

function windChill() { // windchill function that checks if variables passed through meet less than 50 degrees farhrenehit or less than 3 mph
    if (farH <= 50 || mph < 3) {
        return Math.round(35.74 + (.6215 * farH) - 35.75 * (mph ** .16) + .4275 * (farH * (mph ** .16)));
    }
    else {
        return 'Not Avalaible';
    }
}
// Fill in HTML elements by ID
document.getElementById("temp").innerHTML = `${farH} &deg;F`;
document.getElementById('wind').innerHTML = `${mph}mph`;
document.getElementById('windchill').innerHTML = `${windChill()}&deg;F`;