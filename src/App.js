import './App.css';
import { useEffect, useState } from 'react';
import { populateWeatherData } from './modules/apis';
// components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
import Error from './Components/Error/Error';
import FormLoading from './Components/Loading/FormLoading';
import PageLoading from './Components/Loading/PageLoading';

function App() {
  const [userWeather, setUserWeather] = useState({});
  const [uncleWeather, setUncleWeather] = useState({});
  const [weatherSelection, setWeatherSelection] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [apiCallInProgress, setApiCallInProgress] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const handleFormSubmission = ({ userCity, uncleCity, weatherDetails }) => {
    handleFormReset();
    if (Object.values(weatherDetails).every(detail => detail === false)) {
      setErrorMessage('Please select at least one weather detail to compare!');
    } else {
      setApiCallInProgress(true)
      setErrorMessage('');
      setWeatherSelection(weatherDetails);
      populateWeatherData(userCity, setUserWeather, setErrorMessage);
      populateWeatherData(uncleCity, setUncleWeather, setErrorMessage);
    }
  }

  const handleFormReset = () => {
    setErrorMessage('');
    setUncleWeather({});
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
        <FormLoading apiCallInProgress={apiCallInProgress} />
        {
          errorMessage
            ? <Error
              errorMessage={errorMessage}
              setApiCallInProgress={setApiCallInProgress}
            />
            : null
        }
        {
          (Object.keys(userWeather).length && Object.keys(uncleWeather).length)
            ? <Results
              userWeather={userWeather}
              uncleWeather={uncleWeather}
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
