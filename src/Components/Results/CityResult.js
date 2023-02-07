import { FaWind, FaCloudSun } from 'react-icons/fa';
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import { GiClothes } from 'react-icons/gi'
import { SiSnowflake } from 'react-icons/si'

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
      {
        conditions.map(condition => <p>{condition}</p>)
      }
      <ul>
        {
          !temperatureSelected ? null : (
            <>
              <li> <SiSnowflake className='weather-icon' />Temperature <span class="result-value">{temp}°C</span>
              </li>
              <li><GiClothes className='weather-icon' />Feels like <span class="result-value">{feelTemp}°C</span></li>
            </>
          )
        }
        {
          !windSelected ? null : (
            <li><FaWind className='weather-icon' />Wind <span class="result-value">{windDirection} {windSpeed} m/s</span></li>
          )
        }
        {
          !humiditySelected ? null : (
            <li><WiHumidity className='weather-icon' />Humidity <span class="result-value">{humidityPerc}%</span></li>
          )
        }
        {
          !cloudSelected ? null : (
            <li><FaCloudSun className='weather-icon' />Cloud Cover <span class="result-value">{cloudCover}%</span></li>
          )
        }
        {
          !twilightSelected ? null : (
            <>
              <li><FiSunrise className='weather-icon' />Sunrise <span class="result-value">{sunrise}</span></li>
              <li><FiSunset className='weather-icon' />Sunset <span className='result-value'>{sunset}</span></li>
            </>
          )
        }
      </ul>
    </div>
  )
}

export default CityResult