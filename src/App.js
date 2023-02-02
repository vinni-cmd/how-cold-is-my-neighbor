import './App.css';
import { useState } from 'react';
import { populateWeatherData } from './modules/apis';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';

function App() {
  const [userWeather, setUserWeather] = useState({});
  const [neighborWeather, setNeighborWeather] = useState({});

  const handleFormSubmission = (formData) => {
    const { userCity, neighborCity, weatherDetails } = formData;
    populateWeatherData(userCity, setUserWeather);
    populateWeatherData(neighborCity, setNeighborWeather);
    console.log('userweather', userWeather);
    console.log('neighborweather', neighborWeather)
    console.log(weatherDetails);
  }

  return (
    <div className="App">
      <Header />
      <Form handleFormSubmission={handleFormSubmission} />
      <Footer />
    </div>
  );
}

export default App;


// *** App Component ***
// Create state items to hold data coming from the third-party API and the user input
// - apiData: userCityData
// - apiData: neighborCityData
// - userQuery: userCity
// - userQuery: neighborCity
// - userQuery: weatherDetails {object consisting of user weather detail preferences}
// is it better to split out the above into separate states or is a single state sufficient? Think I can just access the properties inside of the object when I need them.    

// A local method (handleUserCityChange) to handle the onChange event to update state (userCity) with user input

// Once the form is submitted, with valid entries (more error handling required), call the local method (getWeather) to submit an i) API call for the user city weather data and a ii) API call for the neighbor city weather data.

// A local method (getWeather) to make the third-party API calls with user input
// - when both calls are successful (handle with promise.all()), update the userCityData and neighborCityData (use below filter method here or after|just before passing details to result component???)
// - if unsuccessful, display the error message

// Filter method to extract weather details from returned data to match user's weather details selection

// Render the application
// - header
// - form with user input
// - use the imported Result component
// - footer

// *** Result Component ***
// Create a component to display data from the third-party API
// This component will get filtered weather data  and user and neighbor city name and passed in as props
