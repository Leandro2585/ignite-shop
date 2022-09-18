import { StripeGateway } from '@infra/gateways';

export const stripeGatewayFactory = (): StripeGateway => {
  return StripeGateway.getInstance()
}