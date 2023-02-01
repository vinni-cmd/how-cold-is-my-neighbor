import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const [userWeather, setUserWeather] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const url = new URL('https://api.openweathermap.org/data/2.5/weather');
      url.search = new URLSearchParams({
        appid: '2f2490bb3753f1067ab2e758ffc26e39',
        units: 'metric',
        q: 'leduc',
      });
      try {
        const data = await fetch(url);
        const response = await data.json();
        console.log(response);

        const {
          name: city,
          sys: { country },
          clouds: { all: cloudCover },
          main: { temp },
          main: { feels_like: feelTemp },
          wind: { speed: windSpeed },
          // sunrise
          // sunset
          // humidity
          // more
        } = response;


        const windDirection = calcWindDirection(response.wind.deg);

        const conditions = response.weather.map(condition => condition.description);

        const curatedWeatherDetails = {
          city,
          country,
          conditions,
          temp,
          feelTemp,
          windSpeed,
          windDirection,
          cloudCover
        }

        setUserWeather(curatedWeatherDetails);

        // helper function found on stackoverflow 
        function calcWindDirection(degree) {
          const value = Math.floor((degree / 22.5) + 0.5);
          const cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
          return cardinals[(value % 16)];
        }

      } catch (error) {

      }
    }
    fetchUserData();
    // console.log(userWeather)
  }, []);

  console.log('userweather', userWeather);

  return (
    <div className="App">
      <Header />
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
