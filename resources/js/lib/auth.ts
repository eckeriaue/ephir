import { ref } from 'vue'
import { endpoint } from './Endpoint'
import { setToken, hasToken, deleteToken } from './token'

export const isLogin = ref(false)

hasToken().then(has => {
  isLogin.value = has
})

export async function login(payload: Record<'email' | 'password', string>) {
  const result = await endpoint('/login')
  .post()
  .json(payload)
  .dispatch<{token: string}>()

  await setToken(result.token)

  return {
    end: () => isLogin.value = true
  }
}

export async function register(payload: Record<'email' | 'password' | 'name', string>) {

  const result = await endpoint('/register')
  .post()
  .json(payload)
  .dispatch<{token: string}>()

  await setToken(result.token)
  isLogin.value = true

  return {
    end: () => null
  }
}

export async function logout() {
  await endpoint('/logout')
  .post()
  .json()
  .auth()
  .dispatch()

  await deleteToken()

  return {
    end: () => isLogin.value = false
  }
}