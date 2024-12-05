"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{4475:(e,t,n)=>{n.d(t,{B:()=>l});var i=n(5155),r=n(1996),s=n(7396);let l=e=>{var t,n,l;let{familyId:o,requirementId:a}=e,u=(0,r.u2)(),c=[{href:"/r3",text:"Families"}];if(o){let e=null==u?void 0:null===(t=u.families)||void 0===t?void 0:t.byId[o];c.push({href:"/r3/family/".concat(o),text:"".concat(e.element_identifier,": ").concat(e.title)})}else if(a){let e=null==u?void 0:null===(n=u.requirements)||void 0===n?void 0:n.byId[a],t=null==u?void 0:null===(l=u.families)||void 0===l?void 0:l.byId[e.family];c.push({href:"/r3/family/".concat(e.family),text:"".concat(t.element_identifier,": ").concat(t.title)}),c.push({href:"/r3/requirement/".concat(a),text:"".concat(e.element_identifier,": ").concat(e.title),disabled:!0})}return(0,i.jsx)("aside",{children:c.map((e,t)=>(0,i.jsxs)("span",{children:[(0,i.jsx)(s.default,{className:"text-sm text-gray-600",href:e.href,"aria-disabled":e.disabled,children:e.text}),t<c.length-1&&(0,i.jsx)("span",{className:"text-sm mx-2",children:" > "})]},t))})}},9751:(e,t,n)=>{n.d(t,{Navigation:()=>c});var i=n(5155),r=n(9645),s=n(1996),l=n(3272),o=n(2115);let a=e=>{switch(e){case r.n.IMPLEMENTED:return"\uD83D\uDFE2 Implemented";case r.n.NOT_IMPLEMENTED:return"\uD83D\uDD34 Not Implemented";case r.n.NOT_APPLICABLE:return"⚫ Not Applicable";default:return"⚪ Unknown"}},u=()=>{let e=(0,s.u2)(),t=async()=>{let t=(await l.x).transaction("security_requirements","readonly").objectStore("security_requirements").getAll();await new Promise((n,i)=>{t.onsuccess=()=>{let i=t.result.reduce((e,t)=>(e[t.id]=t,e),{}),r=["# NIST SP 800-171 Rev 3 Report"];for(let t of e.families.elements)for(let n of(r.push("## ".concat(t.element_identifier,": ").concat(t.title)),e.requirements.byFamily[t.id]))for(let t of(r.push("### ".concat(n.element_identifier,": ").concat(n.title)),e.securityRequirements.byRequirements[n.id])){r.push("#### ".concat(t.subSubRequirement)),r.push("> ".concat(t.text));let e=i[t.subSubRequirement];e?(r.push("**".concat(a(e.status),"**")),r.push("".concat(e.description))):r.push("**".concat(a(),"**"))}let s=new Blob([r.join("\n\n")],{type:"text/plain"}),l=document.createElement("a");l.href=URL.createObjectURL(s),l.download="nist-sp-800-171-rev-3-report.md",document.body.appendChild(l),l.click(),document.body.removeChild(l),n(r)},t.onerror=()=>{i()}})},[n,r,u]=(0,o.useActionState)(t,null);return(0,i.jsx)("form",{action:r,children:(0,i.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",disabled:u,children:"Generate Markdown"})})},c=()=>(0,i.jsx)("nav",{className:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600",children:(0,i.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,i.jsx)("a",{href:"#",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,i.jsx)("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"NIST SP 800-171 Rev 3"})}),(0,i.jsxs)("div",{className:"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse",children:[(0,i.jsx)(u,{}),(0,i.jsx)("a",{href:"https://github.com/nealfennimore/nist-sp-800-171",className:"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent",children:(0,i.jsx)("svg",{className:"w-5 h-5 mx-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z","clip-rule":"evenodd"})})})]})]})})},9645:(e,t,n)=>{n.d(t,{n:()=>r,o:()=>l});var i=n(5155),r=function(e){return e.IMPLEMENTED="implemented",e.NOT_IMPLEMENTED="not-implemented",e.NOT_APPLICABLE="not-applicable",e.NEEDS_WORK="needs-work",e}({});let s=e=>{let{status:t}=e;switch(t){case"implemented":return(0,i.jsx)("span",{className:"text-xl text-green-600 mx-2",title:"Implemented",children:"\uD83D\uDFE2"});case"not-implemented":return(0,i.jsx)("span",{className:"text-xl text-red-600 mx-2",title:"Not implemented",children:"\uD83D\uDD34"});case"not-applicable":return(0,i.jsx)("span",{className:"text-xl text-black mx-2",title:"Not applicable",children:"⚫"});case"needs-work":return(0,i.jsx)("span",{className:"text-xl text-black mx-2",title:"Has work remaining",children:"\uD83D\uDFE1"});default:return(0,i.jsx)("span",{className:"text-xl text-gray-600 mx-2",title:"Not started",children:"⚪"})}},l=e=>{let{statuses:t,status:n}=e;return t?t.length&&t.includes("needs-work")?(0,i.jsx)(s,{status:"needs-work"}):t.length&&t.includes("not-implemented")?(0,i.jsx)(s,{status:"not-implemented"}):t.length&&t.every(e=>"not-applicable"===e)?(0,i.jsx)(s,{status:"not-applicable"}):t.length&&t.every(e=>["not-applicable","implemented"].includes(e))?(0,i.jsx)(s,{status:"implemented"}):(0,i.jsx)(s,{}):(0,i.jsx)(s,{status:n})}},1996:(e,t,n)=>{n.d(t,{default:()=>E,u2:()=>N});var i=n(5155),r=function(e){return e.Determination="determination",e.Discussion="discussion",e.Examine="examine",e.Family="family",e.Interview="interview",e.Odp="odp",e.OdpStatement="odp_statement",e.OdpType="odp_type",e.Reference="reference",e.Requirement="requirement",e.SecurityRequirement="security_requirement",e.Test="test",e.WithdrawReason="withdraw_reason",e}({});class s{static toFramework(e){return u(JSON.parse(e),p("Framework"),o)}static frameworkToJson(e){return JSON.stringify(u(e,p("Framework"),a),null,2)}}function l(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=function e(t){return Array.isArray(t)?2===t.length&&void 0===t[0]?"an optional ".concat(e(t[1])):"one of [".concat(t.map(t=>e(t)).join(", "),"]"):"object"==typeof t&&void 0!==t.literal?t.literal:typeof t}(e);throw Error("Invalid value".concat(n?' for key "'.concat(n,'"'):"").concat(i?" on ".concat(i):"",". Expected ").concat(r," but got ").concat(JSON.stringify(t)))}function o(e){if(void 0===e.jsonToJS){let t={};e.props.forEach(e=>t[e.json]={key:e.js,typ:e.typ}),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){let t={};e.props.forEach(e=>t[e.js]={key:e.json,typ:e.typ}),e.jsToJSON=t}return e.jsToJSON}function u(e,t,n){var i,r,s;let o,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if("any"===t)return e;if(null===t)return null===e?e:l(t,e,a,d);if(!1===t)return l(t,e,a,d);for(;"object"==typeof t&&void 0!==t.ref;)o=t.ref,t=f[t.ref];return Array.isArray(t)?-1!==(i=t).indexOf(e)?e:l(i.map(e=>c(e)),e,a,d):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){let i=e.length;for(let r=0;r<i;r++){let i=e[r];try{return u(t,i,n)}catch(e){}}return l(e,t,a,d)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?(r=t.arrayItems,Array.isArray(e)?e.map(e=>u(e,r,n)):l(c("array"),e,a,d)):t.hasOwnProperty("props")?function(e,t,i){if(null===i||"object"!=typeof i||Array.isArray(i))return l(c(o||"object"),i,a,d);let r={};return Object.getOwnPropertyNames(e).forEach(t=>{let s=e[t],l=Object.prototype.hasOwnProperty.call(i,t)?i[t]:void 0;r[s.key]=u(l,s.typ,n,t,o)}),Object.getOwnPropertyNames(i).forEach(s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=u(i[s],t,n,s,o))}),r}(n(t),t.additional,e):l(t,e,a,d):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;let t=new Date(e);return isNaN(t.valueOf())?l(c("Date"),e,a,d):t}(e):typeof(s=t)==typeof e?e:l(s,e,a,d)}function c(e){return{literal:e}}function d(e){return{arrayItems:e}}function m(e,t){return{props:e,additional:t}}function p(e){return{ref:e}}let f={Framework:m([{json:"response",js:"response",typ:p("Response")}],!1),Response:m([{json:"requestType",js:"requestType",typ:0},{json:"elements",js:"elements",typ:p("Elements")}],!1),Elements:m([{json:"documents",js:"documents",typ:d(p("Document"))},{json:"relationship_types",js:"relationship_types",typ:d(p("RelationshipType"))},{json:"elements",js:"elements",typ:d(p("Element"))},{json:"relationships",js:"relationships",typ:d(p("Relationship"))}],!1),Document:m([{json:"doc_identifier",js:"doc_identifier",typ:p("DocIdentifier")},{json:"name",js:"name",typ:""},{json:"version",js:"version",typ:""},{json:"website",js:"website",typ:""}],!1),Element:m([{json:"element_type",js:"element_type",typ:p("ElementType")},{json:"element_identifier",js:"element_identifier",typ:""},{json:"title",js:"title",typ:""},{json:"text",js:"text",typ:""},{json:"doc_identifier",js:"doc_identifier",typ:p("DocIdentifier")}],!1),RelationshipType:m([{json:"relationship_identifier",js:"relationship_identifier",typ:p("RelationshipIdentifier")},{json:"description",js:"description",typ:""}],!1),Relationship:m([{json:"source_element_identifier",js:"source_element_identifier",typ:""},{json:"source_doc_identifier",js:"source_doc_identifier",typ:p("DocIdentifier")},{json:"dest_element_identifier",js:"dest_element_identifier",typ:""},{json:"dest_doc_identifier",js:"dest_doc_identifier",typ:p("DocIdentifier")},{json:"relationship_identifier",js:"relationship_identifier",typ:p("RelationshipIdentifier")},{json:"provenance_doc_identifier",js:"provenance_doc_identifier",typ:p("DocIdentifier")}],!1),DocIdentifier:["SP_800_171_3_0_0"],ElementType:["determination","discussion","examine","family","interview","odp","odp_statement","odp_type","reference","requirement","security_requirement","test","withdraw_reason"],RelationshipIdentifier:["addressed_by","external_reference","incorporated_into","projection"]},y=async()=>{let e=await fetch("https://csrc.nist.gov/extensions/nudp/services/json/nudp/framework/version/sp_800_171_3_0_0/export/json?element=all");return s.toFramework(await e.text())},h=e=>{switch(e.element_type){case"requirement":return e.element_identifier.slice(0,5);case"security_requirement":return e.element_identifier.slice(3,8);case"discussion":return e.element_identifier.slice(2,7);default:return e.element_identifier}},b=e=>{switch(e.element_type){case"requirement":default:return e.element_identifier;case"security_requirement":return e.element_identifier.slice(3,11);case"discussion":return e.element_identifier.slice(2);case"withdraw_reason":return e.element_identifier.slice(3)}},_=e=>"security_requirement"===e.element_type?e.element_identifier.slice(3,13):e.element_identifier,j=e=>"security_requirement"===e.element_type?e.element_identifier.slice(3):e.element_identifier;class x{get element_identifier(){return this.element.element_identifier}get element_type(){return this.element.element_type}get id(){return this.element_identifier}get title(){return this.element.title}get text(){return this.element.text}get type(){return this.element_type}get doc_identifier(){return this.element.doc_identifier}get family(){return h(this.element)}get requirement(){return b(this.element)}get subRequirement(){return _(this.element)}get subSubRequirement(){return j(this.element)}static fromElement(e){return new x(e)}constructor(e){this.element=e,Object.freeze(this)}}class w{static fromElements(e,t,n){let i=e.filter(e=>e.element.element_type===t);return n&&(i=i.filter(n)),i=i.sort((e,t)=>w.sortById(e.element,t.element)),new w(i)}constructor(e){for(let t of(this.byId={},this.byFamily={},this.byRequirements={},this.bySubRequirements={},this.bySubSubRequirements={},this.elements=e,this.elements))this.byId[t.element_identifier]=t,this.byFamily[t.family]||(this.byFamily[t.family]=[]),this.byFamily[t.family].push(t),this.byRequirements[t.requirement]||(this.byRequirements[t.requirement]=[]),this.byRequirements[t.requirement].push(t),this.bySubRequirements[t.subRequirement]||(this.bySubRequirements[t.subRequirement]=[]),this.bySubRequirements[t.subRequirement].push(t),this.bySubSubRequirements[t.subSubRequirement]||(this.bySubSubRequirements[t.subSubRequirement]=[]),this.bySubSubRequirements[t.subSubRequirement].push(t);Object.freeze(this)}}w.sortById=(e,t)=>e.element_identifier<t.element_identifier?-1:e.element_identifier>t.element_identifier?1:0;class v{static async init(){return new v(await y())}constructor(e){this.framework=e,this.elements=e.response.elements.elements.map(x.fromElement),this.withdrawReason=w.fromElements(this.elements,r.WithdrawReason),this.families=w.fromElements(this.elements,r.Family),this.requirements=w.fromElements(this.elements,r.Requirement,e=>!this.withdrawReason.byRequirements[e.element_identifier]),this.securityRequirements=w.fromElements(this.elements,r.SecurityRequirement,e=>!!e.text),this.discussions=w.fromElements(this.elements,r.Discussion),Object.freeze(this)}}var q=n(2115);let R=(0,q.createContext)(null);function g(e){let{children:t,value:n}=e;return(0,i.jsx)(R.Provider,{value:n,children:t})}function N(){return(0,q.use)(function(){let e=(0,q.useContext)(R);if(!e)throw Error("useManifestContext must be used within a ManifestProvider");return e}())}function E(e){let{children:t}=e,n=v.init();return(0,i.jsx)(g,{value:n,children:t})}},3272:(e,t,n)=>{n.d(t,{x:()=>l});let i=Promise.reject("No IndexedDB available");{var r,s;let e=null===(s=window)||void 0===s?void 0:null===(r=s.indexedDB)||void 0===r?void 0:r.open("800_171_r3",1);i=new Promise((t,n)=>{e.onerror=e=>{console.error("Why didn't you allow my web app to use IndexedDB?!"),n(e)},e.onsuccess=e=>{var n;t(null===(n=e.target)||void 0===n?void 0:n.result)},e.onupgradeneeded=function(e){var t;let n=null===(t=e.target)||void 0===t?void 0:t.result,i=n.createObjectStore("security_requirements",{keyPath:"id"});i.createIndex("status","status",{unique:!1}),i.createIndex("description","description",{unique:!1}),n.createObjectStore("requirements",{keyPath:"id"}).createIndex("security_requirements","security_requirements",{unique:!1})}})}let l=i}}]);