// helper function found on stackoverflow 
function calcWindDirection(degree) {
  const value = Math.floor((degree / 22.5) + 0.5);
  const cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return cardinals[(value % 16)];
}

// https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/
function convertUnixToLocal(unix, timeZoneShift) {
  const localTime = unix + timeZoneShift;
  // convert to milliseconds and then create a new Date object
  const dateObj = new Date(localTime * 1000);
  const utcString = dateObj.toUTCString();
  const time = utcString.slice(-12, -6);
  return time;
}

export { calcWindDirection, convertUnixToLocal }