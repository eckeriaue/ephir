import{d as k,r as b,o as a,c,a as x,n as $,g as w,m as P,b as _,w as B,e as j,F as T,u as i,f as S,h as A,i as h,j as p,k as f,l as g,t as M,p as N,q as O,s as R,v as q,x as z,y as D,z as E,A as L,B as F,_ as I}from"./app-MWwhQMGN.js";import{P as C,_ as V,a as U}from"./InputLabel-yg8WD63s.js";const G=k({inheritAttrs:!1,__name:"XDialog",setup(y,{expose:m}){const n=b(!1),s=(e=!i(n))=>n.value=e;function r(){s(!0),S(()=>{var e,t;(t=(e=i(d))==null?void 0:e.showModal)==null||t.call(e)})}function l(){var e,t;(t=(e=i(d))==null?void 0:e.close)==null||t.call(e),S(()=>{s(!1)})}const d=b();return m({open:r,close:l,toggle:s}),(e,t)=>(a(),c(T,null,[x(e.$slots,"project",$(w({open:r,close:l,toggle:s}))),n.value?(a(),c("dialog",P({key:0,ref_key:"dialog",ref:d},e.$attrs,{onClick:t[1]||(t[1]=o=>l())}),[_("div",{onClick:t[0]||(t[0]=B(()=>{},["stop"]))},[x(e.$slots,"default",$(w({open:r,close:l,toggle:s})))])],16)):j("",!0)],64))}}),X=["type"],H={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(y){return(m,n)=>(a(),c("button",{type:y.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[x(m.$slots,"default")],8,X))}},J={class:"mt-4"},K={class:"inline-flex mt-8 items-center gap-x-2"},Q=k({inheritAttrs:!1,__name:"CreatePost",emits:["create"],setup(y,{emit:m}){const n=b(""),s=b(""),r=m,l=A(()=>i(n).length>0&&i(s).length>0);async function d(e){e.submitter.value==="save"&&fetch(await N("/api/v1/posts/create",{method:"POST",body:{title:i(n),content:i(s)}})).then(o=>o.json()).then(o=>{r("create",o)}),n.value="",s.value=""}return(e,t)=>(a(),h(i(G),{class:"invisible opacity-0 transition-all open:visible open:opacity-100 rounded-md"},{project:p(({open:o})=>[f(C,P(e.$attrs,{class:"text-center",onClick:u=>o()}),{default:p(()=>[g(" Создать Пост ")]),_:2},1040,["onClick"])]),default:p(()=>[_("form",{method:"dialog",name:"createPost",onSubmit:d,class:"max-w-full md:w-[560px] min-w-0 xl:min-w-96 px-5 py-4"},[f(V,null,{default:p(()=>[g(" Заголовок статьи ")]),_:1}),f(U,{name:"title",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,8,["modelValue"]),_("fieldset",J,[f(V,null,{default:p(()=>[g(" Содержимое ")]),_:1}),_("p",{onInput:t[1]||(t[1]=o=>s.value=o.target.innerText),contenteditable:"true",class:"mt-2 border-2 border-transparent py-2 px-3 rounded-xl duration-[.25s] text-[13.3px] transition-all outline-none focus:placeholder:opacity-0 placeholder:transition-all focus:border-b-lime-600 text-[rgb(44,62,80)] focus:bg-[rgb(240,243,244)] bg-[rgb(241,244,245)] min-h-16",role:"textbox"},M(s.value),33)]),_("fieldset",K,[f(C,{disabled:!l.value,value:"save",type:"submit"},{default:p(()=>[g(" сохранить ")]),_:1},8,["disabled"]),f(H,{value:"cancel",type:"submit"},{default:p(()=>[g(" отменить ")]),_:1})])],32)]),_:1}))}}),W={key:1},Y={key:2},Z={key:3,class:"flex items-center justify-center"},ee=_("p",{classs:"text-xs text-gray-500"}," Здесь пока ничего нет... ",-1),te=[ee],se=k({__name:"Posts",props:{modelValue:{}},emits:["update:modelValue"],setup(y,{emit:m}){const n=F(()=>I(()=>import("./SinglePost-o8VRKZwv.js"),__vite__mapDeps([0,1,2,3,4]))),s=b(),r=b(!0);async function l(t=0,o=10){return r.value=!0,fetch(await E("/api/v1/posts")).then(u=>u.json()).then(u=>(console.info(u),s.value=u)).finally(()=>r.value=!1)}O(l);const d=R.subscribe(()=>l()),e=q.subscribe(()=>l());return z(()=>{d.unsubscribe(),e.unsubscribe()}),(t,o)=>{var u;return a(),c("section",null,[i(L)?(a(),h(Q,{key:0,onCreate:o[0]||(o[0]=v=>s.value.unshift(v)),class:"w-full my-4"})):j("",!0),r.value?(a(),c("p",W," Загрузка... ")):(u=s.value)!=null&&u.length?(a(),c("section",Y,[(a(!0),c(T,null,D(s.value,v=>(a(),h(i(n),P({key:v.id},v),null,16))),128))])):(a(),c("section",Z,te))])}}}),ae=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{ae as P,H as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SinglePost-o8VRKZwv.js","assets/app-MWwhQMGN.js","assets/app-q1aYyOga.css","assets/InputLabel-yg8WD63s.js","assets/_plugin-vue_export-helper-x3n3nnut.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
