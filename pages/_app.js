import '@/styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

  // return (
  //   <Layout pokemons = {pageProps.pokemons}>
  //     <Component {...pageProps} />
  //   </Layout>
  // )
}
