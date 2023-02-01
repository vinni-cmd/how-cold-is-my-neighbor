import './Form.css'

const Form = () => {
  return (
    <form>
      <fieldset>
        <legend>Login credentials</legend>
        <label htmlFor="userName">User Name: </label>
        <input type="text" name="userName" id="userName" required />
        <label htmlFor="userPassword">User Name: </label>
        <input type="password" name="userPassword" id="userPassword" required />
      </fieldset>
      <fieldset>
        <legend>Select your locations</legend>
        <label htmlFor="userCity">Your location: </label>
        <input type="text" name="userCity" id="userCity" required />
        <label htmlFor="neighborCity">Your neighbor's location: </label>
        <input type="text" name="neighborCity" id="neighborCity" required />
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
    </form>
  )
}

export default Form