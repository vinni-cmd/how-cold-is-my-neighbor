import CityResult from './CityResult';
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


  return (
    <section className="results">
      <h2>Results</h2>
      <CityResult cityWeather={userWeather} weatherSelection={weatherSelection} />
      <div>
        <h3>Comparison</h3>
      </div>
      <CityResult cityWeather={neighborWeather} weatherSelection={weatherSelection} />
    </section>
  )
}

export default Results