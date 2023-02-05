import { RiThunderstormsFill } from 'react-icons/ri'

const Error = ({ errorMessage }) => {
  return (
    <div className="error">
      <RiThunderstormsFill />
      <p>{errorMessage}</p>
    </div>
  )
}

export default Error