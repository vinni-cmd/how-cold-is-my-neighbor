import CityResult from './CityResult';
import Comparison from './Comparison';

const Results = ({ userWeather, neighborWeather, weatherSelection, setApiCallInProgress }) => {
  setApiCallInProgress(false);
  return (
    <section className="results">
      <h2>Results</h2>
      <div className="results-breakdown">
        <CityResult cityWeather={userWeather} weatherSelection={weatherSelection} />
        <CityResult cityWeather={neighborWeather} weatherSelection={weatherSelection} />
        <Comparison userWeather={userWeather} neighborWeather={neighborWeather} weatherSelection={weatherSelection} />
      </div>
    </section>
  )
}

export default Results;