import { CheckoutGateway } from '@data/protocols'
import { parseBRL } from '@application/utils'
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
        image_url: product.images[0],
        default_price_id: price.id
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
      image_url: product.images[0],
      default_price_id: price.id
    }
  }

  async createCheckoutSession(price_id: string): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    const checkout_session = await this.client.checkout.sessions.create({
      success_url: `${process.env.NEXT_URL}/success`,
      cancel_url: `${process.env.NEXT_URL}/`,
      mode: 'payment',
      line_items: [
        { 
          price: price_id, 
          quantity: 1 
        }
      ]
    })
    return checkout_session
  }
}