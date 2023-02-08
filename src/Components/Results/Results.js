import { useEffect, useRef } from 'react';
import CityResult from './CityResult';
import Comparison from './Comparison';

const Results = ({ userWeather, uncleWeather, weatherSelection, setApiCallInProgress }) => {
  const scollToRef = useRef(null);

  useEffect(() => {
    setApiCallInProgress(false);
  }, [setApiCallInProgress]);

  useEffect(() => {
    scollToRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [scollToRef]);

  return (
    <section className="results" ref={scollToRef}>
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