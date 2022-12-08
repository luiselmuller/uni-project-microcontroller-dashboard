import{j as e,l as B,r as a,a as i,T as g,B as $,i as G,L as F,g as U,u as q,C as _,y as W,s as C,d as K,b as H,I as L,e as I,c as J,f as Q,R as Y,h as y,k as X,m as Z}from"./vendor.61bf757b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function c(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=c(r);fetch(r.href,s)}})();const ee="modulepreload",te=function(t){return"/"+t},O={},l=function(o,c,n){if(!c||c.length===0)return o();const r=document.getElementsByTagName("link");return Promise.all(c.map(s=>{if(s=te(s),s in O)return;O[s]=!0;const d=s.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!n)for(let m=r.length-1;m>=0;m--){const f=r[m];if(f.href===s&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":ee,d||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),d)return new Promise((m,f)=>{u.addEventListener("load",m),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>o())};const ae=()=>e("div",{className:"h-screen w-screen bg-main-bg dark:bg-main-dark-bg flex justify-center items-center",children:e(B.GuardSpinner,{})}),se=a.exports.lazy(()=>l(()=>import("./Menu.a4f35bcb.js").then(t=>t.M),["assets/Menu.a4f35bcb.js","assets/vendor.61bf757b.js"])),re=a.exports.lazy(()=>l(()=>import("./AccountCircle.65072a3f.js").then(t=>t.A),["assets/AccountCircle.65072a3f.js","assets/vendor.61bf757b.js"])),ne=a.exports.lazy(()=>l(()=>import("./Settings.31bafa3c.js").then(t=>t.S),["assets/Settings.31bafa3c.js","assets/vendor.61bf757b.js"])),oe=a.exports.lazy(()=>l(()=>import("./NotificationsNone.2b116f40.js").then(t=>t.N),["assets/NotificationsNone.2b116f40.js","assets/vendor.61bf757b.js"])),ie=a.exports.lazy(()=>l(()=>import("./NotificationImportant.e4f18702.js").then(t=>t.N),["assets/NotificationImportant.e4f18702.js","assets/vendor.61bf757b.js"])),le=a.exports.lazy(()=>l(()=>import("./DarkMode.102b3624.js").then(t=>t.D),["assets/DarkMode.102b3624.js","assets/vendor.61bf757b.js"])),ce=a.exports.lazy(()=>l(()=>import("./LightMode.c09f09c4.js").then(t=>t.L),["assets/LightMode.c09f09c4.js","assets/vendor.61bf757b.js"])),de=a.exports.lazy(()=>l(()=>import("./CancelOutlined.0d43970e.js").then(t=>t.C),["assets/CancelOutlined.0d43970e.js","assets/vendor.61bf757b.js"])),ue=a.exports.lazy(()=>l(()=>import("./GitHub.871f8f34.js").then(t=>t.G),["assets/GitHub.871f8f34.js","assets/vendor.61bf757b.js"])),me=({customFuncOne:t,customFuncTwo:o,disabledSide:c,mobileNav:n,microStatus:r,setClickedMenu:s,handleTheme:d,theme:h,notifications:v})=>i("div",{className:"flex justify-evenly items-center p-3 relative mx-3 dark:text-[#e4e5f1]",children:[e("button",{type:"button",onClick:c?o:t,className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:n?e(de,{fontSize:"large"}):e(se,{fontSize:"large"})}),i("div",{className:`flex gap-2 items-center sm:text-lg text-md lg:border dark:border-slate-300 border-slate-900
        rounded-full py-1 px-4 ml-5`,children:[e("div",{className:`${r===!0?"bg-green-400":"bg-red-400"} h-3 w-3 rounded-full `}),!c&&e("p",{children:r===!0?"Online":"Offline"})]}),e("div",{className:"w-full"}),i("div",{className:"flex gap-2 sm:gap-4",children:[e(g,{title:"Theme",children:e("button",{type:"button",onClick:d,className:`hover:scale-110 transition-all duration-200 ease-in-out outline-none active:rotate-180
              active:scale-95`,children:h==="light"?e(ce,{fontSize:"large"}):e(le,{fontSize:"large"})})}),n&&e(g,{title:"Github repository",children:e("button",{type:"button",className:"active:scale-100 hover:scale-110 transition-all duration-100 ease-in-out\r ",children:e("a",{href:"https://github.com/luiselmuller/microcontroller-dashboard",target:"_blank",children:e(ue,{fontSize:"large"})})})}),!n&&e(g,{title:"Notifications",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:e("button",{type:"button",onClick:()=>s("notifications"),children:e($,{badgeContent:v.length,color:"info",overlap:"circular",children:v.length>0?e(ie,{fontSize:"large"}):e(oe,{fontSize:"large"})})})}),!n&&e(g,{title:"Settings",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out hover:rotate-180 active:scale-100",children:e("button",{type:"button",onClick:()=>s("settings"),children:e(ne,{fontSize:"large"})})}),!n&&e(g,{title:"Profile",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:e("button",{type:"button",onClick:()=>s("account"),children:e(re,{fontSize:"large"})})})]})]}),fe={apiKey:"AIzaSyCeiMOP52fq_dPAdTG3sWCSbSLDGuJwS2g",authDomain:"esp32-monitor-2244b.firebaseapp.com",databaseURL:"https://esp32-monitor-2244b-default-rtdb.firebaseio.com",projectId:"esp32-monitor-2244b",storageBucket:"esp32-monitor-2244b.appspot.com",messagingSenderId:"280167063041",appId:"1:280167063041:web:83c702f2d2df8ef88b2a00",measurementId:"G-ER8PQC6BYT"},T=G(fe),k=F(T);U(T);const pe=a.exports.lazy(()=>l(()=>import("./NotificationCard.81f2d633.js"),["assets/NotificationCard.81f2d633.js","assets/vendor.61bf757b.js"])),he=({menuFunc:t,notifs:o})=>{const[c]=q();return e(_,{onClickAway:()=>{t("none")},children:i("div",{className:`z-[1000] fixed mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit max-h-96 w-[300px] sm:-translate-x-[125px] -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`,children:[i("div",{className:"p-2 flex gap-10 items-center",children:[e("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Alerts"}),e("div",{className:"w-full flex items-center",children:i("button",{type:"button",className:"outline-none text-xs flex items-center opacity-80 hover:opacity-100 transition-all duration-100 ease-in-out",onClick:()=>o.map(async n=>await W(C(k,"Notifications",n.id))),children:[e(K,{fontSize:"small",className:"scale-90"}),"Mark all as read"]})})]}),i("div",{ref:c,className:"flex flex-col justify-evenly gap-1 py-1 px-1",children:[Array.isArray(o)?o.map(n=>e("div",{children:e(a.exports.Suspense,{fallback:e(H,{}),children:e(pe,{message:n.notification,time:n.createdAt,id:n.id})})},n.id)):" ",o.length===0&&e("p",{className:"my-5 text-center font-bold text-xl opacity-80 dark:text-slate-400 text-slate-500",children:"No alerts"})]})]})})},xe=({menuFunc:t})=>e(_,{onClickAway:()=>{t("none")},children:i("div",{className:`z-[1000] absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72 sm:-translate-x-[70px] -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`,children:[i("div",{className:"p-2 flex gap-10 items-center",children:[e("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Settings"}),e("div",{className:"w-full flex items-center"})]}),i("div",{className:"flex flex-col gap-1 justify-center items-center px-1",children:[e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Configure Microcontroller"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Configure Database"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Manage Data"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Edit Theme"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Change Layout"}),e("p",{className:"text-xs text-red-400 mt-10",children:"*for demonstration purposes"})]})]})}),be=({menuFunc:t})=>e(_,{onClickAway:()=>{t("none")},children:i("div",{className:`z-[1000] absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72 -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`,children:[i("div",{className:"p-2 flex gap-10 items-center",children:[e("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Account"}),e("div",{className:"w-full flex items-center text-xs"})]}),i("div",{className:"flex flex-col gap-1 justify-center items-center px-1",children:[e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Edit Account"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Privacy Settings"}),e("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Log Out"}),e("p",{className:"text-xs text-red-400 mt-6",children:"*for demonstration purposes"})]})]})}),D=a.exports.lazy(()=>l(()=>import("./Overview.36d22def.js"),["assets/Overview.36d22def.js","assets/vendor.61bf757b.js"])),ge=a.exports.lazy(()=>l(()=>import("./DetailedView.d679132e.js"),["assets/DetailedView.d679132e.js","assets/vendor.61bf757b.js"])),ve=a.exports.lazy(()=>l(()=>import("./DeviceStatistics.9ad1d24e.js"),["assets/DeviceStatistics.9ad1d24e.js","assets/vendor.61bf757b.js"])),ye=a.exports.lazy(()=>l(()=>import("./Sidebar.ff5e6424.js"),["assets/Sidebar.ff5e6424.js","assets/vendor.61bf757b.js"])),ke=a.exports.lazy(()=>l(()=>import("./MobileNavigation.cef10cf7.js"),["assets/MobileNavigation.cef10cf7.js","assets/vendor.61bf757b.js"]));let R=!1;function _e(){var A;const[t,o]=a.exports.useState(!1),[c,n]=a.exports.useState(1920),[r,s]=a.exports.useState(!0),[d,h]=a.exports.useState(!1),[v,u]=a.exports.useState(!0),[m,f]=a.exports.useState("none"),[N,P]=a.exports.useState({}),[x,V]=a.exports.useState(localStorage.getItem("theme"));a.exports.useEffect(()=>{x==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[x]);const M=()=>{V(x==="dark"?"light":"dark"),localStorage.setItem("theme",x==="dark"?"light":"dark")};a.exports.useEffect(()=>L(I(k,"DeviceStatistics"),p=>P(p.docs.map(b=>({...b.data(),id:b.id})))),[]),a.exports.useEffect(()=>{const p=()=>n(window.innerWidth);return window.addEventListener("resize",p),p(),()=>window.removeEventListener("resize",p)}),a.exports.useEffect(()=>{c<=900?(s(!1),h(!0),u(!1)):(h(!1),u(!0),o(!1))},[c,s]);const[w,S]=a.exports.useState(!1);a.exports.useEffect(()=>{R=!0,E()},[(A=N[6])==null?void 0:A.info]),a.exports.useEffect(()=>{setTimeout(async()=>{S(!!R),E()},1e4)},[]);const E=async()=>{await J(C(k,"DeviceStatistics/Status"),{info:w})},[z,j]=a.exports.useState([{}]);return a.exports.useEffect(()=>L(I(k,"Notifications"),p=>j(p.docs.map(b=>({...b.data(),id:b.id})))),[]),e("div",{className:"",children:e(a.exports.Suspense,{fallback:e(ae,{}),children:e(Q,{children:i("div",{className:"flex relative bg-main-bg dark:bg-main-dark-bg dark:text-slate-200 text-main-dark-bg",children:[e("div",{className:`${r?"w-72  relative":"w-0 overflow-hidden"} 
            dark:bg-secondary-dark-bg bg-slate-300 transition-all duration-150 ease-out`,children:e(ye,{sideIsOpen:r})}),i("div",{className:`min-h-screen w-full ${!1} ? 'md:ml-72' : ' flex-2'`,children:[i("div",{className:`fixed md:static  z-[1000000] w-full transition-all duration-50 ease-linear
              ${t?"dark:bg-secondary-dark-bg bg-slate-300":"bg-main-bg dark:bg-main-dark-bg"}`,children:[e(me,{customFuncOne:()=>s(!r),customFuncTwo:()=>o(!t),disabledSide:d,mobileNav:t,microStatus:w,notifications:z,setClickedMenu:f,handleTheme:M,theme:x}),e("div",{className:"w-full relative flex justify-end",children:!t&&m==="notifications"?e(he,{menuFunc:f,notifs:z}):m==="settings"?e(xe,{menuFunc:f}):m==="account"?e(be,{menuFunc:f}):" "})]}),e("div",{className:`${t?"h-screen z-[100000]":"h-0 overflow-hidden"}
                dark:bg-secondary-dark-bg bg-slate-300 transition-all duration-150 ease-linear fixed`,children:e(ke,{handleMobileNavOpen:()=>o(!t),mobileNavOpen:!0})}),e("div",{children:i(Y,{children:[e(y,{path:"/",element:e(D,{})}),e(y,{path:"/overview",element:e(D,{})}),e(y,{path:"/detailed-view",element:e(ge,{})}),e(y,{path:"/device-statistics",element:e(ve,{deviceData:N})})]})})]})]})})})})}X.createRoot(document.getElementById("root")).render(e(Z.StrictMode,{children:e(_e,{})}));export{l as _,k as d};
