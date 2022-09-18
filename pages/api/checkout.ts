import { stripeAdapter } from '@main/adapters'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function checkout(req: NextApiRequest, res: NextApiResponse) {
  const price_id = ''
  const checkout_session = await stripeAdapter().createCheckoutSession(price_id)
  return res.status(201).json({
    checkout_url: checkout_session.url
  })
}