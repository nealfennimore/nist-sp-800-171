(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568,974],{3430:(e,l,i)=>{Promise.resolve().then(i.bind(i,1871)),Promise.resolve().then(i.bind(i,3897)),Promise.resolve().then(i.bind(i,1996))},1871:(e,l,i)=>{"use strict";i.d(l,{Families:()=>u});var s=i(5155),n=i(1996),t=i(3272),r=i(7396),a=i(2115),c=i(4475),d=i(9645);let u=()=>{var e;let l=(0,n.u2)(),i=null==l?void 0:null===(e=l.families)||void 0===e?void 0:e.elements,[u,m]=(0,a.useState)({});return(null==i?void 0:i.length)?((0,a.useEffect)(()=>{(async function(){let e=await t.Iq.requirements.getAll(),s=i.reduce((e,l)=>(e[l.element_identifier]=[],e),{});for(let n of i){let i=n.element_identifier,t=l.requirements.byFamily[i],r=null==e?void 0:e.reduce((e,l)=>(e[l.id]=l,e),{}),a=new Set(Object.keys(r)),c=t.some(e=>a.has(e.id));for(let e of t){let n=l.securityRequirements.byRequirements[e.id],t=r[e.id];if(!t){s[i].push(c?d.n.NEEDS_WORK:d.n.NOT_STARTED);continue}let a=Object.values(t.bySecurityRequirementId);if(n.length!==a.length){s[i].push(d.n.NOT_STARTED);continue}s[i]=[...s[i],...a]}m(s)}})()},[i]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.B,{}),(0,s.jsx)("h2",{className:"text-4xl",children:"800-171 Rev 3 Families"}),(0,s.jsx)("ul",{children:i.map(e=>(0,s.jsx)("li",{className:"flex mb-2",children:(0,s.jsx)(r.default,{className:"flex flex-col",href:"/r3/family/".concat(e.element_identifier),children:(0,s.jsxs)("h3",{className:"text-2xl flex flex-row",children:[(0,s.jsx)(d.o,{statuses:null==u?void 0:u[e.element_identifier]}),(0,s.jsxs)("span",{className:"flex flex-col mr-2",children:[e.element_identifier,":"]}),(0,s.jsx)("span",{className:"flex flex-col",children:e.title})]})})},e.element_identifier))})]})):null}}},e=>{var l=l=>e(e.s=l);e.O(0,[396,655,441,517,358],()=>l(3430)),_N_E=e.O()}]);