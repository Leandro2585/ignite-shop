export interface BuyProduct {
  execute(input: BuyProduct.Input): Promise<BuyProduct.Output>
}

export namespace BuyProduct {
  export type Input = { price_id: string }

  export type Output = { checkout_url: string }
} 