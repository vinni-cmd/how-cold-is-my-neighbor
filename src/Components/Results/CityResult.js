const CityResult = ({ cityWeather, weatherSelection }) => {

  const {
    temperature,
    cloud,
    wind,
    humidity,
    twilight
  } = weatherSelection

  const {
    city,
    country,
    conditions,
    temp,
    feelTemp,
    windSpeed,
    windDirection,
    cloudCover,
    humidityPerc,
    sunrise,
    sunset
  } = cityWeather

  return (
    // add conditional css class here mentioned in first lessons on react
    <div>
      <h3>{city}, {country}</h3>
      {
        // not actually an array so maybe push into one earlier or do some string trickery
        <p>{conditions}</p>
      }
      <ul>
        {
          !temperature ? null : (
            <li>User Temp is {temp} degrees C which feels like {feelTemp} C</li>
          )
        }
        {
          !wind ? null : (
            <li>User wind is {windDirection} {windSpeed} meter/sec</li>
          )
        }
        {
          !humidity ? null : (
            <li>Humidity {humidityPerc} %</li>
          )
        }
        {
          !cloud ? null : (
            <li>Cloud cover is {cloudCover} %</li>
          )
        }
        {
          !twilight ? null : (
            <>
              <li>Sunrise is {sunrise}</li>
              <li>Sunset is {sunset}</li>
            </>
          )
        }
      </ul>
    </div>
  )
}

export default CityResult