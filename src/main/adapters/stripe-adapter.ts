import { stripeGatewayFactory } from '@main/factories/gateways'

export const stripeAdapter = () => {
  return stripeGatewayFactory().connect()
}