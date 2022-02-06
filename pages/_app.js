import Nav from '../components/main/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <div className='dark bg-gray-200'>
    <Nav/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
