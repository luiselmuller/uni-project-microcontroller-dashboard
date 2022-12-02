import{_ as r}from"./index.aa13b0c3.js";import{r as o,a as t,j as e,T as c,N as s}from"./vendor.b822f280.js";const d=o.exports.lazy(()=>r(()=>import("./MonitorHeart.094d9a23.js").then(a=>a.M),["assets/MonitorHeart.094d9a23.js","assets/vendor.b822f280.js"])),m=o.exports.lazy(()=>r(()=>import("./CalendarViewMonth.6e899918.js").then(a=>a.C),["assets/CalendarViewMonth.6e899918.js","assets/vendor.b822f280.js"])),p=o.exports.lazy(()=>r(()=>import("./GridViewOutlined.e9f2a4ea.js").then(a=>a.G),["assets/GridViewOutlined.e9f2a4ea.js","assets/vendor.b822f280.js"])),h=o.exports.lazy(()=>r(()=>import("./GitHub.482d65e5.js").then(a=>a.G),["assets/GitHub.482d65e5.js","assets/vendor.b822f280.js"])),u=({sideIsOpen:a})=>{const l="outline-none flex items-center gap-2 bg-main-bg hover:bg-main-bg dark:bg-main-dark-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out",n="outline-none flex items-center gap-2 hover:bg-main-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out";return t("div",{className:"h-screen w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2 dark:text-[#e4e5f1]",children:[t("div",{className:"flex justify-center items-center border-b-1 dark:border-slate-300 border-slate-900 mb-4 py-4 gap-4",children:[e("p",{className:"text-xl font-semibold",children:"Micro Dashboard"}),e(c,{title:"Github repository",children:e("button",{type:"button",className:"active:scale-100 hover:scale-110 transition-all duration-100 ease-in-out\r ",children:e("a",{href:"https://github.com/luiselmuller/microcontroller-dashboard",target:"_blank",children:e(h,{fontSize:"large"})})})})]}),t("div",{className:"flex flex-col gap-4",children:[t("div",{className:"flex flex-col gap-2",children:[e("p",{className:"ml-2 dark:opacity-50 opacity-90",children:"Data"}),t(s,{to:"/",className:({isActive:i})=>i?l:n,children:[e(m,{}),"Overview"]}),t(s,{to:"/detailed-view",className:({isActive:i})=>i?l:n,children:[e(p,{}),"Detailed View"]})]}),t("div",{className:"flex flex-col gap-2",children:[e("p",{className:"ml-2 dark:opacity-50 opacity-90",children:"Device"}),t(s,{to:"/device-statistics",className:({isActive:i})=>i?l:n,children:[e(d,{}),"Device Statistics"]})]})]})]})};export{u as default};