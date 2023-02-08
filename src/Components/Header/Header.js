import { SiSnowflake } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="heading">
          <SiSnowflake className='logo' />
          <h1>How Cold Is My Neighbor</h1>
        </div>
        <p>Real time weather conditions</p>
      </div>
    </header>
  )
}

export default Header;