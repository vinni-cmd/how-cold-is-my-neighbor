import { SiSnowflake } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="heading">
          <SiSnowflake className='logo' />
          <h1>How Cold Is Your Uncle</h1>
        </div>
        <p>Local weather in two places, for all your small-talk needs</p>
      </div>
    </header>
  )
}

export default Header;