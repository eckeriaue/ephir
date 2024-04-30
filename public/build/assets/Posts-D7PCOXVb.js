import{_ as Wt}from"./Layout.vue_vue_type_script_setup_true_lang-BeaF5I00.js";import{d as lt,j as mt,k as A,T as Zt,r as $,o as _,c as C,b as m,t as T,l as q,w as v,a as x,m as yt,p as Ot,f as E,F as M,q as et,u as y,g as wt,n as Xt,Q as Yt,h as bt,Z as te,i as ee}from"./app-ABtojf_H.js";import{l as ne,u as oe,r as se,p as re,c as ie,i as ce,d as ae,s as le}from"./index-CEbsn2Vw.js";import{c as ue}from"./utils-C-5SdYIA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N=/^[a-z0-9]+(-[a-z0-9]+)*$/,J=(t,e,n,s="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;s=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:s,prefix:a,name:c};return e&&!Q(l)?null:l}const r=o[0],i=r.split("-");if(i.length>1){const c={provider:s,prefix:i.shift(),name:i.join("-")};return e&&!Q(c)?null:c}if(n&&s===""){const c={provider:s,prefix:"",name:r};return e&&!Q(c,n)?null:c}return null},Q=(t,e)=>t?!!((t.provider===""||t.provider.match(N))&&(e&&t.prefix===""||t.prefix.match(N))&&t.name.match(N)):!1,At=Object.freeze({left:0,top:0,width:16,height:16}),K=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),W=Object.freeze({...At,...K}),nt=Object.freeze({...W,body:"",hidden:!1});function fe(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function xt(t,e){const n=fe(t,e);for(const s in nt)s in K?s in t&&!(s in n)&&(n[s]=K[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function de(t,e){const n=t.icons,s=t.aliases||Object.create(null),o=Object.create(null);function r(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=s[i]&&s[i].parent,a=c&&r(c);a&&(o[i]=[c].concat(a))}return o[i]}return Object.keys(n).concat(Object.keys(s)).forEach(r),o}function pe(t,e,n){const s=t.icons,o=t.aliases||Object.create(null);let r={};function i(c){r=xt(s[c]||o[c],r)}return i(e),n.forEach(i),xt(t,r)}function $t(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const s=de(t);for(const o in s){const r=s[o];r&&(e(o,pe(t,o,r)),n.push(o))}return n}const he={provider:"",aliases:{},not_found:{},...At};function Y(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Dt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Y(t,he))return null;const n=e.icons;for(const o in n){const r=n[o];if(!o.match(N)||typeof r.body!="string"||!Y(r,nt))return null}const s=e.aliases||Object.create(null);for(const o in s){const r=s[o],i=r.parent;if(!o.match(N)||typeof i!="string"||!n[i]&&!s[i]||!Y(r,nt))return null}return e}const vt=Object.create(null);function ge(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function F(t,e){const n=vt[t]||(vt[t]=Object.create(null));return n[e]||(n[e]=ge(t,e))}function ut(t,e){return Dt(e)?$t(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function me(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let R=!1;function Nt(t){return typeof t=="boolean"&&(R=t),R}function ye(t){const e=typeof t=="string"?J(t,!0,R):t;if(e){const n=F(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function we(t,e){const n=J(t,!0,R);if(!n)return!1;const s=F(n.provider,n.prefix);return me(s,n.name,e)}function be(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),R&&!e&&!t.prefix){let o=!1;return Dt(t)&&(t.prefix="",$t(t,(r,i)=>{i&&we(r,i)&&(o=!0)})),o}const n=t.prefix;if(!Q({provider:e,prefix:n,name:"a"}))return!1;const s=F(e,n);return!!ut(s,t)}const Rt=Object.freeze({width:null,height:null}),Bt=Object.freeze({...Rt,...K}),xe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ve=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function _t(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(xe);if(s===null||!s.length)return t;const o=[];let r=s.shift(),i=ve.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*e*n)/n)}else o.push(r);if(r=s.shift(),r===void 0)return o.join("");i=!i}}function _e(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const o=t.indexOf(">",s),r=t.indexOf("</"+e);if(o===-1||r===-1)break;const i=t.indexOf(">",r);if(i===-1)break;n+=t.slice(o+1,r).trim(),t=t.slice(0,s).trim()+t.slice(i+1)}return{defs:n,content:t}}function Ie(t,e){return t?"<defs>"+t+"</defs>"+e:e}function Se(t,e,n){const s=_e(t);return Ie(s.defs,e+s.content+n)}const ke=t=>t==="unset"||t==="undefined"||t==="none";function Ce(t,e){const n={...W,...t},s={...Bt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,s].forEach(g=>{const d=[],P=g.hFlip,j=g.vFlip;let w=g.rotate;P?j?w+=2:(d.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),d.push("scale(-1 1)"),o.top=o.left=0):j&&(d.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),d.push("scale(1 -1)"),o.top=o.left=0);let S;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:S=o.height/2+o.top,d.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:d.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:S=o.width/2+o.left,d.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}w%2===1&&(o.left!==o.top&&(S=o.left,o.left=o.top,o.top=S),o.width!==o.height&&(S=o.width,o.width=o.height,o.height=S)),d.length&&(r=Se(r,'<g transform="'+d.join(" ")+'">',"</g>"))});const i=s.width,c=s.height,a=o.width,l=o.height;let f,u;i===null?(u=c===null?"1em":c==="auto"?l:c,f=_t(u,a/l)):(f=i==="auto"?a:i,u=c===null?_t(f,l/a):c==="auto"?l:c);const p={},b=(g,d)=>{ke(d)||(p[g]=d.toString())};b("width",f),b("height",u);const I=[o.left,o.top,a,l];return p.viewBox=I.join(" "),{attributes:p,viewBox:I,body:r}}const je=/\sid="(\S+)"/g,Te="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Pe=0;function Ee(t,e=Te){const n=[];let s;for(;s=je.exec(t);)n.push(s[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const i=typeof e=="function"?e(r):e+(Pe++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const ot=Object.create(null);function Le(t,e){ot[t]=e}function st(t){return ot[t]||ot[""]}function ft(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const dt=Object.create(null),D=["https://api.simplesvg.com","https://api.unisvg.com"],H=[];for(;D.length>0;)D.length===1||Math.random()>.5?H.push(D.shift()):H.push(D.pop());dt[""]=ft({resources:["https://api.iconify.design"].concat(H)});function Fe(t,e){const n=ft(e);return n===null?!1:(dt[t]=n,!0)}function pt(t){return dt[t]}const Me=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let It=Me();function Oe(t,e){const n=pt(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const r=e+".json?icons=";s=n.maxURL-o-n.path.length-r.length}return s}function Ae(t){return t===404}const $e=(t,e,n)=>{const s=[],o=Oe(t,e),r="icons";let i={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=o&&l>0&&(s.push(i),i={type:r,provider:t,prefix:e,icons:[]},c=a.length),i.icons.push(a)}),s.push(i),s};function De(t){if(typeof t=="string"){const e=pt(t);if(e)return e.path}return"/"}const Ne=(t,e,n)=>{if(!It){n("abort",424);return}let s=De(e.provider);switch(e.type){case"icons":{const r=e.prefix,c=e.icons.join(","),a=new URLSearchParams({icons:c});s+=r+".json?"+a.toString();break}case"custom":{const r=e.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;It(t+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{n(Ae(i)?"abort":"next",i)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},Re={prepare:$e,send:Ne};function Be(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return t.forEach(o=>{if(s.name===o.name&&s.prefix===o.prefix&&s.provider===o.provider)return;s=o;const r=o.provider,i=o.prefix,c=o.name,a=n[r]||(n[r]=Object.create(null)),l=a[i]||(a[i]=F(r,i));let f;c in l.icons?f=e.loaded:i===""||l.missing.has(c)?f=e.missing:f=e.pending;const u={provider:r,prefix:i,name:c};f.push(u)}),e}function Vt(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(o=>o.id!==e))})}function Ve(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,o=t.prefix;e.forEach(r=>{const i=r.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const l=a.name;if(t.icons[l])i.loaded.push({provider:s,prefix:o,name:l});else if(t.missing.has(l))i.missing.push({provider:s,prefix:o,name:l});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Vt([t],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let ze=0;function Ue(t,e,n){const s=ze++,o=Vt.bind(null,n,s);if(!e.pending.length)return o;const r={id:s,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),o}function qe(t,e=!0,n=!1){const s=[];return t.forEach(o=>{const r=typeof o=="string"?J(o,e,n):o;r&&s.push(r)}),s}var Qe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function He(t,e,n,s){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let h=t.resources.slice(0);for(i=[];h.length>1;){const k=Math.floor(Math.random()*h.length);i.push(h[k]),h=h.slice(0,k).concat(h.slice(k+1))}i=i.concat(h)}else i=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let a="pending",l=0,f,u=null,p=[],b=[];typeof s=="function"&&b.push(s);function I(){u&&(clearTimeout(u),u=null)}function g(){a==="pending"&&(a="aborted"),I(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function d(h,k){k&&(b=[]),typeof h=="function"&&b.push(h)}function P(){return{startTime:c,payload:e,status:a,queriesSent:l,queriesPending:p.length,subscribe:d,abort:g}}function j(){a="failed",b.forEach(h=>{h(void 0,f)})}function w(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function S(h,k,O){const V=k!=="success";switch(p=p.filter(L=>L!==h),a){case"pending":break;case"failed":if(V||!t.dataAfterTimeout)return;break;default:return}if(k==="abort"){f=O,j();return}if(V){f=O,p.length||(i.length?X():j());return}if(I(),w(),!t.random){const L=t.resources.indexOf(h.resource);L!==-1&&L!==t.index&&(t.index=L)}a="completed",b.forEach(L=>{L(O)})}function X(){if(a!=="pending")return;I();const h=i.shift();if(h===void 0){if(p.length){u=setTimeout(()=>{I(),a==="pending"&&(w(),j())},t.timeout);return}j();return}const k={status:"pending",resource:h,callback:(O,V)=>{S(k,O,V)}};p.push(k),l++,u=setTimeout(X,t.rotate),n(h,e,k.callback)}return setTimeout(X),P}function zt(t){const e={...Qe,...t};let n=[];function s(){n=n.filter(c=>c().status==="pending")}function o(c,a,l){const f=He(e,c,a,(u,p)=>{s(),l&&l(u,p)});return n.push(f),f}function r(c){return n.find(a=>c(a))||null}return{query:o,find:r,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:s}}function St(){}const tt=Object.create(null);function Ge(t){if(!tt[t]){const e=pt(t);if(!e)return;const n=zt(e),s={config:e,redundancy:n};tt[t]=s}return tt[t]}function Ke(t,e,n){let s,o;if(typeof t=="string"){const r=st(t);if(!r)return n(void 0,424),St;o=r.send;const i=Ge(t);i&&(s=i.redundancy)}else{const r=ft(t);if(r){s=zt(r);const i=t.resources?t.resources[0]:"",c=st(i);c&&(o=c.send)}}return!s||!o?(n(void 0,424),St):s.query(e,o,n)().abort}const kt="iconify2",B="iconify",Ut=B+"-count",Ct=B+"-version",qt=36e5,Je=168,We=50;function rt(t,e){try{return t.getItem(e)}catch{}}function ht(t,e,n){try{return t.setItem(e,n),!0}catch{}}function jt(t,e){try{t.removeItem(e)}catch{}}function it(t,e){return ht(t,Ut,e.toString())}function ct(t){return parseInt(rt(t,Ut))||0}const Z={local:!0,session:!0},Qt={local:new Set,session:new Set};let gt=!1;function Ze(t){gt=t}let z=typeof window>"u"?{}:window;function Ht(t){const e=t+"Storage";try{if(z&&z[e]&&typeof z[e].length=="number")return z[e]}catch{}Z[t]=!1}function Gt(t,e){const n=Ht(t);if(!n)return;const s=rt(n,Ct);if(s!==kt){if(s){const c=ct(n);for(let a=0;a<c;a++)jt(n,B+a.toString())}ht(n,Ct,kt),it(n,0);return}const o=Math.floor(Date.now()/qt)-Je,r=c=>{const a=B+c.toString(),l=rt(n,a);if(typeof l=="string"){try{const f=JSON.parse(l);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&e(f,c))return!0}catch{}jt(n,a)}};let i=ct(n);for(let c=i-1;c>=0;c--)r(c)||(c===i-1?(i--,it(n,i)):Qt[t].add(c))}function Kt(){if(!gt){Ze(!0);for(const t in Z)Gt(t,e=>{const n=e.data,s=e.provider,o=n.prefix,r=F(s,o);if(!ut(r,n).length)return!1;const i=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,i):i,!0})}}function Xe(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in Z)Gt(s,o=>{const r=o.data;return o.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e});return!0}function Ye(t,e){gt||Kt();function n(s){let o;if(!Z[s]||!(o=Ht(s)))return;const r=Qt[s];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=ct(o),i>=We||!it(o,i+1))return;const c={cached:Math.floor(Date.now()/qt),provider:t.provider,data:e};return ht(o,B+i.toString(),JSON.stringify(c))}e.lastModified&&!Xe(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Tt(){}function tn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Ve(t)}))}function en(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,o=t.iconsToLoad;delete t.iconsToLoad;let r;if(!o||!(r=st(n)))return;r.prepare(n,s,o).forEach(c=>{Ke(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{t.missing.add(l)});else try{const l=ut(t,a);if(!l.length)return;const f=t.pendingIcons;f&&l.forEach(u=>{f.delete(u)}),Ye(t,a)}catch(l){console.error(l)}tn(t)})})}))}const nn=(t,e)=>{const n=qe(t,!0,Nt()),s=Be(n);if(!s.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(s.loaded,s.missing,s.pending,Tt)}),()=>{a=!1}}const o=Object.create(null),r=[];let i,c;return s.pending.forEach(a=>{const{provider:l,prefix:f}=a;if(f===c&&l===i)return;i=l,c=f,r.push(F(l,f));const u=o[l]||(o[l]=Object.create(null));u[f]||(u[f]=[])}),s.pending.forEach(a=>{const{provider:l,prefix:f,name:u}=a,p=F(l,f),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(u)||(b.add(u),o[l][f].push(u))}),r.forEach(a=>{const{provider:l,prefix:f}=a;o[l][f].length&&en(a,o[l][f])}),e?Ue(e,s,r):Tt};function on(t,e){const n={...t};for(const s in e){const o=e[s],r=typeof o;s in Rt?(o===null||o&&(r==="string"||r==="number"))&&(n[s]=o):r===typeof n[s]&&(n[s]=s==="rotate"?o%4:o)}return n}const sn=/[\s,]+/;function rn(t,e){e.split(sn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function cn(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:s(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?s(r):0)}}return e}function an(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ln(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function un(t){return"data:image/svg+xml,"+ln(t)}function fn(t){return'url("'+un(t)+'")'}const Pt={...Bt,inline:!1},dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},pn={display:"inline-block"},at={backgroundColor:"currentColor"},Jt={backgroundColor:"transparent"},Et={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Lt={webkitMask:at,mask:at,background:Jt};for(const t in Lt){const e=Lt[t];for(const n in Et)e[t+n]=Et[n]}const G={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";G[t+"-flip"]=e,G[t.slice(0,1)+"-flip"]=e,G[t+"Flip"]=e});function Ft(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Mt=(t,e)=>{const n=on(Pt,e),s={...dn},o=e.mode||"svg",r={},i=e.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let g in e){const d=e[g];if(d!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&rn(n,d);break;case"color":r.color=d;break;case"rotate":typeof d=="string"?n[g]=cn(d):typeof d=="number"&&(n[g]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete s["aria-hidden"];break;default:{const P=G[g];P?(d===!0||d==="true"||d===1)&&(n[P]=!0):Pt[g]===void 0&&(s[g]=d)}}}const a=Ce(t,n),l=a.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),o==="svg"){s.style={...r,...c},Object.assign(s,l);let g=0,d=e.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),s.innerHTML=Ee(a.body,d?()=>d+"ID"+g++:"iconifyVue"),mt("svg",s)}const{body:f,width:u,height:p}=t,b=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),I=an(f,{...l,width:u+"",height:p+""});return s.style={...r,"--svg":fn(I),width:Ft(l.width),height:Ft(l.height),...pn,...b?at:Jt,...c},mt("span",s)};Nt(!0);Le("",Re);if(typeof document<"u"&&typeof window<"u"){Kt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!be(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Fe(n,o)||console.error(s)}catch{console.error(s)}}}}const hn={...W,body:""},U=lt({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=J(t,!1,!0))===null)return this.abortLoading(),null;const s=ye(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:nn([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:s,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad):null;if(!e)return Mt(hn,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Mt({...W,...e.data},n)}}),gn=["id"],mn={class:"pb-6 flex items-start justify-between"},yn=["textContent"],wn=["value"],bn={class:"max-h-[calc(100dvh_-_64px)] overflow-y-auto"},xn={key:1,class:"break-words whitespace-pre-wrap break-all"},vn={class:"text-gray-800 mt-8"},_n={class:"flex items-center justify-between"},In={class:"text-xs"},Sn={class:"mt-6 space-y-4 px-6"},kn=m("h2",{class:"text-xs font-medium pb-2 uppercase"}," Комментарии ",-1),Cn={class:"text-xs"},jn={class:"text-gray-500 text-[10px]"},Tn={datetime:"2024-04-30 22:44:10"},Pn={key:0,class:"translate-y-6 -mx-6 mt-6 sticky bottom-0"},En=lt({__name:"PostCard",props:{id:{},title:{},class:{},comments_count:{},created_at:{},author:{},modal:{type:Boolean,default:!1}},setup(t){const e=t,{format:n}=new Intl.DateTimeFormat("ru-RU",{dateStyle:"long",timeStyle:"short"}),s=A(),o=A({}),r=A(),i=A(!1),c=A(!1),a=Zt({comment:"",post_id:e.id});async function l(){try{i.value=!0,r.value=await fetch(route("comments.get-by-post-id",e.id)).then(u=>u.json())}catch(u){throw new Error("При получении комментариев произошла ошибка",{cause:u})}finally{i.value=!1}}async function f(){o.value=await fetch(route("posts.by-id",e.id)).then(u=>u.json())}return(u,p)=>{var j;const b=$("kit-dialog-trigger"),I=$("post-card",!0),g=$("kit-dialog-content"),d=$("kit-dialog"),P=$("kit-button");return _(),C("article",{class:Xt(y(ue)("text-gray-700 relative rounded-md p-6  bg-white mb-4 overflow-hidden transition-shadow hover:shadow shadow-sm sm:rounded-lg",e.class)),id:`post_id_${u.id}`},[m("div",mn,[m("h1",{textContent:T(u.$props.title),class:"max-w-[70%] break-words font-medium text-xl"},null,8,yn),m("time",{value:u.created_at,class:"text-gray-500 text-xs"},T(e.created_at),9,wn)]),u.$props.modal?(_(),q(d,{key:0},{default:v(()=>[x(b,{"as-child":""},{default:v(()=>[m("p",{onClick:p[0]||(p[0]=w=>f()),class:"break-words hover:text-gray-500 cursor-pointer whitespace-pre-wrap break-all"},[yt(u.$slots,"default")])]),_:3}),x(g,null,{default:v(()=>[m("div",bn,[x(I,Ot({title:u.title,created_at:u.created_at,author:u.author,id:u.id,comments_count:u.comments_count},{class:"shadow-none hover:shadow-none p-0 pr-6 mb-0"}),{default:v(()=>[E(T(o.value.content),1)]),_:1},16)])]),_:1})]),_:3})):(_(),C("p",xn,[yt(u.$slots,"default")])),m("footer",vn,[m("div",_n,[m("address",In,[E(" Автор: "),m("i",null,T(e.author),1)]),x(P,{disabled:i.value,variant:"outline",onClick:p[1]||(p[1]=w=>c.value?c.value=!1:(c.value=!0,l())),type:"button"},{default:v(()=>[E(" 💬 "),m("span",null,T(u.comments_count),1)]),_:1},8,["disabled"])]),c.value&&r.value?(_(),C(M,{key:0},[m("section",Sn,[kn,(_(!0),C(M,null,et(r.value,w=>(_(),C("article",{key:r.value.id},[m("address",Cn,[E(" Автор: "),m("i",null,T(w.user.name),1)]),m("p",null,T(w.content),1),m("span",jn,[E(" От "),m("time",Tn,T(y(n)(new Date(w.created_at))),1)])]))),128))]),(j=u.$page.props.auth)!=null&&j.user?(_(),C("div",Pn,[m("p",{ref_key:"contentParagraph",ref:s,contenteditable:"plaintext-only",onInput:p[2]||(p[2]=w=>y(a).comment=String(w.target.textContent)),class:"min-h-20 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"},null,544),x(P,{disabled:y(a).comment.trim().length<1,type:"button",onClick:p[3]||(p[3]=w=>(y(a).post(u.route("comments.create")),l(),y(a).reset(),s.value?s.value.innerHTML="":null)),variant:"outline",class:"w-full"},{default:v(()=>[E("📨")]),_:1},8,["disabled"])])):wt("",!0)],64)):wt("",!0)])],10,gn)}}}),Ln={class:"py-12"},Fn={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Mn={class:""},On={key:0,class:"container max-w-[768px]"},An={class:"mt-12 flex items-center justify-center pb-5"},$n={key:1,class:"p-4"},zn=lt({__name:"Posts",setup(t){const e=Yt(),{format:n}=new Intl.DateTimeFormat("ru-RU",{dateStyle:"long",timeStyle:"short"}),s=bt(()=>new URLSearchParams(e.url)),o=bt(()=>Number(y(s).get("offset"))||0);return(r,i)=>(_(),C(M,null,[x(y(te),{title:"Посты"}),x(Wt,null,{default:v(()=>[m("div",Ln,[m("div",Fn,[m("div",Mn,[r.$page.props.posts?(_(),C("section",On,[(_(!0),C(M,null,et(r.$page.props.posts,({id:c,title:a,content:l,user_id:f,comments_count:u,created_at:p,user:b})=>{var I,g;return _(),q(En,Ot({key:c,id:c,modal:"",ref_for:!0},{title:a,comments_count:u},{created_at:y(n)(new Date(p)),author:f===((g=(I=r.$page.props.auth)==null?void 0:I.user)==null?void 0:g.id)?"Вы":b.name}),{default:v(()=>[E(T(l),1)]),_:2},1040,["id","created_at","author"])}),128)),m("footer",An,[x(y(ne),{total:Number(r.$page.props.totalPosts),"sibling-count":1,"show-edges":"","default-page":o.value>0?o.value/10:1},{default:v(()=>[x(y(oe),{class:"flex items-center gap-1 text-primary"},{default:v(({items:c})=>[x(y(se),{class:"w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"},{default:v(()=>[x(y(U),{icon:"radix-icons:double-arrow-left"})]),_:1}),x(y(re),{class:"w-9 h-9 flex items-center justify-center mr-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"},{default:v(()=>[x(y(U),{icon:"radix-icons:chevron-left"})]),_:1}),(_(!0),C(M,null,et(c,(a,l)=>(_(),C(M,null,[a.type==="page"?(_(),q(y(ae),{as:y(ee),href:r.route("posts"),data:{offset:a.value*20-20},key:l,class:"w-9 h-9 border rounded flex items-center justify-center data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1",value:a.value},{default:v(()=>[E(T(a.value),1)]),_:2},1032,["as","href","data","value"])):(_(),q(y(le),{key:a.type,index:l,class:"w-9 h-9 flex items-center justify-center"},{default:v(()=>[E(" … ")]),_:2},1032,["index"]))],64))),256)),x(y(ie),{class:"w-9 h-9 flex items-center justify-center ml-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"},{default:v(()=>[x(y(U),{icon:"radix-icons:chevron-right"})]),_:1}),x(y(ce),{class:"w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"},{default:v(()=>[x(y(U),{icon:"radix-icons:double-arrow-right"})]),_:1})]),_:1})]),_:1},8,["total","default-page"])])])):(_(),C("section",$n," Постов пока нет. "))])])])]),_:1})],64))}});export{zn as default};
