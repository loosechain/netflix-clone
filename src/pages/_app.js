import '@/styles/globals.css'
import { Roboto_Slab } from 'next/font/google'
const roboto = Roboto_Slab({subsets:["cyrillic"]})

export default function App({ Component, pageProps }) {
  return  <div className={roboto.className}>
  <Component {...pageProps} />
  </div>
}
