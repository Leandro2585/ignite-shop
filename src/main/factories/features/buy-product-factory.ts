import { BuyProductFeature } from '@data/features';
import { axiosClientFactory } from '@main/factories/http';

export const buyProductFactory = (): BuyProductFeature => {
  return new BuyProductFeature(axiosClientFactory())
}