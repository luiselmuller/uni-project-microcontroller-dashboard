import{j as e,l as $,r as a,a as l,T as b,B as U,i as G,L as F,g as q,u as W,C as N,y as K,s as w,d as H,b as J,I,e as D,c as Q,f as Y,R as X,h as _,k as Z,m as ee,n as te}from"./vendor.7f8f2ce7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function d(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=d(s);fetch(s.href,r)}})();const ae="modulepreload",re=function(t){return"/"+t},O={},c=function(o,d,n){if(!d||d.length===0)return o();const s=document.getElementsByTagName("link");return Promise.all(d.map(r=>{if(r=re(r),r in O)return;O[r]=!0;const u=r.endsWith(".css"),x=u?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===r&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${x}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":ae,u||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>o())};const se=()=>e("div",{className:"h-screen w-screen bg-main-bg dark:bg-main-dark-bg flex justify-center items-center",children:e($.GuardSpinner,{})}),ne=a.exports.lazy(()=>c(()=>import("./Menu.5e36586c.js").then(t=>t.M),["assets/Menu.5e36586c.js","assets/vendor.7f8f2ce7.js"])),ie=a.exports.lazy(()=>c(()=>import("./AccountCircle.a97218e6.js").then(t=>t.A),["assets/AccountCircle.a97218e6.js","assets/vendor.7f8f2ce7.js"])),oe=a.exports.lazy(()=>c(()=>import("./Settings.d1980d92.js").then(t=>t.S),["assets/Settings.d1980d92.js","assets/vendor.7f8f2ce7.js"])),le=a.exports.lazy(()=>c(()=>import("./NotificationsNone.fb92c3b3.js").then(t=>t.N),["assets/NotificationsNone.fb92c3b3.js","assets/vendor.7f8f2ce7.js"])),ce=a.exports.lazy(()=>c(()=>import("./NotificationImportant.158523fe.js").then(t=>t.N),["assets/NotificationImportant.158523fe.js","assets/vendor.7f8f2ce7.js"])),de=a.exports.lazy(()=>c(()=>import("./DarkMode.efd33352.js").then(t=>t.D),["assets/DarkMode.efd33352.js","assets/vendor.7f8f2ce7.js"])),ue=a.exports.lazy(()=>c(()=>import("./LightMode.d5b3f973.js").then(t=>t.L),["assets/LightMode.d5b3f973.js","assets/vendor.7f8f2ce7.js"])),me=a.exports.lazy(()=>c(()=>import("./CancelOutlined.009ea6bd.js").then(t=>t.C),["assets/CancelOutlined.009ea6bd.js","assets/vendor.7f8f2ce7.js"])),pe=a.exports.lazy(()=>c(()=>import("./GitHub.b6310738.js").then(t=>t.G),["assets/GitHub.b6310738.js","assets/vendor.7f8f2ce7.js"])),fe=({customFuncOne:t,customFuncTwo:o,disabledSide:d,mobileNav:n,microStatus:s,setClickedMenu:r,handleTheme:u,theme:x,notifications:y})=>l("div",{className:"flex justify-evenly items-center p-3 relative mx-3 dark:text-[#e4e5f1]",children:[e("button",{type:"button",onClick:d?o:t,className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:n?e(me,{fontSize:"large"}):e(ne,{fontSize:"large"})}),l("div",{className:`flex gap-2 items-center sm:text-lg text-md lg:border dark:border-slate-300 border-slate-900
        rounded-full py-1 px-4 ml-5`,children:[e("div",{className:`${s===!0?"bg-green-400":"bg-red-400"} h-3 w-3 rounded-full `}),!d&&e("p",{children:s===!0?"Online":"Offline"})]}),e("div",{className:"w-full"}),l("div",{className:"flex gap-2 sm:gap-4",children:[e(b,{title:"Theme",children:e("button",{type:"button",onClick:u,className:`hover:scale-110 transition-all duration-200 ease-in-out outline-none active:rotate-180
              active:scale-95`,children:x!="light"?e(ue,{fontSize:"large"}):e(de,{fontSize:"large"})})}),n&&e(b,{title:"Github repository",children:e("button",{type:"button",className:"active:scale-100 hover:scale-110 transition-all duration-100 ease-in-out\r ",children:e("a",{href:"https://github.com/luiselmuller/microcontroller-dashboard",target:"_blank",children:e(pe,{fontSize:"large"})})})}),!n&&e(b,{title:"Notifications",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:e("button",{type:"button",onClick:()=>r("notifications"),children:e(U,{badgeContent:y.length,color:"info",overlap:"circular",children:y.length>0?e(ce,{fontSize:"large"}):e(le,{fontSize:"large"})})})}),!n&&e(b,{title:"Settings",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out hover:rotate-180 active:scale-100",children:e("button",{type:"button",onClick:()=>r("settings"),children:e(oe,{fontSize:"large"})})}),!n&&e(b,{title:"Profile",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:e("button",{type:"button",onClick:()=>r("account"),children:e(ie,{fontSize:"large"})})})]})]}),he={apiKey:"AIzaSyCeiMOP52fq_dPAdTG3sWCSbSLDGuJwS2g",authDomain:"esp32-monitor-2244b.firebaseapp.com",databaseURL:"https://esp32-monitor-2244b-default-rtdb.firebaseio.com",projectId:"esp32-monitor-2244b",storageBucket:"esp32-monitor-2244b.appspot.com",messagingSenderId:"280167063041",appId:"1:280167063041:web:83c702f2d2df8ef88b2a00",measurementId:"G-ER8PQC6BYT"},P=G(he),v=F(P);q(P);const xe=a.exports.lazy(()=>c(()=>import("./NotificationCard.937db025.js"),["assets/NotificationCard.937db025.js","assets/vendor.7f8f2ce7.js"])),ge=({menuFunc:t,notifs:o})=>{const[d]=W();return e(N,{onClickAway:()=>{t("none")},children:l("div",{className:`z-[1000] fixed mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit max-h-96 w-[300px] sm:-translate-x-[125px] -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`,children:[l("div",{className:"p-2 flex gap-10 items-center",children:[e("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Alerts"}),e("div",{className:"w-full flex items-center",children:l("button",{type:"button",className:"outline-none text-xs flex items-center opacity-80 hover:opacity-100 transition-all duration-100 ease-in-out",onClick:()=>o.map(async n=>await K(w(v,"Notifications",n.id))),children:[e(H,{fontSize:"small",className:"scale-90"}),"Mark all as read"]})})]}),l("div",{ref:d,className:"flex flex-col justify-evenly gap-1 py-1 px-1",children:[Array.isArray(o)?o.map(n=>e("div",{children:e(a.exports.Suspense,{fallback:e(J,{}),children:e(xe,{message:n.notification,time:n.createdAt,id:n.id})})},n.id)):" ",o.length===0&&e("p",{className:"my-5 text-center font-bold text-xl opacity-80 dark:text-slate-400 text-slate-500",children:"No alerts"})]})]})})},be=({menuFunc:t})=>e(N,{onClickAway:()=>{t("none")},children:l("div",{className:`z-[1000] absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72 sm:-translate-x-[70px] -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`,children:[l("div",{className:"p-2 flex gap-10 items-center",children:[e("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Settings"}),e("div",{className:"w-full flex items-center"})]}),l("div",{className:"flex flex-col gap-1 justify-center items-center px-1",children:[e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Configure Microcontroller"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Configure Database"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Manage Data"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Edit Theme"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Change Layout"}),e("p",{className:"text-xs text-red-400 mt-10",children:"*for demonstration purposes"})]})]})}),ve=({menuFunc:t})=>e(N,{onClickAway:()=>{t("none")},children:l("div",{className:`z-[1000] absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72 -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`,children:[l("div",{className:"p-2 flex gap-10 items-center",children:[e("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Account"}),e("div",{className:"w-full flex items-center text-xs"})]}),l("div",{className:"flex flex-col gap-1 justify-center items-center px-1",children:[e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Edit Account"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Privacy Settings"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Log Out"}),e("p",{className:"text-xs text-red-400 mt-6",children:"*for demonstration purposes"})]})]})}),R=a.exports.lazy(()=>c(()=>import("./Overview.38ec5924.js"),["assets/Overview.38ec5924.js","assets/vendor.7f8f2ce7.js"])),ye=a.exports.lazy(()=>c(()=>import("./DetailedView.532abd7c.js"),["assets/DetailedView.532abd7c.js","assets/vendor.7f8f2ce7.js"])),ke=a.exports.lazy(()=>c(()=>import("./DeviceStatistics.8de0c1c0.js"),["assets/DeviceStatistics.8de0c1c0.js","assets/vendor.7f8f2ce7.js"])),_e=a.exports.lazy(()=>c(()=>import("./Sidebar.939054d4.js"),["assets/Sidebar.939054d4.js","assets/vendor.7f8f2ce7.js"])),we=a.exports.lazy(()=>c(()=>import("./MobileNavigation.e876d86c.js"),["assets/MobileNavigation.e876d86c.js","assets/vendor.7f8f2ce7.js"]));function Ne(){var A,L;const[t,o]=a.exports.useState(!1),[d,n]=a.exports.useState(1920),[s,r]=a.exports.useState(!0),[u,x]=a.exports.useState(!1),[y,p]=a.exports.useState(!0),[f,h]=a.exports.useState("none"),[k,T]=a.exports.useState({}),[g,C]=a.exports.useState(localStorage.getItem("theme"));a.exports.useEffect(()=>{g==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[g]);const V=()=>{C(g==="dark"?"light":"dark"),localStorage.setItem("theme",g==="dark"?"light":"dark")};a.exports.useEffect(()=>I(D(v,"DeviceStatistics"),i=>T(i.docs.map(m=>({...m.data(),id:m.id})))),[]),a.exports.useEffect(()=>{const i=()=>n(window.innerWidth);return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)}),a.exports.useEffect(()=>{d<=900?(r(!1),x(!0),p(!1)):(x(!1),p(!0),o(!1))},[d,r]);const[M,S]=a.exports.useState(!1);a.exports.useEffect(()=>{var i;S((i=k[5])==null?void 0:i.info)},[(A=k[5])==null?void 0:A.info]),a.exports.useEffect(()=>{let i,m;(async()=>{i=await E()})(),setTimeout(async()=>{m=await E(),i-m===0&&(S(!1),await Q(w(v,"DeviceStatistics","Status"),{info:!1})),console.log(i,m)},6e3)},[(L=k[6])==null?void 0:L.info]);async function j(){var i;try{return await((i=(await Z(w(v,"DeviceStatistics","Uptime"))).data())==null?void 0:i.info)}catch(m){console.log(m)}}async function E(){return await j()}const[z,B]=a.exports.useState([{}]);return a.exports.useEffect(()=>I(D(v,"Notifications"),i=>B(i.docs.map(m=>({...m.data(),id:m.id})))),[]),e("div",{className:"",children:e(a.exports.Suspense,{fallback:e(se,{}),children:e(Y,{children:l("div",{className:"flex relative bg-main-bg dark:bg-main-dark-bg dark:text-slate-200 text-main-dark-bg",children:[e("div",{className:`${s?"w-72  relative":"w-0 overflow-hidden"} 
            dark:bg-secondary-dark-bg bg-slate-300 transition-all duration-150 ease-out`,children:e(_e,{sideIsOpen:s})}),l("div",{className:`min-h-screen w-full ${!1} ? 'md:ml-72' : ' flex-2'`,children:[l("div",{className:`fixed md:static  z-[1000000] w-full transition-all duration-50 ease-linear
              ${t?"dark:bg-secondary-dark-bg bg-slate-300":"bg-main-bg dark:bg-main-dark-bg"}`,children:[e(fe,{customFuncOne:()=>r(!s),customFuncTwo:()=>o(!t),disabledSide:u,mobileNav:t,notifications:z,setClickedMenu:h,handleTheme:V,theme:g,microStatus:M}),e("div",{className:"w-full relative flex justify-end",children:!t&&f==="notifications"?e(ge,{menuFunc:h,notifs:z}):f==="settings"?e(be,{menuFunc:h}):f==="account"?e(ve,{menuFunc:h}):" "})]}),e("div",{className:`${t?"h-screen z-[100000]":"h-0 overflow-hidden"}
                dark:bg-secondary-dark-bg bg-slate-300 transition-all duration-150 ease-linear fixed`,children:e(we,{handleMobileNavOpen:()=>o(!t),mobileNavOpen:!0})}),e("div",{children:l(X,{children:[e(_,{path:"/",element:e(R,{})}),e(_,{path:"/overview",element:e(R,{})}),e(_,{path:"/detailed-view",element:e(ye,{})}),e(_,{path:"/device-statistics",element:e(ke,{deviceData:k})})]})})]})]})})})})}ee.createRoot(document.getElementById("root")).render(e(te.StrictMode,{children:e(Ne,{})}));export{c as _,v as d};