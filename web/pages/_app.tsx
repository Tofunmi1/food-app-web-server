import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Layout } from '../components/Layout'
import { Fonts } from '../components/Fonts'

const App = ({Component, pageProps}:AppProps) => {
 return(
    <Layout>
      <Fonts />
      <Component {...pageProps}/> 
    </Layout>
 )
}

export default App