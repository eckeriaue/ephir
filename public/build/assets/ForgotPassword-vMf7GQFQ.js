import{d,T as u,o as r,c as i,a,u as s,t as c,g as p,b as t,w as f,n as _,e as w,Z as g,f as y}from"./app-ABtojf_H.js";import{_ as b}from"./InputError.vue_vue_type_script_setup_true_lang-BY468MIy.js";import{_ as k,a as v}from"./TextInput.vue_vue_type_script_setup_true_lang-CNhoxZGn.js";import{P as x}from"./PrimaryButton-Buz9qxHl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),h={key:0,class:"mb-4 font-medium text-sm text-green-600"},N={class:"flex items-center justify-end mt-4"},S=d({__name:"ForgotPassword",props:{status:{}},setup(P){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(o,l)=>(r(),i("div",null,[a(s(g),{title:"Forgot Password"}),V,o.status?(r(),i("div",h,c(o.status),1)):p("",!0),t("form",{onSubmit:w(m,["prevent"])},[t("div",null,[a(k,{for:"email",value:"Email"}),a(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(b,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",N,[a(x,{class:_({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:f(()=>[y(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]))}});export{S as default};
