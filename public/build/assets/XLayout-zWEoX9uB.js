import{A as S}from"./ApplicationLogo-FJgR8qlZ.js";import{m as L,p as B,i as x,r as p,o as l,c as f,e,l as m,j as b,q as y,f as i,w as o,n as g,T as M,b as C,s as N,x as j,t as w,h as c,F as k}from"./app-RSdkq8OO.js";import{c as D}from"./index-YLc8WAyL.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const E={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(d){const t=d,r=s=>{n.value&&s.key==="Escape"&&(n.value=!1)};L(()=>document.addEventListener("keydown",r)),B(()=>document.removeEventListener("keydown",r));const u=x(()=>({48:"w-48"})[t.width.toString()]),v=x(()=>t.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":t.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),n=p(!1);return(s,a)=>(l(),f("div",E,[e("div",{onClick:a[0]||(a[0]=h=>n.value=!n.value)},[m(s.$slots,"trigger")]),b(e("div",{class:"fixed inset-0 z-40",onClick:a[1]||(a[1]=h=>n.value=!1)},null,512),[[y,n.value]]),i(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:o(()=>[b(e("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[u.value,v.value]]),style:{display:"none"},onClick:a[2]||(a[2]=h=>n.value=!1)},[e("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",d.contentClasses])},[m(s.$slots,"content")],2)],2),[[y,n.value]])]),_:3})]))}},_={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(d){return(t,r)=>{const u=C("router-link");return l(),N(u,{to:d.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[m(t.$slots,"default")]),_:3},8,["to"])}}},q=["href"],$={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(d){const t=d,r=x(()=>t.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(u,v)=>(l(),f("a",{href:d.href,class:g(r.value)},[m(u.$slots,"default")],10,q))}},A={class:"min-h-screen bg-gray-100"},T={class:"bg-white border-b border-gray-100"},V={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},F={class:"flex justify-between h-16"},I={class:"flex"},H={class:"shrink-0 flex items-center"},O=e("div",{class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},null,-1),R={class:"hidden sm:flex sm:items-center sm:ms-6"},U={class:"ms-3 relative"},X={key:0},G={class:"inline-flex rounded-md"},J={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},K=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),P={class:"-me-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"pt-2 pb-3 space-y-1"},Y={class:"pt-4 pb-1 border-t border-gray-200"},Z={class:"px-4"},ee={class:"font-medium text-base text-gray-800"},te={class:"mt-3 space-y-1"},ae={__name:"XLayout",setup(d){const t=p(!1),r=p("Гость"),u=p(NaN),v=p(!0),n=x(()=>!isNaN(j(u)));return D.get("/api/v1/get-by-self").then(s=>{s!=null&&s.name&&(r.value=s.name),s!=null&&s.id&&(u.value=s.id)}).finally(()=>v.value=!1),(s,a)=>{const h=C("router-link");return l(),f("div",null,[e("div",A,[e("nav",T,[e("div",V,[e("div",F,[e("div",I,[e("div",H,[i(h,{to:"/"},{default:o(()=>[i(S,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1})]),O]),e("div",R,[e("div",U,[v.value?(l(),f("p",X," Загрузка... ")):(l(),N(z,{key:1,align:"right",width:"48"},{trigger:o(()=>[e("span",G,[e("button",J,[c(w(r.value)+" ",1),K])])]),content:o(()=>[n.value?(l(),f(k,{key:0},[i(_,{href:"/profile-edit"},{default:o(()=>[c(" Мой профиль ")]),_:1}),i(_,{href:"/logout",method:"post",as:"button"},{default:o(()=>[c(" Выйти из системы ")]),_:1})],64)):(l(),f(k,{key:1},[i(_,{href:"/login"},{default:o(()=>[c(" Войти ")]),_:1}),i(_,{href:"/register",as:"button"},{default:o(()=>[c(" Регистарция ")]),_:1})],64))]),_:1}))])]),e("div",P,[e("button",{onClick:a[0]||(a[0]=se=>t.value=!t.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(l(),f("svg",Q,[e("path",{class:g({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:t.value,hidden:!t.value},"sm:hidden"])},[e("div",W,[i(h,{to:"/"},{default:o(()=>[c(" Home ")]),_:1})]),e("div",Y,[e("div",Z,[e("div",ee,w(r.value),1)]),e("div",te,[i($,{href:"/profile-edit"},{default:o(()=>[c(" Мой профиль ")]),_:1}),i($,{href:"/logout",method:"post",as:"button"},{default:o(()=>[c(" Выйти из системы ")]),_:1})])])],2)]),e("main",null,[m(s.$slots,"default")])])])}}};export{ae as default};
