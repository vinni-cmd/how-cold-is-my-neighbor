import { SiSnowflake } from 'react-icons/si';

const PageLoading = ({ isPageLoading }) => {
  return (
    <div className={!isPageLoading ? 'page-loading' : 'page-loading hide'}>
      <SiSnowflake />
    </div>
  )
}

export default PageLoading;