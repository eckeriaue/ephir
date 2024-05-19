import{d as v,j as m,T as y,o as i,c as w,b as a,a as e,u as r,w as f,B as g,e as V,f as x,g as P}from"./app-CDu3K6Ox.js";import{_ as l}from"./InputError.vue_vue_type_script_setup_true_lang-curjXgVa.js";import{_ as d,a as u}from"./TextInput.vue_vue_type_script_setup_true_lang-BZIEL5to.js";import{P as k}from"./PrimaryButton-CMsXsmPo.js";const b=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Update Password"),a("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),S={class:"flex items-center gap-4"},B={key:0,class:"text-sm text-gray-600"},T=v({__name:"UpdatePasswordForm",setup(C){const p=m(null),c=m(null),s=y({current_password:"",password:"",password_confirmation:""}),_=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>{s.reset()},onError:()=>{var n,o;s.errors.password&&(s.reset("password","password_confirmation"),(n=p.value)==null||n.focus()),s.errors.current_password&&(s.reset("current_password"),(o=c.value)==null||o.focus())}})};return(n,o)=>(i(),w("section",null,[b,a("form",{onSubmit:V(_,["prevent"]),class:"mt-6 space-y-6"},[a("div",null,[e(d,{for:"current_password",value:"Current Password"}),e(u,{id:"current_password",ref_key:"currentPasswordInput",ref:c,modelValue:r(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=t=>r(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),a("div",null,[e(d,{for:"password",value:"New Password"}),e(u,{id:"password",ref_key:"passwordInput",ref:p,modelValue:r(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>r(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),a("div",null,[e(d,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=t=>r(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),a("div",S,[e(k,{disabled:r(s).processing},{default:f(()=>[x("Save")]),_:1},8,["disabled"]),e(g,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:f(()=>[r(s).recentlySuccessful?(i(),w("p",B,"Saved.")):P("",!0)]),_:1})])],32)]))}});export{T as _};