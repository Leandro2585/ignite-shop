import React, { HTMLAttributes, LinkHTMLAttributes } from 'react'
import { Product } from '@application/styles/components/product'
import Image, { ImageProps } from 'next/future/image'

interface ProductCardProps extends ImageProps {
  price: string
  name: string
  description?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ price, name, description, className, ...props }) => (
  <Product className={className}>
    <Image {...props} />
    <footer>
      <strong>{name}</strong>
      <span>{price}</span>
    </footer>
  </Product>
)