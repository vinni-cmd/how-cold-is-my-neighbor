import { SiSnowflake } from 'react-icons/si';

const Loader = ({ apiCallInProgress }) => {
  return (
    <div className="loading-container">
      <SiSnowflake className={apiCallInProgress ? 'loader loading' : 'loader'} />
    </div >
  )
}

export default Loader;