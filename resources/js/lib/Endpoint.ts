

/**
 * @example
 * 
 * http.get('/api/v1/posts').pipe(
 *  json(),
 * )
 * 
 * v2 
 * 
 * endpoint('/posts').pipe(
 *  get(),
 *  json(),
 *  query('offset', offset.toString()),
 *  query('limit', limit.toString()),
 * )
*/

import { getToken } from "./token"


class Endpoint {
  private payload = new Object
  private jsonFlag: boolean
  private tokenResponse: Promise<string>
  private url: URL

  constructor(baseUrl: string = location.origin) {
    this.url = new URL(baseUrl)
  }

  private setMethod(method) {
    Reflect.set(this.payload, 'method', method)
  }

  public get(urlPart: string = ''): this {
    this.url.href += urlPart
    this.setMethod('get')
    return this
  }
  public post(urlPart: string = ''): this {
    this.url.href += urlPart
    this.setMethod('post')
    return this
  }

  public json(payload?: unknown): this {
    this.jsonFlag = true
    if (!Reflect.has(this.payload, 'headers')) {
      Reflect.set(this.payload, 'headers', new Object)
    }
    // @ts-ignore
    Reflect.set(this.payload.headers, 'Content-Type', 'application/json')
    if (payload) Reflect.set(this.payload, 'body', JSON.stringify(payload))
    return this
  }

  public auth(): this {
    this.tokenResponse = getToken()
    return this
  }

  public query(field: string, value: string): this {
    this.url.searchParams.set(field, value)
    return this
  }

  public queries<T extends Record<string, string>>(qs: T): this {
    Object.entries(qs).forEach(([key, value]) => {
      this.query(key, value)
    })
    return this
  }


  public async dispatch<T>(): Promise<T> {
    if (this.tokenResponse instanceof Promise) {
      if (!('headers' in this.payload)) {
        Reflect.set(this.payload, 'headers', new Object)
      }
      // @ts-ignore
      Reflect.set(this.payload.headers, 'Authorization', await this.tokenResponse)
    }

    try {
      let response = fetch(this.url, this.payload)
      if (this.jsonFlag) {
        response = response.then(res => res.json())
      }
      return response as Promise<T>
    }

    catch(e) {
      console.error(`[Endpoint]: error on request: ${this.url}`, e.message)
    }
  }
}

export function endpoint(url: string = '') {
  return new Endpoint(`${location.origin}/api/v1` + url)

}
