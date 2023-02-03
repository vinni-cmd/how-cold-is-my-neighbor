import { useState } from 'react';
import './Form.css'

const Form = ({ handleFormSubmission }) => {
  const [userCity, setUserCity] = useState('');
  const [neighborCity, setNeighborCity] = useState('');
  const [weatherDetails, setWeatherDetails] = useState({
    temperatureSelected: false,
    cloudSelected: false,
    windSelected: false,
    humiditySelected: false,
    twilightSelected: false,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target
    setWeatherDetails({
      ...weatherDetails,
      [name]: checked,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmission({ userCity, neighborCity, weatherDetails });
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
        <legend>Select your locations</legend>
        <label htmlFor="userCity">Your location: </label>
        <input type="text" name="userCity" id="userCity" onChange={(e) => { setUserCity(e.target.value) }} value={userCity} required list='commonLocations' />
        <label htmlFor="neighborCity">Your neighbor's location: </label>
        <input type="text" name="neighborCity" id="neighborCity" value={neighborCity} onChange={(e) => { setNeighborCity(e.target.value) }} required list='commonLocations' />
        <datalist id='commonLocations'>
          <option value="Toronto"></option>
          <option value="Montreal"></option>
          <option value="Vancouver"></option>
          <option value="Quebec City"></option>
          <option value="Calgary"></option>
          <option value="Ottawa"></option>
          <option value="Winnipeg"></option>
          <option value="Halifax"></option>
          <option value="Victoria"></option>
          <option value="Edmonton"></option>
          <option value="St. John's"></option>
          <option value="Saskatoon"></option>
          <option value="Regina"></option>
          <option value="Saint John"></option>
          <option value="Charlottetown"></option>
          <option value="Whitehorse"></option>
          <option value="Yellowknife"></option>
          <option value="Iqaluit"></option>
          <option value="Fredericton"></option>
        </datalist>
      </fieldset>
      <fieldset>
        <legend>Weather details</legend>
        {/* just make a button styled like input? */}
        {/* <input type="checkbox" name="allWeather" id="allWeather" />
        <label htmlFor="allWeather">All</label> */}
        <input type="checkbox" name="temperatureSelected" id="temperature" checked={weatherDetails.temperature} onChange={handleInputChange} />
        <label htmlFor="temperature">Temperature</label>
        <input type="checkbox" name="windSelected" id="wind" checked={weatherDetails.wind} onChange={handleInputChange} />
        <label htmlFor="wind">Wind</label>
        <input type="checkbox" name="humiditySelected" id="humidity" checked={weatherDetails.humidity} onChange={handleInputChange} />
        <label htmlFor="humidity">Humidity</label>
        <input type="checkbox" name="cloudSelected" id="cloud" checked={weatherDetails.cloud} onChange={handleInputChange} />
        <label htmlFor="cloud">Clouds</label>
        <input type="checkbox" name="twilightSelected" id="twilight" checked={weatherDetails.twilight} onChange={handleInputChange} />
        <label htmlFor="twilight">Twilight</label>
      </fieldset>
      {/* <fieldset>
        <legend>Admin</legend>
        <input type="checkbox" name="preference" id="preference" />
        <label htmlFor="preference">Remember preferences</label>
      </fieldset> */}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form