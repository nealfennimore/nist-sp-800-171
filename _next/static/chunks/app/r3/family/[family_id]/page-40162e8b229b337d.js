(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{5238:(e,t,l)=>{Promise.resolve().then(l.bind(l,3897)),Promise.resolve().then(l.bind(l,707)),Promise.resolve().then(l.bind(l,1996))},707:(e,t,l)=>{"use strict";l.d(t,{Requirements:()=>d});var s=l(5155),i=l(1996),n=l(3272),r=l(7396),a=l(2115),u=l(4475),m=l(9645);let d=e=>{let{familyId:t}=e,l=(0,i.u2)(),d=l.requirements.byFamily[t],c=l.families.byId[t],[h,f]=(0,a.useState)({});return(null==d?void 0:d.length)?((0,a.useEffect)(()=>{(async function(){let e=d.map(e=>e.element_identifier),t=await n.Iq.requirements.getAll(IDBKeyRange.bound(e[0],e[e.length-1])),s=t.length&&e.length!==t.length,i=null==t?void 0:t.reduce((e,t)=>{let i=l.securityRequirements.byRequirements[t.id],n=Object.values(t.bySecurityRequirementId);return i.length===n.length||s||(s=!0),e[t.id]=n,e},{});s?i.all=["needs-work"]:i.all=Object.values(i).flat(),f(i)})()},[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.B,{familyId:t}),(0,s.jsxs)("h2",{className:"text-4xl flex flex-row items-center",children:["Requirements for ",c.element_identifier,": ",c.title," ",(0,s.jsx)(m.o,{statuses:h.all})]}),(0,s.jsxs)("ol",{children:[null==d?void 0:d.map(e=>(0,s.jsx)("li",{className:"flex items-center mb-2",children:(0,s.jsxs)(r.default,{className:"flex",href:"/r3/requirement/".concat(e.element_identifier),children:[(0,s.jsx)(m.o,{statuses:h[e.element_identifier]}),(0,s.jsxs)("h3",{className:"text-2xl",children:[e.element_identifier,":"," ",e.title]})]})},e.element_identifier)),(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{})]})):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[396,655,441,517,358],()=>t(5238)),_N_E=e.O()}]);