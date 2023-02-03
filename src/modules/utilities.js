// helper function found on stackoverflow 
function calcWindDirection(degree) {
  const value = Math.floor((degree / 22.5) + 0.5);
  const cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return cardinals[(value % 16)];
}

// https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/
function getLocalTime(unix, timeZoneShift) {
  const localDate = convertUnixToLocalDate(unix, timeZoneShift);
  const utcString = localDate.toUTCString();
  console.log('utcString', utcString)
  const time = utcString.slice(-12, -7);
  return time;
}

function calcTimeDiffInMin(unix1, unix2, timeZoneShift) {
  const localDate1 = convertUnixToLocalDate(unix1, timeZoneShift);
  const localDate2 = convertUnixToLocalDate(unix2, timeZoneShift);
  const localMinTime1 = localDate1.getHours() * 60 + localDate1.getMinutes();
  const localMinTime2 = localDate2.getHours() * 60 + localDate2.getMinutes();
  return (localMinTime2 - localMinTime1)
}

function convertUnixToLocalDate(unix, timeZoneShift) {
  const localTime = unix + timeZoneShift;
  // convert to milliseconds and then create a new Date object
  const dateObj = new Date(localTime * 1000);
  console.log('dateObj', dateObj);
  return dateObj
}



export { calcWindDirection, getLocalTime, calcTimeDiffInMin }