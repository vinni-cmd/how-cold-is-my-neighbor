import { useEffect } from 'react';
import { RiThunderstormsFill } from 'react-icons/ri';

const Error = ({ errorMessage, setApiCallInProgress }) => {
  useEffect(() => {
    setApiCallInProgress(false);
  }, []);

  return (
    <div className="error">
      <RiThunderstormsFill className='error-icon' />
      <p>{errorMessage}</p>
    </div>
  )
}

export default Error;