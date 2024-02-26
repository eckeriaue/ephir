
const AUTH_TOKEN_SIGNATURE = `authToken`

export async function getToken(): Promise<string> {
  const authPrefix = (token) => 'Bearer ' + token
  if ('cookieStore' in globalThis) {
    const res = await globalThis.cookieStore.get(AUTH_TOKEN_SIGNATURE)
    if (res && res.value) {
      return authPrefix(res.value)
    }
  }
  else {
    return Promise.resolve(authPrefix(localStorage.getItem(AUTH_TOKEN_SIGNATURE)))
  }
}

export async function setToken(payload): Promise<void> {
  if ('cookieStore' in globalThis) {
    await globalThis.cookieStore.set(AUTH_TOKEN_SIGNATURE, payload)
  }
  else {
    await Promise.resolve(localStorage.setItem(AUTH_TOKEN_SIGNATURE, payload))
  }
}

export async function deleteToken(): Promise<void> {
  if ('cookieStore' in globalThis) {
    await globalThis.cookieStore.delete(AUTH_TOKEN_SIGNATURE)
  }
  else {
    await Promise.resolve(localStorage.removeItem(AUTH_TOKEN_SIGNATURE))
  }
}

export async function hasToken(): Promise<boolean> {
  if ('cookieStore' in globalThis) {
    return Boolean(await globalThis.cookieStore.get(AUTH_TOKEN_SIGNATURE))
  }
  return Promise.resolve(Boolean(localStorage.getItem(AUTH_TOKEN_SIGNATURE)))
}


