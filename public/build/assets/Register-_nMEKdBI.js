import{d as _,T as w,r as u,o as V,c as g,a as s,u as o,b as r,w as n,f as t,t as m,n as b,e as k,Z as v}from"./app-CP24v6kg.js";import{A as x}from"./ApplicationLogo-BbA_QnTc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"h-dvh flex flex-col items-center justify-center"},h={class:"mt-4"},q={class:"mt-4"},C={class:"mt-4"},U={class:"flex items-center justify-end mt-4"},R=_({__name:"Register",setup(B){const e=w({name:"",email:"",password:"",password_confirmation:""}),c=()=>{e.post(route("register"),{onFinish:()=>{e.reset("password","password_confirmation")}})};return(f,a)=>{const i=u("kit-label"),d=u("kit-input"),p=u("kit-button");return V(),g("div",y,[s(o(v),{title:"Register"}),s(x,{class:"mb-6"}),r("form",{onSubmit:k(c,["prevent"]),class:"w-[360px]"},[r("div",null,[s(i,{for:"name"},{default:n(()=>[t(" Имя ")]),_:1}),s(d,{id:"name",type:"text",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>o(e).name=l),required:"",class:"mt-2",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),t(" "+m(o(e).errors.name),1)]),r("div",h,[s(i,{for:"email"},{default:n(()=>[t(" Почта ")]),_:1}),s(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(e).email,"onUpdate:modelValue":a[1]||(a[1]=l=>o(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),t(" "+m(o(e).errors.email),1)]),r("div",q,[s(i,{for:"password"},{default:n(()=>[t(" Пароль ")]),_:1}),s(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(e).password,"onUpdate:modelValue":a[2]||(a[2]=l=>o(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),t(" "+m(o(e).errors.password),1)]),r("div",C,[s(i,{for:"password_confirmation"},{default:n(()=>[t(" Повторите пароль ")]),_:1}),s(d,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=l=>o(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),t(" "+m(o(e).errors.password_confirmation),1)]),r("div",U,[s(p,{variant:"link",href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[t(" Уже есть аккаунт? ")]),_:1},8,["href"]),s(p,{class:b(["ms-4",{"opacity-25":o(e).processing}]),disabled:o(e).processing},{default:n(()=>[t(" Регистрация ")]),_:1},8,["class","disabled"])])],32)])}}});export{R as default};
