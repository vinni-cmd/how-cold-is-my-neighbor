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
  console.log('unix-1', unix1);
  console.log('unix-2', unix2);
  console.log('timezone', timeZoneShift)
  const localDate1 = convertUnixToLocalDate(unix1, timeZoneShift);
  const localDate2 = convertUnixToLocalDate(unix2, timeZoneShift);
  console.log('localday1', localDate1.toUTCString())
  console.log('localday2', localDate2.toUTCString())
  console.log('local date 1', (localDate1.getDate()))
  console.log('local date 2', (localDate2.getDate()))
  console.log('local hours 1', (localDate1.getHours()))
  console.log('local hours 2', (localDate2.getHours()))
  const localMinTime1 = (localDate1.getUTCHours() * 60) + localDate1.getUTCMinutes();
  console.log('localMinTime1', localMinTime1)
  const localMinTime2 = (localDate2.getUTCHours() * 60) + localDate2.getUTCMinutes();
  console.log('localMinTime2', localMinTime2)

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