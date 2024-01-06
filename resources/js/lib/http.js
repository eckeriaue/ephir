
export const AUTH_TOKEN_SIGNATURE = 'authToken'

export class Http {
  
  constructor(connectURI = '') {
    this.connectURI = connectURI
  }

  async auth(bodyPayload) {
    const res = await fetch(`${this.connectURI}/api/v1/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(bodyPayload)
    }).then(res => res.json())
    await cookieStore.set(AUTH_TOKEN_SIGNATURE, res.token)
  }

  async get(url) {
    const {value} = (await cookieStore.get(AUTH_TOKEN_SIGNATURE)) || {}
    if (!value) return Promise.resolve({})
    return fetch(`${this.connectURI}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + value,
      }
    }).then(res => res.json())
  }
}