import{u as p}from"./useCarousel-NLWCVE-c.js";import{c as u}from"./utils-C-5SdYIA.js";import{d as m,o as f,c as d,x as v,K as w,L as x,u as t,n as y}from"./app-CDu3K6Ox.js";import"./index-fCn4AFu5.js";const C=m({__name:"Carousel",props:{opts:{},plugins:{},orientation:{default:"horizontal"},class:{}},emits:["init-api"],setup(a,{expose:n,emit:i}){const o=a,r=p(o,i);n(r);function l(e){const s=o.orientation==="vertical"?"ArrowUp":"ArrowLeft",c=o.orientation==="vertical"?"ArrowDown":"ArrowRight";if(e.key===s){e.preventDefault(),r.scrollPrev();return}e.key===c&&(e.preventDefault(),r.scrollNext())}return(e,s)=>(f(),d("div",{class:y(t(u)("relative",o.class)),role:"region","aria-roledescription":"carousel",tabindex:"0",onKeydown:l},[v(e.$slots,"default",w(x(t(r))))],34))}});export{C as default};