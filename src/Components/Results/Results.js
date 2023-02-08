import { useEffect } from 'react';
import CityResult from './CityResult';
import Comparison from './Comparison';

const Results = ({ userWeather, uncleWeather, weatherSelection, setApiCallInProgress }) => {
  useEffect(() => {
    setApiCallInProgress(false);
  }, [setApiCallInProgress]);
  return (
    <section className="results">
      <h2>Results</h2>
      <div className="results-breakdown">
        <CityResult cityWeather={userWeather} weatherSelection={weatherSelection} />
        <CityResult cityWeather={uncleWeather} weatherSelection={weatherSelection} />
        <Comparison userWeather={userWeather} uncleWeather={uncleWeather} weatherSelection={weatherSelection} />
      </div>
    </section>
  )
}

export default Results;