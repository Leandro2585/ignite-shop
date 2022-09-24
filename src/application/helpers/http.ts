import { MethodNotAllowedError, NotFoundError } from '@application/errors'
import { NextApiResponse } from 'next'

export type HttpResponse<T = any> = {
  status_code: number
  data: T
}

export const created = <T = any>(data): HttpResponse<T> => ({
  status_code: 201,
  data
})

export const notFound = ({ field }: { field: string }): HttpResponse<Error> => ({
  status_code: 400,
  data: new NotFoundError(field)
})

export const methodNotAllowed = (): HttpResponse<Error> => ({
  status_code: 405,
  data: new MethodNotAllowedError()
})

export const response = (payload: HttpResponse, res: NextApiResponse): void => {
  return res.status(payload.status_code).json(payload.data)
}