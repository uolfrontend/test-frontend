import type { AppProps } from 'next/app';
import { Header } from '../components/BannerUOL';
import { HeaderText } from '../components/HeaderText';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <HeaderText />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
