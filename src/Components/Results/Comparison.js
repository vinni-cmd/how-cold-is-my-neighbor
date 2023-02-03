const Comparison = ({ userWeather, neighborWeather, weatherSelection }) => {

  const {
    temperatureSelected,
    cloudSelected,
    windSelected,
    humiditySelected,
    twilightSelected
  } = weatherSelection

  const {
    temp: userTemp,
    feelTemp: userFeelTemp,
    windSpeed: userWindSpeed,
    cloudCover: userCloudCover,
    humidityPerc: userHumidityPerc,
    sunrise: userSunrise,
    sunset: userSunset,
    daylightInMin: userDaylightInMin
  } = userWeather

  const {
    temp: neighborTemp,
    feelTemp: neighborFeelTemp,
    windSpeed: neighborWindSpeed,
    cloudCover: neighborCloudCover,
    humidityPerc: neighborHumidityPerc,
    sunrise: neighborSunrise,
    sunset: neighborSunset,
    daylightInMin: neighborDaylightInMin
  } = neighborWeather

  return (
    <div>
      <h3>Comparison2</h3>
      <ul>
        {
          !temperatureSelected ? null : (
            <>
              <li>Neighbor Temp is {neighborTemp - userTemp} degrees C different</li>
              <li>Neighbor Temp feels {neighborFeelTemp - userFeelTemp} degrees C different</li>
            </>
          )
        }
        {
          !windSelected ? null : (
            <li>Neighbor windspeed is {neighborWindSpeed - userWindSpeed} meter/sec different</li>
          )
        }
        {
          !humiditySelected ? null : (
            <li>Neighbor humidity is {neighborHumidityPerc - userHumidityPerc} % different</li>
          )
        }
        {
          !cloudSelected ? null : (
            <li>Neighbor is {neighborCloudCover - userCloudCover} %</li>
          )
        }
        {
          !twilightSelected ? null : (
            <li>Nighbor has {neighborDaylightInMin - userDaylightInMin} minutes more daylight </li>
          )
        }
      </ul>
    </div>
  )
}

export default Comparison