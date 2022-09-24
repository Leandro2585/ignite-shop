import { HttpMethods } from '@main/@types/methods';

export class MethodNotAllowedError extends Error {
  constructor (method?: HttpMethods) {
    super(`Method ${method} not allowed`)
    this.name = 'MethodNotAllowedError'
  }
}

export class NotFoundError extends Error {
  constructor (field: string) {
    super(`${field} not fount`)
    this.name = 'NotFoundError'
  }
}