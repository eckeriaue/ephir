import { Subject, switchMap } from "rxjs"
import { ref } from 'vue'

export const AUTH_TOKEN_SIGNATURE = 'authToken'

export const logout$ = new Subject()
export const login$ = new Subject()

function getToken() {
  // return globalThis?.cookieStore.get(AUTH_TOKEN_SIGNATURE)
  return localStorage.getItem(AUTH_TOKEN_SIGNATURE)
}
function setToken(payload) {
  // return globalThis?.cookieStore.set(AUTH_TOKEN_SIGNATURE, payload)
  return localStorage.setItem(AUTH_TOKEN_SIGNATURE, payload)
}
function deleteToken() {
  // return globalThis?.cookieStore.delete(AUTH_TOKEN_SIGNATURE)
  return localStorage.setItem(AUTH_TOKEN_SIGNATURE, '')
}


login$.pipe(
  switchMap(res => setToken(res))
).subscribe(checkIsLogin)
logout$.pipe(
  switchMap(() => deleteToken())
).subscribe(checkIsLogin)


export const isLogin = ref(false)
export async function checkIsLogin() {
  const res = await getToken()
  return isLogin.value = Boolean(res)
}
checkIsLogin()

export async function createRequest(url, options = {}) {
  const { value } = await getToken()
  const { method = 'GET', body } = options

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

  const { method = 'GET', body } = options

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
  }
  if (body) Reflect.set(requestOptions, 'body', JSON.stringify(body))

  return Promise.resolve(new Request(url, requestOptions))
}
