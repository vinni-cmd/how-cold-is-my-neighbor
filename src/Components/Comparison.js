const Comparison = ({ userWeather, uncleWeather, weatherSelection }) => {
  const {
    temperatureSelected,
    cloudSelected,
    windSelected,
    humiditySelected,
    twilightSelected
  } = weatherSelection

  const comparison = calcDiff(userWeather, uncleWeather);

  function calcDiff(weatherObj1, weatherObj2) {
    const diffObj = {};
    for (let weatherDetail in weatherObj2) {
      if (typeof (weatherObj2[weatherDetail]) === "number") {
        diffObj[weatherDetail] = weatherObj2[weatherDetail] - weatherObj1[weatherDetail];
      }
    }
    return diffObj;
  }

  return (
    <div className="comparison">
      <h3>Comparison</h3>
      <ul>
        {
          !temperatureSelected ? null : (
            <>
              <li>Your Uncle is {Math.round(Math.abs(comparison.temp) * 100) / 100}°C {
                (comparison.temp) > 0 ? 'warmer' : 'colder'
              }</li>
              <li>Your Uncle feels {Math.round(Math.abs(comparison.feelTemp) * 100) / 100}°C {
                (comparison.feelTemp) > 0 ? 'warmer' : 'colder'
              }</li>
            </>
          )
        }
        {
          !windSelected ? null : (
            <li>Your Uncle's city is {comparison.windSpeed > 0 ? 'more' : comparison.windSpeed < 0 ? 'less' : 'just as'} windy</li>
          )
        }
        {
          !humiditySelected ? null : (
            <li>Your Uncle is {Math.abs(comparison.humidityPerc)}% {comparison.humidityPerc > 0 ? 'less likely' : 'more likely'} to have dry skin*</li>
          )
        }
        {
          !cloudSelected ? null : (
            <li>Your Uncle is having a {comparison.cloudCover > 10 ? 'more' : comparison.cloudCover < -10 ? 'less' : 'similarly'} cloudy day</li>
          )
        }
        {
          !twilightSelected ? null : (
            <li>Your Uncle gets {comparison.daylightInMin === 0 ? 'the same amount of' : `${Math.abs(comparison.daylightInMin)} minutes`} {comparison.daylightInMin > 0 ? 'more' : 'less'} daylight</li>
          )
        }
      </ul>
    </div>
  )
}

export default Comparison