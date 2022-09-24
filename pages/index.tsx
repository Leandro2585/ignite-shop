import { GetStaticProps } from 'next';
import { stripeAdapter } from '@main/adapters';
import { Carroussel } from '@application/components'
import { Container } from '@application/styles/pages/home';
import { Product } from '@domain/models';

type HomeProps = {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  return (
    <Container>
      <h2>Destaques</h2>
      <Carroussel products={products}/>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await stripeAdapter().loadProducts()
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}