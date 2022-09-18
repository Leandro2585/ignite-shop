import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { CarrousselContainer } from '@application/styles/components/carroussel'
import { ProductCard } from '@application/components'

type CarrousselProps = {
  products: Array<{
    id: string
    name: string
    image_url: string
    price: number
  }>
}

export const Carroussel: React.FC<CarrousselProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      origin: 'auto',
      number: 4.1
    }
  })
  return (
    <CarrousselContainer ref={sliderRef} className='keen-slider'>
      {products?.map(product => (
        <ProductCard
          key={product.id} 
          alt={product.name} 
          name={product.name}
          price={product.price} 
          src={product.image_url} 
          width={400} 
          height={400} 
          className='keen-slider__slide'
        />
      ))}
    </CarrousselContainer>
  )
}
