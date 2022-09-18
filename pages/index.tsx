import { Container } from '@application/styles/pages/home';
import { Carroussel } from '@application/components'
import { GetStaticProps } from 'next';
import { stripeAdapter } from '@main/adapters';
import Stripe from 'stripe';
import { parseBRL } from '@application/utils';

type HomeProps = {
  products: Array<{
    id: string
    name: string
    image_url: string
    price: number
  }>
}

export default function Home({ products }: HomeProps) {
  console.log(products)
  return (
    <Container>
      <h2>Destaques</h2>
      <Carroussel products={products}/>
    </Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripeAdapter().products.list({
    expand: ['data.default_price']
  })
  response.data.pop()
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: parseBRL(price.unit_amount/100 ?? 0),
      image_url: product.images[0]
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}