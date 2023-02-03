const CityResult = ({ cityWeather, weatherSelection }) => {

  const {
    temperatureSelected,
    cloudSelected,
    windSelected,
    humiditySelected,
    twilightSelected
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
      <ul>
        {
          !temperatureSelected ? null : (
            <>
              <li>Temperature {temp}°<span class="sub">C</span>
              </li>
              <li>Feels like {feelTemp}°<span class="sub">C</span></li>
            </>
          )
        }
        {
          !windSelected ? null : (
            <li>Wind {windDirection} {windSpeed} m/s</li>
          )
        }
        {
          !humiditySelected ? null : (
            <li>Humidity {humidityPerc}%</li>
          )
        }
        {
          !cloudSelected ? null : (
            <li>Cloud Cover {cloudCover}%</li>
          )
        }
        {
          !twilightSelected ? null : (
            <>
              <li>Sunrise {sunrise}</li>
              <li>Sunset {sunset}</li>
            </>
          )
        }
      </ul>
      {
        conditions.map(condition => <p>{condition}</p>)
      }
    </div>
  )
}

export default CityResult