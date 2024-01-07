import{h as f,z as h,A as _,o as c,c as i,d as b,t as k,e as w,b as o,k as r,j as v,B as x,w as y,F as g,x as V,l as C}from"./app-wOSmkzKC.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";import{a as m,P as $,_ as u}from"./InputLabel-odPwA9hb.js";import{l as E}from"./auth-_i2ffA1P.js";const N=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:n}){const e=n,d=l,a=f({get(){return d.checked},set(s){e("update:checked",s)}});return(s,t)=>h((c(),i("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":t[0]||(t[0]=p=>a.value=p),class:"rounded-md appearance-none w-4 h-4 border-2 border-gray-600 outline outline-transparent transition-all focus:outline-offset-2 checked:border-transparent focus:outline-lime-600 checked:bg-lime-600"},null,8,N)),[[_,a.value]])}},q=B(U,[["__scopeId","data-v-6c7a7bf9"]]),P={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},j={class:"block mt-4"},z={class:"flex items-center"},A=o("span",{class:"ms-2 text-sm text-gray-600"},"Запомнить меня",-1),D={class:"flex items-center justify-end mt-4"},I=b({__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const n=V(),e={email:"",password:"",remember:!1,processing:!1};async function d(){try{const{end:a}=await E({email:e.email,password:e.password});await n.push("/"),a()}catch(a){throw new Error("При логине проишозла какая-то ошибка",{cause:a})}}return(a,s)=>(c(),i(g,null,[l.status?(c(),i("div",P,k(l.status),1)):w("",!0),o("form",{onSubmit:s[3]||(s[3]=y(t=>d(),["prevent"]))},[o("div",null,[r(u,{for:"email",value:"Email"}),r(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=t=>e.email=t),placeholder:"Email",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),o("div",S,[r(u,{for:"password",value:"Пароль"}),r(m,{id:"password",type:"password",class:"mt-1 block w-full",placeholder:"Пароль",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=t=>e.password=t),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),o("div",j,[o("label",z,[r(q,{name:"remember",checked:e.remember,"onUpdate:checked":s[2]||(s[2]=t=>e.remember=t)},null,8,["checked"]),A])]),o("div",D,[r($,{class:x(["ms-4",{"opacity-25":e.processing}]),disabled:e.processing},{default:v(()=>[C(" Войти ")]),_:1},8,["class","disabled"])])],32)],64))}});export{I as default};
