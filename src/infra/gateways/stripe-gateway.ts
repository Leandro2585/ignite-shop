import { parseBRL } from '@application/utils'
import { CheckoutGateway } from '@data/protocols'
import { Product } from '@domain/models'
import { Stripe } from 'stripe'

export class StripeGateway implements CheckoutGateway {
  private static instance?: StripeGateway
  client?: Stripe

  private constructor () {
    this.client = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-08-01',
      appInfo: {
        name: 'Ignite Shop'
      }
    })
  }
  
  static getInstance() {
    if(StripeGateway.instance === undefined) {
      this.instance = new StripeGateway()
    }
    return StripeGateway.instance
  }

  async loadProducts(): Promise<Product[]> {
    const response = await this.client.products.list({
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
    return products
  }

  async loadProductById(product_id: string): Promise<Product> {
    const product = await this.client.products.retrieve(product_id, {
      expand: ['default_price']
    })
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: parseBRL(price.unit_amount/100 ?? 0),
      image_url: product.images[0]
    }
  }

  async createCheckoutSession() {
    // this.client.checkout.sessions.create({

    // })
  }
}