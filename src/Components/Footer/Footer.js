import { SiSnowflake } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <SiSnowflake className='logo' />
      <p>
        Created by <a href="https://vincentyoung.dev/" target="_blank" rel="noreferrer">Vincent Young</a> at <a href="https://junocollege.com/" target="_blank" rel="noreferrer">Juno College</a>
      </p>
    </footer>
  )
}

export default Footer