import { SiSnowflake } from 'react-icons/si';

const Loader = ({ apiCallInProgress }) => {
  return (
    <div class="loading-container">
      <SiSnowflake className={apiCallInProgress ? 'loader loading' : 'loader'} />
    </div >
  )
}

export default Loader;