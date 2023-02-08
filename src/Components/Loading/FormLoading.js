import { SiSnowflake } from 'react-icons/si';

const FormLoading = ({ apiCallInProgress }) => {
  return (
    <div className="loading-container">
      <SiSnowflake className={apiCallInProgress ? 'loader loading' : 'loader'} />
    </div >
  )
}

export default FormLoading;