import CityResult from './CityResult';
import Comparison from './Comparison';
import './Results.css'

const Results = ({ userWeather, neighborWeather, weatherSelection }) => {

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

  // maybe ths should be in a useffect but it only runs on after results are returned?
  function calculateComparison(userWeather, neighborWeather, weatherSelection) {
    const comparison = {};
    // check which values need to be compared based on user weather details selection

    // for those details create a key and calculate the associated value by subtracting/comparing relevent property values from the two cities
    return comparison
  }

  return (
    <section className="results">
      <h2>Results</h2>
      <div class="results-breakdown">
        <CityResult cityWeather={userWeather} weatherSelection={weatherSelection} />
        <Comparison userWeather={userWeather} neighborWeather={neighborWeather} weatherSelection={weatherSelection} />
        <CityResult cityWeather={neighborWeather} weatherSelection={weatherSelection} />
      </div>
    </section>
  )
}

export default Results