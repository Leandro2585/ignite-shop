
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import LogoImg from 'public/ignite-shop-logo.svg'
import Image from 'next/future/image'

import { Header, Container } from '@application/styles/pages/app'
import { globalStyles } from '@application/styles'

globalStyles() 

export default function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter()
  return (
    <Container>
      <Header onClick={() => push('/')}>
        <Image src={LogoImg} alt="Ignite Shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}