import{T as c,o as f,c as w,w as d,a as o,u as e,Z as _,b as t,d as V,n as g,e as b}from"./app-ZbNT53_g.js";import{_ as k}from"./GuestLayout-ldd0lYaL.js";import{_ as l,a as i,b as m}from"./TextInput.vue_vue_type_script_setup_true_lang-mhjS8EWE.js";import{P as v}from"./PrimaryButton-sdRULIfz.js";import"./ApplicationLogo-8ysc9XX3.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const y={class:"mt-4"},q={class:"mt-4"},x={class:"flex items-center justify-end mt-4"},T={__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(u){const n=u,s=c({token:n.token,email:n.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(B,a)=>(f(),w(k,null,{default:d(()=>[o(e(_),{title:"Сброс пароля"}),t("form",{onSubmit:b(p,["prevent"])},[t("div",null,[o(l,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",y,[o(l,{for:"password",value:"Пароль"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",q,[o(l,{for:"password_confirmation",value:"Подтвердите пароль"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",x,[o(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:d(()=>[V(" Сброс пароля ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
