import { Product } from '@domain/models'

export interface CheckoutGateway {
  loadProducts(): Promise<Product[]>
  loadProductById(product_id: string): Promise<Product>
  createCheckoutSession(price_id: string): Promise<any>
}