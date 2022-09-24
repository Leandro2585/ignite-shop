import { Container, ImageContainer, ProductDetailsSection } from '@application/styles/pages/product-details'
import { Product } from '@domain/models'
import { stripeAdapter } from '@main/adapters'
import { buyProductFactory } from '@main/factories/features/buy-product-factory'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

type ProductDetailsProps = {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { isFallback } = useRouter()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  if(isFallback) {
    return (<span>Carregando...</span>)
  }

  const handleBuyProduct = (price_id: string) => {
    setIsCreatingCheckoutSession(true)
    buyProductFactory().execute({ price_id })
      .then(async (response) => {
        window.location.href = response.checkout_url
      })
      .finally(() => setIsCreatingCheckoutSession(false))
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={product.image_url} alt={product.name} width={450} height={500} />
      </ImageContainer>
      <ProductDetailsSection>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button disabled={isCreatingCheckoutSession} onClick={() => handleBuyProduct(product.default_price_id)}>Comprar agora</button>
      </ProductDetailsSection>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MSMhaIp6yg1x07' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const product_id = params.id
  const product = await stripeAdapter().loadProductById(product_id)
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}