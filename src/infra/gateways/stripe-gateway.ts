import { Stripe } from 'stripe'

export class StripeGateway {
  private static instance?: StripeGateway
  client?: Stripe

  private constructor () {}
  
  static getInstance() {
    if(StripeGateway.instance === undefined) {
      this.instance = new StripeGateway()
    }
    return StripeGateway.instance
  }

  connect(): Stripe {
    if(!this.client) {
      this.client = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2022-08-01',
        appInfo: {
          name: 'Ignite Shop'
        }
      })
    }
    return this.client
  }
}