import{r as l}from"./app-wOSmkzKC.js";const o="authToken";async function h(){const t=e=>"Bearer "+e;if("cookieStore"in globalThis){const e=await globalThis.cookieStore.get(o);if(e&&e.value)return t(e.value)}else return Promise.resolve(t(localStorage.getItem(o)))}async function n(t){"cookieStore"in globalThis?await globalThis.cookieStore.set(o,t):await Promise.resolve(localStorage.setItem(o,t))}async function c(){"cookieStore"in globalThis?await globalThis.cookieStore.delete(o):await Promise.resolve(localStorage.removeItem(o))}async function u(){return"cookieStore"in globalThis?!!await globalThis.cookieStore.get(o):Promise.resolve(!!localStorage.getItem(o))}class f{constructor(e=location.origin){this.payload=new Object,this.url=new URL(e)}setMethod(e){Reflect.set(this.payload,"method",e)}get(e=""){return this.url.href+=e,this.setMethod("get"),this}post(e=""){return this.url.href+=e,this.setMethod("post"),this}json(e){return this.jsonFlag=!0,Reflect.has(this.payload,"headers")||Reflect.set(this.payload,"headers",new Object),Reflect.set(this.payload.headers,"Content-Type","application/json"),e&&Reflect.set(this.payload,"body",JSON.stringify(e)),this}auth(){return this.tokenResponse=h(),this}query(e,s){return this.url.searchParams.set(e,s),this}queries(e){return Object.entries(e).forEach(([s,r])=>{this.query(s,r)}),this}async dispatch(){this.tokenResponse instanceof Promise&&("headers"in this.payload||Reflect.set(this.payload,"headers",new Object),Reflect.set(this.payload.headers,"Authorization",await this.tokenResponse));try{let e=fetch(this.url,this.payload);return this.jsonFlag&&(e=e.then(s=>s.json())),e}catch(e){console.error(`[Endpoint]: error on request: ${this.url}`,e.message)}}}function a(t=""){return new f(`${location.origin}/api/v1`+t)}const i=l(!1);u().then(t=>{i.value=t});async function d(t){const e=await a("/login").post().json(t).dispatch();return await n(e.token),{end:()=>i.value=!0}}async function p(t){const e=await a("/register").post().json(t).dispatch();return await n(e.token),i.value=!0,{end:()=>null}}async function y(){return await a("/logout").post().json().auth().dispatch(),await c(),{end:()=>i.value=!1}}export{y as a,a as e,i,d as l,p as r};
