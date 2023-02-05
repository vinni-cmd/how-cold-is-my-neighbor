import CityResult from './CityResult';
import Comparison from './Comparison';
import './Results.css'

const Results = ({ userWeather, neighborWeather, weatherSelection, setApiCallInProgress }) => {

  // function buildTruthyArray(object) {
  //   const array = [];
  //   for (let prop in object) {
  //     if (object[prop]) {
  //       array.push(prop);
  //     }
  //   }
  //   return array
  // }

  // const selectedWeather = buildTruthyArray(weatherSelection);
  // console.log(selectedWeather)
  setApiCallInProgress(false);
  return (
    <section className="results">
      <h2>Results</h2>
      <div class="results-breakdown">
        <CityResult cityWeather={userWeather} weatherSelection={weatherSelection} />
        <CityResult cityWeather={neighborWeather} weatherSelection={weatherSelection} />
        <Comparison userWeather={userWeather} neighborWeather={neighborWeather} weatherSelection={weatherSelection} />
      </div>
    </section>
  )
}

export default Results