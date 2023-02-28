import '../styles/globals.css'
import Header from '../components/header/header'
import { store } from '../features/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
