import { Product } from '@domain/models'
import Stripe from 'stripe'

export interface CheckoutGateway {
  loadProducts(): Promise<Product[]>
  loadProductById(product_id: string): Promise<Product>
  createCheckoutSession(price_id: string): Promise<Stripe.Response<Stripe.Checkout.Session>>
  loadCheckoutSession(session_id: string): Promise<BuyDetails>
}

export type BuyDetails = {
  customer: string
  product_name: string
  product_image: string
}