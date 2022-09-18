import { AxiosHttpClient } from '@infra/http';

export const axiosClientFactory = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}