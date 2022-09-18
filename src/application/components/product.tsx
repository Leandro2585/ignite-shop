import React, { HTMLAttributes, LinkHTMLAttributes } from 'react'
import { Product } from '@application/styles/components/product'
import Image, { ImageProps } from 'next/future/image'
import { buyProductFactory } from '@main/factories/features/buy-product-factory'

interface ProductCardProps extends ImageProps {
  price: string
  name: string
  description?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ price, name, description, className, ...props }) => {
  return (
    <Product className={className}>
      <Image {...props} />
      <footer>
        <strong>{name}</strong>
        <span>{price}</span>
      </footer>
    </Product>
  )
}