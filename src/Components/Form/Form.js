import { useState } from 'react';
import CityDatalist from './Datalist';

const Form = ({ handleFormSubmission, handleFormReset }) => {
  const [userCity, setUserCity] = useState('');
  const [neighborCity, setNeighborCity] = useState('');

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
    const { name, checked } = e.target;
    setWeatherDetails({
      ...weatherDetails,
      [name]: checked,
    });
  }

  const handleAllClick = (e) => {
    if (!e.target.checked) {
      setWeatherDetails(defaultWeatherDetails);
    } else {
      setWeatherDetails({
        allWeatherSelected: true,
        temperatureSelected: true,
        cloudSelected: true,
        windSelected: true,
        humiditySelected: true,
        twilightSelected: true,
      });
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
      <fieldset>
        <legend>Select locations</legend>
        <div className="location-detail-inputs">
          <label htmlFor="userCity">Your location: </label>
          <input type="text" name="userCity" id="userCity" onChange={(e) => { setUserCity(e.target.value) }} value={userCity} required list='commonLocations' />
          <label htmlFor="neighborCity">Neighbor location: </label>
          <input type="text" name="neighborCity" id="neighborCity" value={neighborCity} onChange={(e) => { setNeighborCity(e.target.value) }} required list='commonLocations' />
        </div>
        <CityDatalist />
      </fieldset>
      <fieldset>
        <legend>Weather details</legend>
        <div className="weather-detail-inputs">
          <input type="checkbox" id="allWeatherSelected" name='allWeatherSelected' onChange={handleAllClick} checked={weatherDetails.allWeatherSelected} />
          <label htmlFor="allWeatherSelected">All</label>
          <input type="checkbox" name="temperatureSelected" id="temperature" checked={weatherDetails.temperatureSelected} onChange={handleInputChange} />
          <label htmlFor="temperature">Temperature</label>
          <input type="checkbox" name="windSelected" id="wind" checked={weatherDetails.windSelected} onChange={handleInputChange} />
          <label htmlFor="wind">Wind</label>
          <input type="checkbox" name="humiditySelected" id="humidity" checked={weatherDetails.humiditySelected} onChange={handleInputChange} />
          <label htmlFor="humidity">Humidity</label>
          <input type="checkbox" name="cloudSelected" id="cloud" checked={weatherDetails.cloudSelected} onChange={handleInputChange} />
          <label htmlFor="cloud">Clouds</label>
          <input type="checkbox" name="twilightSelected" id="twilight" checked={weatherDetails.twilightSelected} onChange={handleInputChange} />
          <label htmlFor="twilight">Twilight</label>
        </div>
      </fieldset>
      <button type="submit">Submit</button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </form>
  )
}

export default Form;