import './App.css';
import { useState } from 'react';
import { populateWeatherData } from './modules/apis';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
import Error from './Components/Error/Error';
import Loading from './Components/Loading/Loading';

function App() {
  const [userWeather, setUserWeather] = useState({});
  const [neighborWeather, setNeighborWeather] = useState({});
  const [weatherSelection, setWeatherSelection] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [apiCallInProgress, setApiCallInProgress] = useState(false);

  const handleFormSubmission = ({ userCity, neighborCity, weatherDetails }) => {
    handleFormReset();
    if (Object.values(weatherDetails).every(detail => detail == false)) {
      setErrorMessage('Please select at least one weather detail to compare!')
    } else {
      setApiCallInProgress(true)
      setErrorMessage('');
      setWeatherSelection(weatherDetails);
      populateWeatherData(userCity, setUserWeather, setErrorMessage);
      populateWeatherData(neighborCity, setNeighborWeather, setErrorMessage);
    }
  }

  // handles reset event (from form) in results component but not currently working
  const handleFormReset = () => {
    setErrorMessage('');
    setNeighborWeather({});
    setUserWeather({});
    setWeatherSelection({});
  }

  return (
    <div className="App">
      <Header />
      <Form handleFormSubmission={handleFormSubmission} handleFormReset={handleFormReset} />
      {
        apiCallInProgress ? <Loading /> : null
      }
      {
        errorMessage ? <Error errorMessage={errorMessage} setApiCallInProgress={setApiCallInProgress} /> : null
      }
      {
        (Object.keys(userWeather).length && Object.keys(neighborWeather).length) ? <Results userWeather={userWeather} neighborWeather={neighborWeather} weatherSelection={weatherSelection} setApiCallInProgress={setApiCallInProgress} /> : null
      }
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
