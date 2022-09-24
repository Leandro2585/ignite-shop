import { Container, ImageContainer } from '@application/styles/pages/success';
import { stripeAdapter } from '@main/adapters';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type SuccessProps = {
  customer: string
  product_name: string
  product_image: string
}

export default function Success({ customer, product_image, product_name }: SuccessProps) {
  return (
    <Container>
      <h1>Compra efetuada!</h1>
      <ImageContainer>
        <img src={product_image} alt={product_name} />
      </ImageContainer>
      <p>
        Uhuu <strong>{customer}</strong>, sua <strong>{product_name}</strong> já está a caminho da sua casa
      </p>
      <Link href='/'>Voltar ao catálogo</Link>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.success_id) return { redirect: { destination: '/', permanent: false } }
  const success_id = String(query.success_id)
  const response = await stripeAdapter().loadCheckoutSession(success_id)
  return { props: {
    ...response
  } }
}