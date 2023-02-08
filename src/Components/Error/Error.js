import { useEffect, useRef } from 'react';
import { RiThunderstormsFill } from 'react-icons/ri';

const Error = ({ errorMessage, setApiCallInProgress }) => {
  const scollToRef = useRef(null);

  useEffect(() => {
    setApiCallInProgress(false);
  }, [setApiCallInProgress]);

  useEffect(() => {
    scollToRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [scollToRef]);

  return (
    <div className="error" ref={scollToRef}>
      <RiThunderstormsFill className='error-icon' />
      <p>{errorMessage}</p>
    </div>
  )
}

export default Error;