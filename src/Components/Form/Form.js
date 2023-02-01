import { useState } from 'react';
import './Form.css'

const Form = ({ handleFormSubmission }) => {
  const [userCity, setUserCity] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleFormSubmission(userCity);
    }}>
      <fieldset>
        <legend>Login credentials</legend>
        <label htmlFor="userName">User Name: </label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="userPassword">User Name: </label>
        <input type="password" name="userPassword" id="userPassword" />
      </fieldset>
      <fieldset>
        <legend>Select your locations</legend>
        <label htmlFor="userCity">Your location: </label>
        <input type="text" name="userCity" id="userCity" onChange={(e) => { setUserCity(e.target.value) }} value={userCity} />
        <label htmlFor="neighborCity">Your neighbor's location: </label>
        <input type="text" name="neighborCity" id="neighborCity" />
      </fieldset>
      <fieldset>
        <legend>Weather details</legend>
        <input type="checkbox" name="allWeather" id="allWeather" />
        <label htmlFor="allWeather">All</label>
        <input type="checkbox" name="temp" id="temp" />
        <label htmlFor="temp">Temperature</label>
        <input type="checkbox" name="cloudCover" id="cloudCover" />
        <label htmlFor="cloudCover">Clouds</label>
        <input type="checkbox" name="wind" id="wind" />
        <label htmlFor="wind">Wind</label>
        <input type="checkbox" name="wind" id="wind" />
        <label htmlFor="wind">Humidity</label>
        <input type="checkbox" name="twilight" id="twilight" />
        <label htmlFor="twilight">Twilight</label>
      </fieldset>
      <fieldset>
        <legend>Admin</legend>
        <input type="checkbox" name="preference" id="preference" />
        <label htmlFor="preference">Remember preferences</label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form