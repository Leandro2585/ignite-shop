import { HttpClient } from '@data/protocols'
import { BuyProduct } from '@domain/usecases'

export class BuyProductFeature implements BuyProduct {
  constructor (private readonly httpClient: HttpClient<{ checkout_url: string }>) {}

  async execute({ price_id }: BuyProduct.Input): Promise<BuyProduct.Output> {
    try {
      const { body: { checkout_url } } = await this.httpClient.request({ method: 'post', url: '/api/checkout', body: { price_id } })
      return { checkout_url }
    } catch (err) {
      console.log(err)
    }
  }
}