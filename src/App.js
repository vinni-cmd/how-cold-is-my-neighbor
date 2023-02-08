import './App.css';
import { useEffect, useState } from 'react';
import { populateWeatherData } from './modules/apis';
// components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
import Error from './Components/Error/Error';
import Loader from './Components/Loading/Loader';
import PageLoading from './Components/Loading/PageLoading';

function App() {
  const [userWeather, setUserWeather] = useState({});
  const [neighborWeather, setNeighborWeather] = useState({});
  const [weatherSelection, setWeatherSelection] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [apiCallInProgress, setApiCallInProgress] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const handleFormSubmission = ({ userCity, neighborCity, weatherDetails }) => {
    handleFormReset();
    if (Object.values(weatherDetails).every(detail => detail === false)) {
      setErrorMessage('Please select at least one weather detail to compare!');
    } else {
      setApiCallInProgress(true)
      setErrorMessage('');
      setWeatherSelection(weatherDetails);
      populateWeatherData(userCity, setUserWeather, setErrorMessage);
      populateWeatherData(neighborCity, setNeighborWeather, setErrorMessage);
    }
  }

  const handleFormReset = () => {
    setErrorMessage('');
    setNeighborWeather({});
    setUserWeather({});
    setWeatherSelection({});
  }

  const handlePageLoad = () => {
    setIsPageLoading(false);
  }

  useEffect(() => {
    setIsPageLoading(true);
  }, [])


  return (
    <div className="App" onLoad={handlePageLoad}>
      <PageLoading isPageLoading={isPageLoading} />
      <Header />
      <main className='wrapper'>
        <Form
          handleFormSubmission={handleFormSubmission}
          handleFormReset={handleFormReset}
        />
        <Loader apiCallInProgress={apiCallInProgress} />
        {
          errorMessage
            ? <Error
              errorMessage={errorMessage}
              setApiCallInProgress={setApiCallInProgress}
            />
            : null
        }
        {
          (Object.keys(userWeather).length && Object.keys(neighborWeather).length)
            ? <Results
              userWeather={userWeather}
              neighborWeather={neighborWeather}
              weatherSelection={weatherSelection}
              setApiCallInProgress={setApiCallInProgress}
            />
            : null
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
