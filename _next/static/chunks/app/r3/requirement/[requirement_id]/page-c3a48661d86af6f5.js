(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{9271:(e,t,r)=>{Promise.resolve().then(r.bind(r,8617)),Promise.resolve().then(r.bind(r,7920)),Promise.resolve().then(r.bind(r,1996))},7920:(e,t,r)=>{"use strict";r.d(t,{SecurityRequirements:()=>y});var n=r(5155),l=r(1996),i=r(3272),s=r(400),o=r(6046),a=r(4475),u=r(8173),d=r.n(u),c=r(2115);let m=e=>{let{previous:t,next:r}=e,l=(0,c.useRef)(null),i=(0,c.useRef)(null),s="rounded-r-lg rounded-l-lg";t&&(s="rounded-r-lg");let o="rounded-r-lg rounded-l-lg";return r&&(o="rounded-l-lg border-r"),(0,c.useEffect)(()=>{i.current?i.current.focus():l.current&&l.current.focus()},[l,i]),(0,n.jsxs)("aside",{className:"w-5/6 flex flex-row mb-4",children:[t&&(0,n.jsxs)(d(),{href:"/r3/requirement/".concat(t.requirement),className:"flex flex-row items-center bg-gray-200 text-gray-700 border-gray-400 py-2 px-4 border-b-4 hover:bg-gray-300 ".concat(o),tabIndex:10,ref:l,children:[(0,n.jsx)("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})}),(0,n.jsxs)("span",{className:"mr-4 ml-2",children:[t.requirement,": ",t.title]})]}),r&&(0,n.jsxs)(d(),{href:"/r3/requirement/".concat(r.requirement),className:"flex flex-row items-center bg-gray-200 text-gray-700 border-gray-400 py-2 px-4 border-b-4 hover:bg-gray-300 ".concat(s),tabIndex:11,ref:i,children:[(0,n.jsxs)("span",{className:"ml-4 mr-2",children:[r.requirement,": ",r.title]}),(0,n.jsx)("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})]})};var f=r(9645);s.xI.use({async:!0,pedantic:!1,gfm:!0,breaks:!0});let x=e=>{let{id:t,defaultValue:r,isPending:l,idx:i}=e,[s,o]=(0,c.useState)(!!r),a=(0,c.useRef)(null),u=(0,c.useMemo)(()=>()=>!s&&o(!0),[s]),d=(0,c.useMemo)(()=>()=>{if(null==a?void 0:a.current){var e;null==a||null===(e=a.current)||void 0===e||e.dispatchEvent(new Event("change",{bubbles:!0})),u()}},[a,u]);return(0,n.jsxs)("div",{onBlur:d,onClick:u,onKeyUp:u,children:[(0,n.jsxs)("select",{id:t,name:t,ref:a,className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",disabled:l,defaultValue:r,tabIndex:20,children:[(0,n.jsx)("option",{value:"not-implemented",children:"Not Implemented"}),(0,n.jsx)("option",{value:"implemented",children:"Implemented"}),(0,n.jsx)("option",{value:"not-applicable",children:"Not Applicable"}),(0,n.jsx)("option",{value:"not-started",children:"Not Started"})]},"".concat(t,"-").concat(l)),!s&&(0,n.jsx)("input",{type:"hidden",name:t,value:r})]})},v=e=>{let{securityRequirement:t,initialState:r,isPending:l,idx:i}=e,s="".concat(t.subSubRequirement,".status");return(0,n.jsxs)("div",{className:"flex flex-col mr-4",children:[(0,n.jsx)("label",{htmlFor:s,className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 my-2",children:"Status"}),(0,n.jsx)(x,{id:s,isPending:l,defaultValue:r[s],idx:i})]},s)},b=e=>{var t,r,l,i;let{securityRequirement:o,initialState:a,isPending:u}=e,d="".concat(o.subSubRequirement,".description"),m=(0,c.useRef)(null),f=(0,c.useRef)(null),x=(0,c.useRef)(null),[v,b]=(0,c.useState)(!0),[h,g]=(0,c.useState)(a[d]),p=(0,c.useMemo)(()=>()=>{var e;b(!1),null==m||null===(e=m.current)||void 0===e||e.focus()},[]),y=(0,c.useMemo)(()=>async()=>{if((null==f?void 0:f.current)&&(null==m?void 0:m.current)){var e;b(!0),f.current.innerHTML=await (0,s.xI)(null==m?void 0:null===(e=m.current)||void 0===e?void 0:e.value)}},[]);return(0,c.useEffect)(()=>{(async()=>{v&&h!==a[d]&&(g(a[d]),await y())})()},[h,a]),(0,c.useEffect)(()=>((null==m?void 0:m.current)&&(m.current.addEventListener("focus",p),m.current.addEventListener("blur",y)),x.current&&x.current.addEventListener("click",p),()=>{(null==m?void 0:m.current)&&(m.current.removeEventListener("focus",p),m.current.removeEventListener("blur",y)),x.current&&x.current.removeEventListener("click",p)}),[m,f]),(0,n.jsxs)("div",{className:"flex flex-col grow w-10/12",ref:x,children:[(0,n.jsx)("label",{htmlFor:d,className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 my-2",children:"Description"}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("textarea",{ref:m,tabIndex:20,name:d,id:d,className:"min-h-32 grow z-0 w-full rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ".concat(v&&(null==m?void 0:null===(t=m.current)||void 0===t?void 0:t.value)?"absolute opacity-0":""),disabled:u,defaultValue:a[d],style:{height:(null==f?void 0:null===(r=f.current)||void 0===r?void 0:r.offsetHeight)?"".concat(null==f?void 0:null===(l=f.current)||void 0===l?void 0:l.offsetHeight,"px"):"auto"}}),(0,n.jsx)("div",{ref:f,tabIndex:-1,className:"min-h-32 relative z-10 md-output w-full rounded-md border border-input bg-white px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ".concat(v&&(null==m?void 0:null===(i=m.current)||void 0===i?void 0:i.value)?"":"scale-x-0")})]})]})},h=e=>{let{securityRequirement:t,initialState:r,isPending:l,idx:i}=e;return(0,n.jsx)("li",{className:"mb-6",children:(0,n.jsxs)("fieldset",{className:"flex flex-col grow",children:[(0,n.jsxs)("legend",{className:"text-2xl flex flex-row items-center text-left",children:[(0,n.jsx)(f.o,{status:r["".concat(t.subSubRequirement,".status")]}),(0,n.jsx)("h4",{id:t.subSubRequirement,children:t.subSubRequirement})]}),(0,n.jsx)("p",{className:"text-lg my-2",children:t.text}),(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsx)(v,{securityRequirement:t,initialState:r,isPending:l,idx:i}),(0,n.jsx)(b,{securityRequirement:t,initialState:r,isPending:l})]})]})})},g=async(e,t)=>{var r,n;let l={};for(let[e,r]of t.entries()){let t=e.lastIndexOf("."),n=e.substring(0,t),i=e.substring(t+1);l[n]={...(null==l?void 0:l[n])||{},[i]:r}}for(let[e,t]of Object.entries(l))await (null===(n=i.Iq.securityRequirements)||void 0===n?void 0:n.put({id:e,...t}));let s=[];return await (null===(r=i.Iq.requirements)||void 0===r?void 0:r.put({id:e,bySecurityRequirementId:Object.entries(l).reduce((e,t)=>{let[r,n]=t;return e[r]=n.status,s.push(n.status),e},{})})),s},p=e=>{var t;let{requirement:r,initialState:l,setInitialState:i,groupings:s,isHydrating:o,setStatuses:a,prev:u,next:d}=e,[f,x]=(0,c.useState)(null);async function v(e,t){a(await g(r.id,t)),i(Object.fromEntries(t.entries())),x(new Date)}let b=(0,c.useMemo)(()=>(function(e,t){let r;return function(){for(var n=arguments.length,l=Array(n),i=0;i<n;i++)l[i]=arguments[i];r&&clearTimeout(r),r=setTimeout(()=>{e.apply(this,l)},t)}})(async e=>{var t;if(!(null===(t=e.target)||void 0===t?void 0:t.form))return;let r=new FormData(e.target.form);await v(null,r)},250),[r.id,a,i]),[p,y,w]=(0,c.useActionState)(v,l);return(0,n.jsxs)("form",{id:r.element_identifier,action:y,onChange:b,className:"basis-full",children:[(0,n.jsx)(m,{previous:u,next:d}),(0,n.jsxs)("div",{className:"sticky top-36 left-full flex flex-row-reverse items-center shrink-0 w-1/4 pb-4 z-20",style:{transform:"translateY(-100%)"},children:[(0,n.jsx)("button",{type:"submit",className:"shrink w-24 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",disabled:o,tabIndex:30,children:"Save"}),f&&(0,n.jsxs)("span",{className:"text-sm text-gray-500 mr-2 text-right",children:["Last saved: ",null==f?void 0:f.toLocaleTimeString()]})]}),null===(t=Object.entries(s))||void 0===t?void 0:t.map((e,t)=>{let[r,i]=e;return(0,n.jsx)("ol",{children:i.map(e=>(0,n.jsx)(h,{securityRequirement:e,initialState:l,isPending:w||o,idx:t},e.element_identifier))},r)})]})},y=e=>{var t,r;let{requirementId:s}=e,[u,d]=(0,c.useState)({}),[m,x]=(0,c.useState)(!1),[v,b]=(0,c.useState)([]),h=(0,l.u2)(),g=(0,o.useRouter)(),y=(0,c.useMemo)(()=>(null==h?void 0:h.securityRequirements.byRequirements[s])||[],[h,s]),w=(0,c.useMemo)(()=>(null==h?void 0:h.requirements.byId[s])||null,[h,s]),j=(0,c.useMemo)(()=>{let e={};for(let t of y)t.text&&(e[t.subRequirement]||(e[t.subRequirement]=[]),e[t.subRequirement].push(t));return e},[y]),[q,N]=(0,c.useMemo)(()=>{let e=(null==h?void 0:h.requirements.byFamily[null==w?void 0:w.family])||[],t=e.findIndex(e=>e.id===s),r=e[t-1],n=e[t+1];if(!r||!n){var l,i,o;let e=h.families.elements,t=e.findIndex(e=>e.id===w.family);if(!r){let n=null==e?void 0:null===(l=e[t-1])||void 0===l?void 0:l.id,i=h.requirements.byFamily[n];r=null==i?void 0:i[(null==i?void 0:i.length)-1]}if(!n){let r=null==e?void 0:null===(i=e[t+1])||void 0===i?void 0:i.id;n=null===(o=h.requirements.byFamily[r])||void 0===o?void 0:o[0]}}return[r,n]},[w,s,h]);return((0,c.useEffect)(()=>{(async function(){x(!0);let e=y.map(e=>e.subSubRequirement),t=await i.Iq.securityRequirements.getAll(IDBKeyRange.bound(e[0],e[e.length-1])),r=[],n=null==t?void 0:t.reduce((e,t)=>(e["".concat(t.id,".status")]=t.status,e["".concat(t.id,".description")]=t.description,r.push(t.status),e),{});b(r),d(n),x(!1)})()},[s,d,y,b,x]),(0,c.useEffect)(()=>{let e=e=>{let t=new URL("".concat(window.location.origin,"/").concat(e.newURL.split("#")[1]));t.searchParams.get("element")&&(history.replaceState(null,"",window.location.pathname+window.location.search),g.push("/r3/requirement/".concat(t.searchParams.get("element"))))};window.addEventListener("hashchange",e);let t=e=>{if(e.ctrlKey&&"s"===e.key){var t;e.preventDefault();let r=null===(t=document.forms)||void 0===t?void 0:t[0];null==r||r.requestSubmit()}};return document.addEventListener("keydown",t),()=>{window.removeEventListener("hashchange",e),document.removeEventListener("keydown",t)}},[]),null==y?void 0:y.length)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.B,{requirementId:s}),(0,n.jsxs)("h3",{className:"text-3xl mt-6",children:["Security Requirements for ",w.requirement," ",w.title,(0,n.jsx)(f.o,{statuses:v})]}),(0,n.jsx)("p",{className:"text-base discussion",dangerouslySetInnerHTML:{__html:(null===(r=h.discussions.byRequirements[s])||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.text)||""}}),(0,n.jsxs)("a",{href:"https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_171_3_0_0/home?element=".concat(w.id),target:"_blank",rel:"noreferrer",className:"text-xs text-gray-600",children:["View CPRT ",w.id]}),(0,n.jsx)("section",{className:"w-full flex flex-col",children:(0,n.jsx)(p,{requirement:w,groupings:j,initialState:u,setInitialState:d,isHydrating:m,setStatuses:b,prev:q,next:N})})]}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[173,295,271,441,517,358],()=>t(9271)),_N_E=e.O()}]);