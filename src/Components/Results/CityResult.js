import { FaWind, FaCloudSun, FaTemperatureHigh, FaGrinBeamSweat, FaRegGrinBeamSweat } from 'react-icons/fa';
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi'
import { BsCloudSunFill, BsCloudSun } from 'react-icons/bs'
import { TbTemperatureCelsius, TbTemperature } from 'react-icons/tb'
import { CiTempHigh } from 'react-icons/ci'
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
      <ul>
        {
          !temperatureSelected ? null : (
            <>
              <li> <SiSnowflake />Temperature {temp}°<span class="sub">C</span><TbTemperatureCelsius />
              </li>
              <li><GiClothes /> Feels like {feelTemp}°<span class="sub">C</span></li>
            </>
          )
        }
        {
          !windSelected ? null : (
            <li> <FaWind /> Wind {windDirection} {windSpeed} m/s</li>
          )
        }
        {
          !humiditySelected ? null : (
            <li><WiHumidity /> <FaGrinBeamSweat /> <FaRegGrinBeamSweat /> Humidity {humidityPerc}%</li>
          )
        }
        {
          !cloudSelected ? null : (
            <li><BsCloudSunFill /> <FaCloudSun /> <BsCloudSun /> Cloud Cover {cloudCover}%</li>
          )
        }
        {
          !twilightSelected ? null : (
            <>
              <li><FiSunrise /> Sunrise {sunrise}</li>
              <li><FiSunset /> Sunset {sunset}</li>
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