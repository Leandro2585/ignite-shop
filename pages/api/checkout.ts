import { created, methodNotAllowed, notFound, response } from '@application/helpers/http'
import { stripeAdapter } from '@main/adapters'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function checkout(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'POST') return response(methodNotAllowed(), res)
  const { price_id } = req.body
  if(!price_id) return response(notFound({ field: 'price_id' }), res)
  const checkout_session = await stripeAdapter().createCheckoutSession(price_id)
  return response(created({ checkout_url: checkout_session.url }), res)
}