(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{5994:function(e,t,s){Promise.resolve().then(s.bind(s,64230))},47630:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},unstable_getImgProps:function(){return i}});let r=s(26927),l=s(55468),a=s(23579),n=s(83240),c=r._(s(54489)),i=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},o=n.Image},64230:function(e,t,s){"use strict";s.r(t);var r=s(9268),l=s(7202),a=s(24214),n=s(86006);t.default=()=>{let[e,t]=(0,n.useState)([]),[s,c]=(0,n.useState)(""),[i,o]=(0,n.useState)(""),[d,u]=(0,n.useState)("asc"),[x,m]=(0,n.useState)(1),[p]=(0,n.useState)(8);(0,n.useEffect)(()=>{a.Z.get("https://think-best.vercel.app/api/posts").then(e=>{t(e.data)}).catch(e=>{e.response?(console.error("Response data:",e.response.data),console.error("Response status:",e.response.status),console.error("Response headers:",e.response.headers)):e.request?console.error("Request:",e.request):console.error("Error message:",e.message)})},[]);let h=[...e];"title"===i?h.sort((e,t)=>"asc"===d?e.title.localeCompare(t.title):t.title.localeCompare(e.title)):"price"===i&&h.sort((e,t)=>"asc"===d?e.price-t.price:t.price-e.price);let f=h.filter(e=>{let t=s.toLowerCase();return e.title.toLowerCase().includes(t)||e.price.toString().includes(t)}),g=x*p,j=g-p,v=f.slice(j,g),b=e=>m(e);return(0,r.jsxs)("div",{className:"product-Page mb-3",children:[(0,r.jsx)("div",{className:"flex justify-center bg-slate-200 py-3",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{className:"bg-slate-500 rounded py-2 mr-1",type:"text",placeholder:"Search...",value:s,onChange:e=>c(e.target.value)}),(0,r.jsxs)("select",{className:"mr-2 py-2",value:i,onChange:e=>{let t=e.target.value;t===i?u("asc"===d?"desc":"asc"):u("asc"),o(t)},children:[(0,r.jsx)("option",{value:"",children:"Sort by"}),(0,r.jsx)("option",{value:"title",children:"Title"}),(0,r.jsx)("option",{value:"price",children:"Price"})]}),(0,r.jsx)("button",{className:"bg-stone-400 py-2",onClick:()=>u("asc"===d?"desc":"asc"),children:"asc"===d?" Sort Descending":"Sort Ascending"})]})}),(0,r.jsx)("h1",{className:"text-center py-2 text-2xl",children:"Product"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"grid grid-cols-1 auto-cols-max gap-2 place-content-center place-items-center",children:v.map(e=>(0,r.jsx)(l.Z,{product:e},e.id))}),(0,r.jsx)("div",{className:"flex justify-center my-3",children:(0,r.jsx)("ul",{className:"pagination flex",children:Array.from({length:Math.ceil(f.length/p)}).map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:()=>b(t+1),className:"rounded-full py-2 px-4 mx-1 ".concat(t+1===x?"bg-blue-200 text-white":"bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700"),children:t+1})},t))})})]})]})}},7202:function(e,t,s){"use strict";var r=s(9268),l=s(76394),a=s.n(l),n=s(35846),c=s.n(n);s(86006);var i=s(96758),o=s(84021);t.Z=e=>{let{product:t}=e;return(0,r.jsx)("div",{className:"flex  justify-center font-sans mx-2",children:(0,r.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col border   bg-white shadow-lg relative rounded",children:[(0,r.jsxs)("div",{className:"w-1/2 ",children:[(0,r.jsx)("div",{className:"w-[36px] h-[36px] bg-[#FF9209] absolute left-[0px] top-[0px]",children:(0,r.jsx)("h1",{className:"font-bold text-white text-center text-[12px]",children:"26 JUNE"})}),(0,r.jsx)(a(),{width:500,height:500,sizes:"100vw",style:{width:"208px",height:"135px",borderRadius:"50%,"},src:"https://i.ibb.co/MCJNtXx/eric-ward-u-D0-W-sw-VGg-E-unsplash.jpg",alt:""})]}),(0,r.jsxs)("div",{className:"my-2 mr-5 pr-4 relative",children:[(0,r.jsx)("hr",{className:"bg-[#FF9209] h-10 w-1   absolute left-[3px] top-[2px] "}),(0,r.jsx)("h1",{className:"font-semibold text-[13px] text-left ml-2 font-serif",children:"Barcelona Food Event"}),(0,r.jsxs)("p",{className:"text-[#FF9209] text-[11px] ml-2 ",children:["Ticket from $",(0,r.jsx)("span",{children:"23"})]}),(0,r.jsx)("p",{className:"my-2 mx-1 text-[13px ]",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aut natus praesentium ducimus, fugit eaque facilis possimus cum illum saepe."}),(0,r.jsxs)("div",{className:"my-2",children:[(0,r.jsxs)("h1",{className:"flex items-center mx-1 text-[12px]",children:[" ",(0,r.jsx)("span",{className:"bg-[#FF9209] p-[2px]  rounded-lg mr-1",children:(0,r.jsx)(i.s3B,{className:"text-white "})})," Start ",(0,r.jsx)("span",{className:"ml-2",children:"20.00pm "})," "]}),(0,r.jsxs)("h1",{className:"flex items-center mx-1 text-[12px]",children:[" ",(0,r.jsx)("span",{className:"bg-[#FF9209] p-[2px]  rounded-lg mr-1",children:(0,r.jsx)(o.v2c,{className:"text-white "})}),"  Manhattan , New York "]})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:"flex items-center ",children:[" ",(0,r.jsx)(i.s3B,{className:"mr-1 text-xl text-[#FF9209]"})," Speaker"]}),(0,r.jsx)("h1",{className:"mr-3 text-[15px] font-medium",children:"John Mathaw"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:"flex items-center ",children:[" ",(0,r.jsx)(i.s3B,{className:"mr-1 text-xl text-[#FF9209]"})," Max Seat"]}),(0,r.jsx)("h1",{className:"mr-3",children:"2220 Seat"})]}),(0,r.jsx)(c(),{href:"/",className:" flex justify-center mt-4 ",children:(0,r.jsx)("button",{className:"text-[12px] shadow-md border border-[#d5d4d3] rounded-xl  py-[6px] px-[10px]  font-serif font-semibold hover:bg-[#FF9209] hover:text-white",children:"TICKET & DETAILS"})})]})]})]})})}},76394:function(e,t,s){e.exports=s(47630)},35846:function(e,t,s){e.exports=s(24896)},83270:function(e,t,s){"use strict";s.d(t,{w_:function(){return i}});var r=s(86006),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(l),n=function(){return(n=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var l in t=arguments[s])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(s[r[l]]=e[r[l]]);return s};function i(e){return function(t){return r.createElement(o,n({attr:n({},e.attr)},t),function e(t){return t&&t.map(function(t,s){return r.createElement(t.tag,n({key:s},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var s,l=e.attr,a=e.size,i=e.title,o=c(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),r.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:s,style:n(n({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){e.O(0,[372,162,896,240,348,253,961,744],function(){return e(e.s=5994)}),_N_E=e.O()}]);