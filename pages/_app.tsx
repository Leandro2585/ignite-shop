
import { globalStyles } from '@application/styles'
import { Header, Container } from '@application/styles/pages/app'
import { AppProps } from 'next/app'
import Image from 'next/future/image'
import LogoImg from 'public/ignite-shop-logo.svg'

globalStyles() 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="Ignite Shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}