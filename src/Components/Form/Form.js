import { useState } from 'react';
import CityDatalist from './Datalist';

const Form = ({ handleFormSubmission, handleFormReset }) => {
  const [userCity, setUserCity] = useState('');
  const [neighborCity, setNeighborCity] = useState('');

  // form reset button does not by default reset state
  const defaultWeatherDetails = {
    allWeatherSelected: false,
    temperatureSelected: false,
    cloudSelected: false,
    windSelected: false,
    humiditySelected: false,
    twilightSelected: false,
  }

  const [weatherDetails, setWeatherDetails] = useState(defaultWeatherDetails);


  const handleInputChange = (e) => {
    const { name, checked } = e.target
    setWeatherDetails({
      ...weatherDetails,
      [name]: checked,
    })
  }

  const handleAllClick = (e) => {
    if (!e.target.checked) {
      setWeatherDetails(defaultWeatherDetails)
    } else {
      setWeatherDetails({
        allWeatherSelected: true,
        temperatureSelected: true,
        cloudSelected: true,
        windSelected: true,
        humiditySelected: true,
        twilightSelected: true,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmission({ userCity, neighborCity, weatherDetails });
  }

  const handleReset = (e) => {
    e.preventDefault();
    setUserCity('');
    setNeighborCity('');
    setWeatherDetails(defaultWeatherDetails);
    handleFormReset();
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <fieldset>
        <legend>Login credentials</legend>
        <label htmlFor="userName">User Name: </label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="userPassword">User Name: </label>
        <input type="password" name="userPassword" id="userPassword" />
      </fieldset> */}
      <fieldset>
        <legend>Select locations</legend>
        <label htmlFor="userCity">Your location: </label>
        <input type="text" name="userCity" id="userCity" onChange={(e) => { setUserCity(e.target.value) }} value={userCity} required list='commonLocations' />
        <label htmlFor="neighborCity">Your neighbor's location: </label>
        <input type="text" name="neighborCity" id="neighborCity" value={neighborCity} onChange={(e) => { setNeighborCity(e.target.value) }} required list='commonLocations' />
        <CityDatalist />
      </fieldset>
      <fieldset>
        <legend>Weather details</legend>
        {/* just make a button styled like input? */}
        {/* <input type="checkbox" name="allWeather" id="allWeather" />
        <label htmlFor="allWeather">All</label> */}
        <input type="checkbox" id="allWeatherSelected" name='allWeatherSelected' onClick={handleAllClick} checked={weatherDetails.allWeatherSelected} />
        <label htmlFor="allWeatherSelected">All</label>
        <input type="checkbox" name="temperatureSelected" id="temperatureSelected" checked={weatherDetails.temperatureSelected} onChange={handleInputChange} />
        <label htmlFor="temperature">Temperature</label>
        <input type="checkbox" name="windSelected" id="wind" checked={weatherDetails.windSelected} onChange={handleInputChange} />
        <label htmlFor="wind">Wind</label>
        <input type="checkbox" name="humiditySelected" id="humidity" checked={weatherDetails.humiditySelected} onChange={handleInputChange} />
        <label htmlFor="humidity">Humidity</label>
        <input type="checkbox" name="cloudSelected" id="cloud" checked={weatherDetails.cloudSelected} onChange={handleInputChange} />
        <label htmlFor="cloud">Clouds</label>
        <input type="checkbox" name="twilightSelected" id="twilight" checked={weatherDetails.twilightSelected} onChange={handleInputChange} />
        <label htmlFor="twilight">Twilight</label>
      </fieldset>
      {/* <fieldset>
        <legend>Admin</legend>
        <input type="checkbox" name="preference" id="preference" />
        <label htmlFor="preference">Remember preferences</label>
      </fieldset> */}
      <button type="submit">Submit</button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </form>
  )
}

export default Form