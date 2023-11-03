(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{54291:function(e,t,a){Promise.resolve().then(a.bind(a,37205))},37205:function(e,t,a){"use strict";a.r(t);var r=a(9268),o=a(24214),s=a(86006),i=a(68919);t.default=()=>{let[e,t]=(0,s.useState)([]),[a,n]=(0,s.useState)(!1),l=e=>{let t="https://think-best.vercel.app/api/auth/register?id=".concat(e);o.Z.delete(t).then(()=>{i.ZP.success("Successfully delete!"),n(!1),c()}).catch(e=>{console.error("Error deleting user:",e)})},c=()=>{o.Z.get("https://think-best.vercel.app/api/auth/register").then(e=>{t(e.data)}).catch(e=>{console.error("Error fetching data:",e)})};return c(),console.log("users data",e),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"overflow-x-auto",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("table",{className:"table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Job"}),(0,r.jsx)("th",{children:"Favorite Color"})]})}),a?"<div>loading</div>":(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("tr",{className:"bg-base-200",children:[(0,r.jsx)("th",{children:"1"}),(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:e.email}),(0,r.jsx)("button",{className:"bg-red-500 px-3 rounded font-bold py-2 text-base",onClick:()=>l(e._id),children:"Delete"})]})}))})]})]})})}},68919:function(e,t,a){"use strict";let r,o;a.d(t,{ZP:function(){return U}});var s,i=a(86006);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",r="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+i+";":r+="f"==s[1]?u(i,s):s+"{"+u(i,"k"==s[1]?"":t)+"}":"object"==typeof i?r+=u(i,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(s,i):s+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,o)=>{var s;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(p," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(p," ").trim();return r[0]})(e);m[n]=u(o?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),s=m[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=r?s+t.data:t.data+s),n},g=(e,t,a)=>e.reduce((e,r,o)=>{let s=t[o];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function b(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let x,y,v,w=b.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=b.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(o):o}}var E=e=>"function"==typeof e,k=(e,t)=>E(e)?e(t):e,$=(r=0,()=>(++r).toString()),N=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},_=new Map,z=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),I({type:4,toastId:e})},1e3);_.set(e,t)},C=e=>{let t=_.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?A(e,{type:1,toast:a}):A(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?z(r):e.toasts.forEach(e=>{z(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},F=[],O={toasts:[],pausedAt:void 0},I=e=>{O=A(O,e),F.forEach(e=>{e(O)})},D=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||$()}),P=e=>(t,a)=>{let r=D(t,e,a);return I({type:2,toast:r}),r.id},S=(e,t)=>P("blank")(e,t);S.error=P("error"),S.success=P("success"),S.loading=P("loading"),S.custom=P("custom"),S.dismiss=e=>{I({type:3,toastId:e})},S.remove=e=>I({type:4,toastId:e}),S.promise=(e,t,a)=>{let r=S.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(S.success(k(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{S.error(k(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var Z=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,M=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,L=j("div")`
  position: absolute;
`,q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(H,null,t):t:"blank"===a?null:i.createElement(q,null,i.createElement(T,{...r}),"loading"!==a&&i.createElement(L,null,"error"===a?i.createElement(Z,{...r}):i.createElement(M,{...r})))},B=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,R=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[B(a),G(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};i.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?R(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(J,{toast:e}),n=i.createElement(Q,{...e.ariaProps},k(e.message,e));return i.createElement(K,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))}),s=i.createElement,u.p=void 0,x=s,y=void 0,v=void 0,b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var U=S}},function(e){e.O(0,[348,253,961,744],function(){return e(e.s=54291)}),_N_E=e.O()}]);