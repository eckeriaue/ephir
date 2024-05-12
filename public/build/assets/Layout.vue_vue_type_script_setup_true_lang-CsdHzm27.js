import{A as E}from"./ApplicationLogo-BwQmI_Ti.js";import{d as N,s as F,k as b,u as n,r as i,o as p,c as k,b as l,a as e,w as t,f as d,v as I,T as S,l as x,g as M,F as L,q as P,e as q,p as z,n as C,x as j,i as v,t as H}from"./app-D__JmWOG.js";const O={class:"mt-2"},A={class:"mb-1"},D=N({__name:"MarkdownEditor",props:{modelValue:{default:""},modelModifiers:{}},emits:["update:modelValue"],setup($){const[r]=F($,"modelValue"),a=b(),s={href:b(""),mask:b(""),isVisible:b(!1),insert(){const u=n(this.mask)||n(this.href),o=n(this.href);this.mask.value="",this.href.value="",this.isVisible.value=!1,a.value.appendChild(Object.assign(document.createElement("a"),{classList:"editor-link",textContent:u,target:"_blank",href:o})),r.value=n(a).innerHTML,m()}};function m(){a.value.appendChild(document.createTextNode(" "))}return(u,o)=>{const _=i("kit-button"),h=i("kit-dropdown-trigger"),y=i("kit-input"),w=i("kit-command"),c=i("kit-dropdown-content"),V=i("kit-dropdown-menu");return p(),k("div",O,[l("div",A,[e(V,{open:s.isVisible.value,"onUpdate:open":o[3]||(o[3]=f=>s.isVisible.value=f)},{default:t(()=>[e(h,{"as-child":""},{default:t(()=>[e(_,{type:"button",variant:"outline"},{default:t(()=>[d("🔗")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(w,{as:"fieldset",onKeypress:o[2]||(o[2]=I(f=>s.insert(),["enter"])),class:"space-y-1 p-1"},{default:t(()=>[e(y,{placeholder:"Текст",modelValue:s.mask.value,"onUpdate:modelValue":o[0]||(o[0]=f=>s.mask.value=f)},null,8,["modelValue"]),e(y,{required:"",placeholder:"https://example.com",modelValue:s.href.value,"onUpdate:modelValue":o[1]||(o[1]=f=>s.href.value=f)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["open"])]),l("div",{class:"min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",id:"postContent",ref_key:"content",ref:a,onInput:o[4]||(o[4]=f=>r.value=f.target.innerHTML),contenteditable:"plaintext-only"},null,544)])}}}),K={class:"mt-4 max-w-full"},R={key:0,class:"w-full mt-6"},G={class:"grid grid-cols-4 gap-4 min-h-40"},J={class:"gap-x-2 flex justify-end mt-4"},Q=N({__name:"CreatePostModal",setup($){const r=b(!1),a=S({title:"",content:"",photos:[]}),s=b([]);function m(u){const o=u.target;o&&o instanceof HTMLInputElement&&o.files&&0 in o.files&&(a.photos.push(o.files[0]),s.value.push(URL.createObjectURL(o.files[0])))}return(u,o)=>{var U;const _=i("kit-button"),h=i("kit-dialog-trigger"),y=i("kit-dialog-title"),w=i("kit-dialog-description"),c=i("kit-label"),V=i("kit-input"),f=i("kit-dialog-content"),T=i("kit-dialog");return(U=u.$page.props.auth)!=null&&U.user?(p(),x(T,{key:0,open:r.value,"onUpdate:open":o[4]||(o[4]=g=>r.value=g)},{default:t(()=>[e(h,{"as-child":""},{default:t(()=>[e(_,null,{default:t(()=>[d(" 🪶 ")]),_:1})]),_:1}),e(f,{class:"overflow-y-scroll max-h-[calc(100dvh_-_64px)]"},{default:t(()=>[e(y,null,{default:t(()=>[d(" Создать пост ")]),_:1}),e(w,null,{default:t(()=>[d("Здесь вы можете написать о чем вы думаете ")]),_:1}),l("form",{class:"min-w-fit",onSubmit:o[3]||(o[3]=q(g=>(n(a).post(u.route("posts.create"),{onSuccess(){n(a).reset("content"),n(a).reset("photos"),n(a).reset("title")}}),r.value=!1),["prevent"]))},[e(c,{for:"postName"},{default:t(()=>[d(" Название ")]),_:1}),e(V,{modelValue:n(a).title,"onUpdate:modelValue":o[0]||(o[0]=g=>n(a).title=g),id:"postName",class:"mt-2"},null,8,["modelValue"]),l("div",K,[e(c,{for:"postContent"},{default:t(()=>[d(" Содержимое ")]),_:1}),e(D,{modelValue:n(a).content,"onUpdate:modelValue":o[1]||(o[1]=g=>n(a).content=g)},null,8,["modelValue"]),e(c,{for:"picture",class:"mt-2 inline-block"},{default:t(()=>[d(" Добавить фото ")]),_:1}),e(V,{id:"picture",onChange:m,type:"file"}),s.value.length>0?(p(),k("div",R,[l("div",G,[(p(!0),k(L,null,P(s.value,(g,B)=>(p(),k("div",{key:g+B,style:z({backgroundImage:`url('${g}')`}),class:"bg-cover w-full rounded aspect-square"},null,4))),128))])])):M("",!0)]),l("div",J,[e(_,{type:"button",onClick:o[2]||(o[2]=g=>(r.value=!1,n(a).title="",n(a).content="")),variant:"secondary"},{default:t(()=>[d("Отменить")]),_:1}),e(_,{type:"submit",disabled:n(a).title.length<1||n(a).content.length<1||n(a).processing},{default:t(()=>[d("Сохранить")]),_:1},8,["disabled"])])],32)]),_:1})]),_:1},8,["open"])):M("",!0)}}}),W={class:"min-h-screen bg-gray-100"},X={class:"bg-white border-b border-gray-100 sticky z-10 top-0"},Y={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Z={class:"flex justify-between h-16"},ee={class:"flex"},te={class:"shrink-0 flex items-center"},oe=l("div",{class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},null,-1),se={class:"hidden sm:flex sm:items-center sm:ms-6"},ne={class:"ms-3 relative"},le={class:"-me-2 flex items-center sm:hidden"},ae={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ie=l("div",{class:"pt-2 pb-3 space-y-1"},null,-1),de={class:"pt-4 pb-1 border-t border-gray-200"},re={key:0,class:"bg-white sticky inset-0 shadow"},ue={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},me=N({__name:"Layout",setup($){const r=b(!1),a=S({});return(s,m)=>{const u=i("kit-button"),o=i("kit-dropdown-trigger"),_=i("kit-dropdown-menu-item"),h=i("kit-command"),y=i("kit-dropdown-content"),w=i("kit-dropdown-menu");return p(),k("div",null,[l("div",W,[l("nav",X,[l("div",Y,[l("div",Z,[l("div",ee,[l("div",te,[e(n(v),{href:s.route("posts")},{default:t(()=>[e(E,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),oe]),l("div",se,[l("div",ne,[e(Q),e(w,null,{default:t(()=>[e(o,null,{default:t(()=>[s.$page.props.auth.user?(p(),x(u,{key:0,variant:"ghost",type:"button",class:"font-medium text-base text-gray-800"},{default:t(()=>{var c;return[d(H((c=s.$page.props.auth.user)==null?void 0:c.name),1)]}),_:1})):(p(),x(u,{key:1,variant:"ghost",type:"button",class:"font-medium text-base text-gray-800"},{default:t(()=>[d(" Гость ")]),_:1}))]),_:1}),e(y,{align:"end",class:"w-56"},{default:t(()=>[s.$page.props.auth.user?(p(),x(h,{key:0,class:"mt-3 space-y-1"},{default:t(()=>[e(_,{as:n(v),href:s.route("profile.edit")},{default:t(()=>[d(" 👤 Профиль ")]),_:1},8,["as","href"]),e(_,{onClick:m[0]||(m[0]=c=>n(a).post(s.route("logout")))},{default:t(()=>[d(" 🔓 Выйти ")]),_:1})]),_:1})):(p(),x(h,{key:1},{default:t(()=>[e(_,{as:n(v),href:s.route("login")},{default:t(()=>[d(" 🔑 Войти ")]),_:1},8,["as","href"]),e(_,{as:n(v),href:s.route("register")},{default:t(()=>[d(" 🪪 Регистрация ")]),_:1},8,["as","href"])]),_:1}))]),_:1})]),_:1})])]),l("div",le,[l("button",{onClick:m[1]||(m[1]=c=>r.value=!r.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(p(),k("svg",ae,[l("path",{class:C({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),l("path",{class:C({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),l("div",{class:C([{block:r.value,hidden:!r.value},"sm:hidden"])},[ie,l("div",de,[e(h,{class:"mt-3 space-y-1"},{default:t(()=>[s.$page.props.auth.user?(p(),k(L,{key:0},[e(u,{as:n(v),href:s.route("profile.edit")},{default:t(()=>[d(" 👤 Профиль ")]),_:1},8,["as","href"]),e(u,{onClick:m[2]||(m[2]=c=>n(a).post(s.route("logout")))},{default:t(()=>[d(" 🔓 Выйти ")]),_:1})],64)):(p(),k(L,{key:1},[e(u,{as:n(v),href:s.route("login")},{default:t(()=>[d(" 🔑 Войти ")]),_:1},8,["as","href"]),e(u,{as:n(v),href:s.route("register")},{default:t(()=>[d(" 🪪 Регистрация ")]),_:1},8,["as","href"])],64))]),_:1})])],2)]),s.$slots.header?(p(),k("header",re,[l("div",ue,[j(s.$slots,"header")])])):M("",!0),l("main",null,[j(s.$slots,"default")])])])}}});export{me as _};