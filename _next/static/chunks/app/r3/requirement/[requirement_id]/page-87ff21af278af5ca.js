(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{9271:(e,t,r)=>{Promise.resolve().then(r.bind(r,3897)),Promise.resolve().then(r.bind(r,7920)),Promise.resolve().then(r.bind(r,1996))},7920:(e,t,r)=>{"use strict";r.d(t,{SecurityRequirements:()=>p});var n=r(5155),l=r(1996),s=r(3272),i=r(400),o=r(6046),a=r(4475),u=r(7396),d=r(2115);let c=e=>{let{previous:t,next:r}=e,l=(0,d.useRef)(null),s=(0,d.useRef)(null),i="rounded-r-lg rounded-l-lg";t&&(i="rounded-r-lg");let o="rounded-r-lg rounded-l-lg";return r&&(o="rounded-l-lg border-r"),(0,d.useEffect)(()=>{s.current?s.current.focus():l.current&&l.current.focus()},[l,s]),(0,n.jsxs)("aside",{className:"w-5/6 flex flex-row mb-4",children:[t&&(0,n.jsxs)(u.default,{href:"/r3/requirement/".concat(t.requirement),className:"flex flex-row items-center bg-gray-200 text-gray-700 border-gray-400 py-2 px-4 border-b-4 hover:bg-gray-300 ".concat(o),tabIndex:10,ref:l,children:[(0,n.jsx)("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})}),(0,n.jsxs)("span",{className:"mr-4 ml-2",children:[t.requirement,": ",t.title]})]}),r&&(0,n.jsxs)(u.default,{href:"/r3/requirement/".concat(r.requirement),className:"flex flex-row items-center bg-gray-200 text-gray-700 border-gray-400 py-2 px-4 border-b-4 hover:bg-gray-300 ".concat(i),tabIndex:11,ref:s,children:[(0,n.jsxs)("span",{className:"ml-4 mr-2",children:[r.requirement,": ",r.title]}),(0,n.jsx)("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})]})};var m=r(9645);i.xI.use({async:!0,pedantic:!1,gfm:!0,breaks:!0});let f=e=>{let{id:t,defaultValue:r,isPending:l,idx:s}=e,[i,o]=(0,d.useState)(!!r),a=(0,d.useRef)(null),u=(0,d.useMemo)(()=>()=>!i&&o(!0),[i]),c=(0,d.useMemo)(()=>()=>{if(null==a?void 0:a.current){var e;null==a||null===(e=a.current)||void 0===e||e.dispatchEvent(new Event("change",{bubbles:!0})),u()}},[a,u]);return(0,n.jsxs)("div",{onBlur:c,onClick:u,onKeyUp:u,children:[(0,n.jsxs)("select",{id:t,name:t,ref:a,className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",disabled:l,defaultValue:r,tabIndex:20,children:[(0,n.jsx)("option",{value:"not-implemented",children:"Not Implemented"}),(0,n.jsx)("option",{value:"implemented",children:"Implemented"}),(0,n.jsx)("option",{value:"not-applicable",children:"Not Applicable"}),(0,n.jsx)("option",{value:"not-started",children:"Not Started"})]},"".concat(t,"-").concat(l)),!i&&(0,n.jsx)("input",{type:"hidden",name:t,value:r})]})},x=e=>{let{securityRequirement:t,initialState:r,isPending:l,idx:s}=e,i="".concat(t.subSubRequirement,".status");return(0,n.jsxs)("div",{className:"flex flex-col mr-4",children:[(0,n.jsx)("label",{htmlFor:i,className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 my-2",children:"Status"}),(0,n.jsx)(f,{id:i,isPending:l,defaultValue:r[i],idx:s})]},i)},v=e=>{var t,r;let{securityRequirement:l,initialState:s,isPending:o}=e,a="".concat(l.subSubRequirement,".description"),u=(0,d.useRef)(null),c=(0,d.useRef)(null),m=(0,d.useRef)(null),[f,x]=(0,d.useState)(!0),[v,b]=(0,d.useState)(s[a]),h=(0,d.useMemo)(()=>()=>{var e;x(!1),null==u||null===(e=u.current)||void 0===e||e.focus()},[]),g=(0,d.useMemo)(()=>async()=>{if((null==c?void 0:c.current)&&(null==u?void 0:u.current)){var e;x(!0),c.current.innerHTML=await (0,i.xI)(null==u?void 0:null===(e=u.current)||void 0===e?void 0:e.value)}},[]);return(0,d.useEffect)(()=>{(async()=>{f&&v!==s[a]&&(b(s[a]),await g())})()},[v,s]),(0,d.useEffect)(()=>((null==u?void 0:u.current)&&(u.current.addEventListener("focus",h),u.current.addEventListener("blur",g)),m.current&&m.current.addEventListener("click",h),()=>{(null==u?void 0:u.current)&&(u.current.removeEventListener("focus",h),u.current.removeEventListener("blur",g)),m.current&&m.current.removeEventListener("click",h)}),[u,c]),(0,n.jsxs)("div",{className:"flex flex-col grow",ref:m,children:[(0,n.jsx)("label",{htmlFor:a,className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 my-2",children:"Description"}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("textarea",{ref:u,tabIndex:20,name:a,id:a,className:"min-h-32 grow z-0 w-full rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ".concat(f&&(null==u?void 0:null===(t=u.current)||void 0===t?void 0:t.value)?"absolute opacity-0":""),disabled:o,defaultValue:s[a]}),(0,n.jsx)("div",{ref:c,tabIndex:-1,className:"min-h-32 relative z-10 md-output w-full rounded-md border border-input bg-white px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ".concat(f&&(null==u?void 0:null===(r=u.current)||void 0===r?void 0:r.value)?"":"hidden")})]})]})},b=e=>{let{securityRequirement:t,initialState:r,isPending:l,idx:s}=e;return(0,n.jsx)("li",{className:"mb-4",children:(0,n.jsxs)("fieldset",{className:"flex flex-col grow",children:[(0,n.jsxs)("legend",{className:"text-2xl flex flex-row items-center justify-center",children:[(0,n.jsx)(m.o,{status:r["".concat(t.subSubRequirement,".status")]}),(0,n.jsx)("h4",{id:t.subSubRequirement,children:t.subSubRequirement})]}),(0,n.jsx)("p",{className:"text-lg my-2",children:t.text}),(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsx)(x,{securityRequirement:t,initialState:r,isPending:l,idx:s}),(0,n.jsx)(v,{securityRequirement:t,initialState:r,isPending:l})]})]})})},h=async(e,t)=>{var r,n;let l={};for(let[e,r]of t.entries()){let t=e.lastIndexOf("."),n=e.substring(0,t),s=e.substring(t+1);l[n]={...(null==l?void 0:l[n])||{},[s]:r}}for(let[e,t]of Object.entries(l))await (null===(n=s.Iq.securityRequirements)||void 0===n?void 0:n.put({id:e,...t}));let i=[];return await (null===(r=s.Iq.requirements)||void 0===r?void 0:r.put({id:e,bySecurityRequirementId:Object.entries(l).reduce((e,t)=>{let[r,n]=t;return e[r]=n.status,i.push(n.status),e},{})})),i},g=e=>{var t;let{requirement:r,initialState:l,setInitialState:s,groupings:i,isHydrating:o,setStatuses:a,prev:u,next:m}=e,[f,x]=(0,d.useState)(null);async function v(e,t){a(await h(r.id,t)),s(Object.fromEntries(t.entries())),x(new Date)}let g=(0,d.useMemo)(()=>(function(e,t){let r;return function(){for(var n=arguments.length,l=Array(n),s=0;s<n;s++)l[s]=arguments[s];r&&clearTimeout(r),r=setTimeout(()=>{e.apply(this,l)},t)}})(async e=>{var t;if(!(null===(t=e.target)||void 0===t?void 0:t.form))return;let r=new FormData(e.target.form);await v(null,r)},250),[r.id,a,s]),[p,y,w]=(0,d.useActionState)(v,l);return(0,n.jsxs)("form",{id:r.element_identifier,action:y,onChange:g,className:"basis-full",children:[(0,n.jsx)(c,{previous:u,next:m}),(0,n.jsxs)("div",{className:"sticky top-36 left-full flex flex-row-reverse items-center shrink-0 w-1/4 pb-4",style:{transform:"translateY(-100%)"},children:[(0,n.jsx)("button",{type:"submit",className:"shrink w-24 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",disabled:o,tabIndex:30,children:"Save"}),f&&(0,n.jsxs)("span",{className:"text-sm text-gray-500 mr-2 text-right",children:["Last saved: ",null==f?void 0:f.toLocaleTimeString()]})]}),null===(t=Object.entries(i))||void 0===t?void 0:t.map((e,t)=>{let[r,s]=e;return(0,n.jsx)("ol",{children:s.map(e=>(0,n.jsx)(b,{securityRequirement:e,initialState:l,isPending:w||o,idx:t},e.element_identifier))},r)})]})},p=e=>{var t,r;let{requirementId:i}=e,[u,c]=(0,d.useState)({}),[f,x]=(0,d.useState)(!1),[v,b]=(0,d.useState)([]),h=(0,l.u2)(),p=(0,o.useRouter)(),y=(0,d.useMemo)(()=>(null==h?void 0:h.securityRequirements.byRequirements[i])||[],[h,i]),w=(0,d.useMemo)(()=>(null==h?void 0:h.requirements.byId[i])||null,[h,i]),j=(0,d.useMemo)(()=>{let e={};for(let t of y)t.text&&(e[t.subRequirement]||(e[t.subRequirement]=[]),e[t.subRequirement].push(t));return e},[y]),[q,N]=(0,d.useMemo)(()=>{let e=(null==h?void 0:h.requirements.byFamily[null==w?void 0:w.family])||[],t=e.findIndex(e=>e.id===i),r=e[t-1],n=e[t+1];if(!r||!n){var l,s,o;let e=h.families.elements,t=e.findIndex(e=>e.id===w.family);if(!r){let n=null==e?void 0:null===(l=e[t-1])||void 0===l?void 0:l.id,s=h.requirements.byFamily[n];r=null==s?void 0:s[(null==s?void 0:s.length)-1]}if(!n){let r=null==e?void 0:null===(s=e[t+1])||void 0===s?void 0:s.id;n=null===(o=h.requirements.byFamily[r])||void 0===o?void 0:o[0]}}return[r,n]},[w,i,h]);return((0,d.useEffect)(()=>{(async function(){x(!0);let e=y.map(e=>e.subSubRequirement),t=await s.Iq.securityRequirements.getAll(IDBKeyRange.bound(e[0],e[e.length-1])),r=[],n=null==t?void 0:t.reduce((e,t)=>(e["".concat(t.id,".status")]=t.status,e["".concat(t.id,".description")]=t.description,r.push(t.status),e),{});b(r),c(n),x(!1)})()},[i,c,y,b,x]),(0,d.useEffect)(()=>{let e=e=>{let t=new URL("".concat(window.location.origin,"/").concat(e.newURL.split("#")[1]));t.searchParams.get("element")&&(history.replaceState(null,"",window.location.pathname+window.location.search),p.push("/r3/requirement/".concat(t.searchParams.get("element"))))};window.addEventListener("hashchange",e);let t=e=>{if(e.ctrlKey&&"s"===e.key){var t;e.preventDefault();let r=null===(t=document.forms)||void 0===t?void 0:t[0];null==r||r.requestSubmit()}};return document.addEventListener("keydown",t),()=>{window.removeEventListener("hashchange",e),document.removeEventListener("keydown",t)}},[]),null==y?void 0:y.length)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.B,{requirementId:i}),(0,n.jsxs)("h3",{className:"text-3xl mt-6",children:["Security Requirements for ",w.requirement," ",w.title,(0,n.jsx)(m.o,{statuses:v})]}),(0,n.jsx)("p",{className:"text-base discussion",dangerouslySetInnerHTML:{__html:(null===(r=h.discussions.byRequirements[i])||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.text)||""}}),(0,n.jsxs)("a",{href:"https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_171_3_0_0/home?element=".concat(w.id),target:"_blank",rel:"noreferrer",className:"text-xs text-gray-600",children:["View CPRT ",w.id]}),(0,n.jsx)("section",{className:"w-full flex flex-col",children:(0,n.jsx)(g,{requirement:w,groupings:j,initialState:u,setInitialState:c,isHydrating:f,setStatuses:b,prev:q,next:N})})]}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[396,295,655,441,517,358],()=>t(9271)),_N_E=e.O()}]);