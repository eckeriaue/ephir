import{d as D,k as x,T as B,r,o as u,c as _,b as s,a as t,w as e,u as l,l as f,g as w,n as $,m as S,i as k,f as i,e as E,F as O,s as R,t as C,q as H}from"./app-BC-oCQ6-.js";import{A as G}from"./ApplicationLogo-yFDuLrUQ.js";const J={class:"min-h-screen bg-gray-100"},K={class:"bg-white border-b border-gray-100 sticky z-10 top-0"},Q={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},W={class:"flex justify-between h-16"},X={class:"flex"},Y={class:"shrink-0 flex items-center"},Z=s("div",{class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},null,-1),ee={class:"hidden sm:flex sm:items-center sm:ms-6"},te={class:"ms-3 relative"},se={class:"mt-4 max-w-full"},oe={key:0,class:"w-full mt-6"},ne={class:"grid grid-cols-4 gap-4 min-h-40"},le={class:"gap-x-2 flex justify-end mt-4"},ae={class:"-me-2 flex items-center sm:hidden"},ie={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},de=s("div",{class:"pt-2 pb-3 space-y-1"},null,-1),re={class:"pt-4 pb-1 border-t border-gray-200"},ue={class:"px-4"},ce={class:"font-medium text-base text-gray-800"},pe={class:"font-medium text-sm text-gray-500"},_e={key:0,class:"bg-white sticky inset-0 shadow"},me={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ke=D({__name:"Layout",setup(fe){const c=x(!1),d=B({title:"",content:"",photos:[]}),v=x([]),U=B({}),g=x(!1);function F(a){const o=a.target;o&&o instanceof HTMLInputElement&&o.files&&0 in o.files&&(d.photos.push(o.files[0]),v.value.push(URL.createObjectURL(o.files[0])))}return(a,o)=>{var j;const m=r("kit-button"),z=r("kit-dialog-trigger"),I=r("kit-dialog-title"),P=r("kit-dialog-description"),y=r("kit-label"),V=r("kit-input"),T=r("kit-textarea"),q=r("kit-dialog-content"),A=r("kit-dialog"),L=r("kit-dropdown-trigger"),p=r("kit-dropdown-menu-item"),b=r("kit-command"),M=r("kit-dropdown-content"),N=r("kit-dropdown-menu");return u(),_("div",null,[s("div",J,[s("nav",K,[s("div",Q,[s("div",W,[s("div",X,[s("div",Y,[t(l(k),{href:a.route("posts")},{default:e(()=>[t(G,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),Z]),s("div",ee,[s("div",te,[(j=a.$page.props.auth)!=null&&j.user?(u(),f(A,{key:0,open:g.value,"onUpdate:open":o[4]||(o[4]=n=>g.value=n)},{default:e(()=>[t(z,{"as-child":""},{default:e(()=>[t(m,null,{default:e(()=>[i(" 🪶 ")]),_:1})]),_:1}),t(q,{class:"overflow-y-scroll max-h-[calc(100dvh_-_64px)]"},{default:e(()=>[t(I,null,{default:e(()=>[i(" Создать пост ")]),_:1}),t(P,null,{default:e(()=>[i("Здесь вы можете написать о чем вы думаете ")]),_:1}),s("form",{class:"min-w-fit",onSubmit:o[3]||(o[3]=E(n=>{l(d).post(a.route("posts.create"),{onSuccess(){l(d).reset("content"),l(d).reset("photos"),l(d).reset("title")}}),g.value=!1},["prevent"]))},[t(y,{for:"postName"},{default:e(()=>[i(" Название ")]),_:1}),t(V,{modelValue:l(d).title,"onUpdate:modelValue":o[0]||(o[0]=n=>l(d).title=n),id:"postName",class:"mt-2"},null,8,["modelValue"]),s("div",se,[t(y,{for:"postContent"},{default:e(()=>[i(" Содержимое ")]),_:1}),t(T,{class:"mt-2",id:"postContent",modelValue:l(d).content,"onUpdate:modelValue":o[1]||(o[1]=n=>l(d).content=n)},null,8,["modelValue"]),t(y,{for:"picture",class:"mt-2 inline-block"},{default:e(()=>[i(" Добавить фото ")]),_:1}),t(V,{id:"picture",onChange:F,type:"file"}),v.value.length>0?(u(),_("div",oe,[s("div",ne,[(u(!0),_(O,null,R(v.value,(n,h)=>(u(),_("div",{key:n+h,style:H({backgroundImage:`url('${n}')`}),class:"bg-cover w-full rounded aspect-square"},null,4))),128))])])):w("",!0)]),s("div",le,[t(m,{type:"button",onClick:o[2]||(o[2]=n=>(g.value=!1,l(d).title="",l(d).content="")),variant:"secondary"},{default:e(()=>[i("Отменить")]),_:1}),t(m,{type:"submit",disabled:l(d).title.length<1||l(d).content.length<1||l(d).processing},{default:e(()=>[i("Сохранить")]),_:1},8,["disabled"])])],32)]),_:1})]),_:1},8,["open"])):w("",!0),t(N,null,{default:e(()=>[t(L,null,{default:e(()=>[a.$page.props.auth.user?(u(),f(m,{key:0,variant:"ghost",type:"button",class:"font-medium text-base text-gray-800"},{default:e(()=>{var n;return[i(C((n=a.$page.props.auth.user)==null?void 0:n.name),1)]}),_:1})):(u(),f(m,{key:1,variant:"ghost",type:"button",class:"font-medium text-base text-gray-800"},{default:e(()=>[i(" Гость ")]),_:1}))]),_:1}),t(M,{align:"end",class:"w-56"},{default:e(()=>[a.$page.props.auth.user?(u(),f(b,{key:0,class:"mt-3 space-y-1"},{default:e(()=>[t(p,{as:l(k),href:a.route("profile.edit")},{default:e(()=>[i(" 👤 Профиль ")]),_:1},8,["as","href"]),t(p,{onClick:o[5]||(o[5]=n=>l(U).post(a.route("logout")))},{default:e(()=>[i(" 🔓 Выйти ")]),_:1})]),_:1})):(u(),f(b,{key:1},{default:e(()=>[t(p,{as:l(k),href:a.route("login")},{default:e(()=>[i(" 🔑 Войти ")]),_:1},8,["as","href"]),t(p,{as:l(k),href:a.route("register")},{default:e(()=>[i(" 🪪 Регистрация ")]),_:1},8,["as","href"])]),_:1}))]),_:1})]),_:1})])]),s("div",ae,[s("button",{onClick:o[6]||(o[6]=n=>c.value=!c.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(u(),_("svg",ie,[s("path",{class:$({hidden:c.value,"inline-flex":!c.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),s("path",{class:$({hidden:!c.value,"inline-flex":c.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),s("div",{class:$([{block:c.value,hidden:!c.value},"sm:hidden"])},[de,s("div",re,[t(N,null,{default:e(()=>[t(L,{"as-child":""},{default:e(()=>{var n,h;return[s("div",ue,[s("div",ce,C((n=a.$page.props.auth.user)==null?void 0:n.name),1),s("div",pe,C((h=a.$page.props.auth.user)==null?void 0:h.email),1)])]}),_:1}),t(M,{class:"w-56"},{default:e(()=>[t(b,{class:"mt-3 space-y-1"},{default:e(()=>[t(p,null,{default:e(()=>[i(" Профиль ")]),_:1}),t(p,null,{default:e(()=>[i(" Выйти ")]),_:1})]),_:1})]),_:1})]),_:1})])],2)]),a.$slots.header?(u(),_("header",_e,[s("div",me,[S(a.$slots,"header")])])):w("",!0),s("main",null,[S(a.$slots,"default")])])])}}});export{ke as _};
