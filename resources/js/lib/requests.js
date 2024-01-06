import { Subject } from "rxjs"


export const AUTH_TOKEN_SIGNATURE = 'authToken'

export const logout$ = new Subject()
export const login$ = new Subject()


export async function createRequest(url, options = {}) {
  const {value} = (await cookieStore.get(AUTH_TOKEN_SIGNATURE)) || {}
  const {method = 'GET', body} = options

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (value) Reflect.set(requestOptions.headers, 'Authorization', 'Bearer ' + value)
  if (body) Reflect.set(requestOptions, 'body', JSON.stringify(body))

  return new Request(url, requestOptions)
}
export function createGuestRequest(url, options = {}) {

  const {method = 'GET', body} = options

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
  }
  if (body) Reflect.set(requestOptions, 'body', JSON.stringify(body))

  return Promise.resolve(new Request(url, requestOptions))
}
