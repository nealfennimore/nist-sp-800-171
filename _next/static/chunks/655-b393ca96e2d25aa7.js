"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{4475:(e,t,n)=>{n.d(t,{B:()=>l});var i=n(5155),r=n(1996),s=n(7396);let l=e=>{var t,n,l;let{familyId:a,requirementId:o}=e,u=(0,r.u2)(),c=[{href:"/r3",text:"Families"}];if(a){let e=null==u?void 0:null===(t=u.families)||void 0===t?void 0:t.byId[a];c.push({href:"/r3/family/".concat(a),text:"".concat(e.element_identifier,": ").concat(e.title)})}else if(o){let e=null==u?void 0:null===(n=u.requirements)||void 0===n?void 0:n.byId[o],t=null==u?void 0:null===(l=u.families)||void 0===l?void 0:l.byId[e.family];c.push({href:"/r3/family/".concat(e.family),text:"".concat(t.element_identifier,": ").concat(t.title)}),c.push({href:"/r3/requirement/".concat(o),text:"".concat(e.element_identifier,": ").concat(e.title),disabled:!0})}return(0,i.jsx)("aside",{children:c.map((e,t)=>(0,i.jsxs)("span",{children:[(0,i.jsx)(s.default,{className:"text-sm text-gray-600",href:e.href,"aria-disabled":e.disabled,tabIndex:60,children:e.text}),t<c.length-1&&(0,i.jsx)("span",{className:"text-sm mx-2",children:" > "})]},t))})}},3897:(e,t,n)=>{n.d(t,{Navigation:()=>p});var i=n(5155),r=n(2115),s=n(3272);let l=()=>{let e=async(e,t)=>await new Promise(async e=>{try{if(!window.confirm("Clear the current database. Continue?"))return;await s.Iq.securityRequirements.clear(),await s.Iq.requirements.clear(),e(null)}finally{window.location.reload()}}),[t,n,l]=(0,r.useActionState)(e,null);return(0,i.jsx)("form",{action:n,children:(0,i.jsx)("button",{type:"submit",className:"block px-4 py-2 text-sm text-gray-700 w-full text-left",disabled:l,tabIndex:-1,children:"Reset Database"})})},a=()=>{let e=async()=>{let e={securityRequirements:(await s.Iq.securityRequirements.getAll()).filter(e=>!!(e.status||e.description)),version:s.Iq.version},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=document.createElement("a");return n.href=URL.createObjectURL(t),n.download="nist-sp-800-171-rev-3-export.json",document.body.appendChild(n),n.click(),document.body.removeChild(n),e},[t,n,l]=(0,r.useActionState)(e,null);return(0,i.jsx)("form",{action:n,children:(0,i.jsx)("button",{type:"submit",className:"block px-4 py-2 text-sm text-gray-700 w-full text-left",disabled:l,tabIndex:-1,children:"Export Database"})})},o=()=>{let e=(0,r.useRef)(null),t=async(e,t)=>{try{return await new Promise(async(e,n)=>{let i=t.get("file");if(i){let t=new FileReader;t.onload=async t=>{var n;let i=JSON.parse(null==t?void 0:null===(n=t.target)||void 0===n?void 0:n.result);if(i.version!==s.Iq.version)throw Error("Database version mismatch");if(!window.confirm("Importing will overwrite the current database. Continue?"))return;await s.Iq.securityRequirements.clear(),await s.Iq.requirements.clear();let r={};for(let e of i.securityRequirements){let t=e.id.slice(0,8);await s.Iq.securityRequirements.put(e),r[t]||(r[t]={id:t,bySecurityRequirementId:{}}),r[t].bySecurityRequirementId[e.id]=e.status}for(let e of Object.values(r))await s.Iq.requirements.put(e);e(i)},t.readAsText(i)}})}finally{window.location.reload()}},[n,l,a]=(0,r.useActionState)(t,null);return(0,i.jsxs)("form",{action:l,children:[(0,i.jsx)("input",{id:"file",name:"file",type:"file",accept:"application/json",ref:e,className:"hidden",onChange:e=>{var t,n,i,r;(null==e?void 0:null===(n=e.target)||void 0===n?void 0:null===(t=n.files)||void 0===t?void 0:t.length)&&(null==e||null===(r=e.target)||void 0===r||null===(i=r.form)||void 0===i||i.requestSubmit())}}),(0,i.jsx)("button",{type:"button",className:"block px-4 py-2 text-sm text-gray-700 w-full text-left",disabled:a,tabIndex:-1,onClick:()=>{var t;null===(t=e.current)||void 0===t||t.click()},children:"Import Database"})]})};var u=n(9645),c=n(1996);let d=e=>{switch(e){case u.n.IMPLEMENTED:return"\uD83D\uDFE2 Implemented";case u.n.NOT_IMPLEMENTED:return"\uD83D\uDD34 Not Implemented";case u.n.NOT_APPLICABLE:return"⚫ Not Applicable";default:return"⚪ Unknown"}},m=()=>{let e=(0,c.u2)(),t=async()=>{let t=(await s.Iq.securityRequirements.getAll()).reduce((e,t)=>(e[t.id]=t,e),{}),n=["# NIST SP 800-171 Rev 3 Report"];for(let i of e.families.elements)for(let r of(n.push("## ".concat(i.element_identifier,": ").concat(i.title)),e.requirements.byFamily[i.id]))for(let i of(n.push("### ".concat(r.element_identifier,": ").concat(r.title)),e.securityRequirements.byRequirements[r.id])){n.push("#### ".concat(i.subSubRequirement)),n.push("> ".concat(i.text));let e=t[i.subSubRequirement];e?(n.push("**".concat(d(e.status),"**")),n.push("".concat(e.description))):n.push("**".concat(d()," [").concat(i.subSubRequirement,"](").concat(window.location.origin,"/r3/requirement/").concat(i.requirement,"#").concat(i.subSubRequirement,")**"))}let i=new Blob([n.join("\n\n")],{type:"text/plain"}),r=document.createElement("a");return r.href=URL.createObjectURL(i),r.download="nist-sp-800-171-rev-3-report.md",document.body.appendChild(r),r.click(),document.body.removeChild(r),n},[n,l,a]=(0,r.useActionState)(t,null);return(0,i.jsx)("form",{action:l,children:(0,i.jsx)("button",{type:"submit",className:"block px-4 py-2 text-sm text-gray-700 w-full text-left",disabled:a,tabIndex:-1,children:"Generate Report"})})},p=()=>{let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(null),s=(0,r.useMemo)(()=>e=>{"Escape"===e.key&&t(!1)},[]),u=(0,r.useMemo)(()=>e=>{var i;null!==(i=n.current)&&void 0!==i&&i.contains(e.target)||t(!1)},[]);return(0,r.useEffect)(()=>(e?(document.addEventListener("keydown",s),document.addEventListener("click",u)):(document.removeEventListener("keydown",s),document.removeEventListener("click",u)),()=>{document.removeEventListener("keydown",s),document.removeEventListener("click",u)}),[e]),(0,i.jsx)("nav",{className:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600",children:(0,i.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,i.jsx)("a",{href:"/",className:"flex items-center space-x-3 rtl:space-x-reverse",tabIndex:100,children:(0,i.jsx)("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"NIST SP 800-171 Rev 3"})}),(0,i.jsx)("div",{className:"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse",children:(0,i.jsxs)("div",{className:"relative inline-block text-left",children:[(0,i.jsx)("div",{children:(0,i.jsx)("button",{type:"button",className:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm",id:"menu-button","aria-expanded":"true","aria-haspopup":"true",onClick:()=>t(!e),children:(0,i.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true","data-slot":"icon",children:[(0,i.jsx)("rect",{width:"30",height:"3"}),(0,i.jsx)("rect",{y:"9",width:"30",height:"3"}),(0,i.jsx)("rect",{y:"18",width:"30",height:"3"})]})})}),e&&(0,i.jsxs)("div",{className:"absolute top-10 right-0 z-100 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none divide-y divide-gray-100",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabIndex:-1,onSubmit:()=>t(!1),onKeyUp:()=>t(!1),ref:n,children:[(0,i.jsx)("div",{className:"py-1",role:"none",children:(0,i.jsx)(m,{})}),(0,i.jsxs)("div",{className:"py-1",role:"none",children:[(0,i.jsx)(a,{}),(0,i.jsx)(o,{})]}),(0,i.jsx)("div",{className:"py-1",role:"none",children:(0,i.jsx)(l,{})}),(0,i.jsx)("div",{className:"py-1",role:"none",children:(0,i.jsx)("a",{href:"https://github.com/nealfennimore/nist-sp-800-171",className:"block px-4 py-2 text-sm text-gray-700 flex flex-row",tabIndex:100,children:(0,i.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})})})})]})]})})]})})}},9645:(e,t,n)=>{n.d(t,{n:()=>r,o:()=>l});var i=n(5155),r=function(e){return e.IMPLEMENTED="implemented",e.NOT_IMPLEMENTED="not-implemented",e.NOT_APPLICABLE="not-applicable",e.PARTIALLY_IMPLEMENTED="partially-implemented",e.NOT_STARTED="not-started",e.NEEDS_WORK="needs-work",e._NOT_STARTED_DEFAULT="",e}({});let s=e=>{let{status:t}=e;switch(t){case"implemented":return(0,i.jsx)("span",{className:"text-xl text-green-600 mx-2",title:"Implemented",children:"\uD83D\uDFE2"});case"not-implemented":return(0,i.jsx)("span",{className:"text-xl text-red-600 mx-2",title:"Not implemented",children:"\uD83D\uDD34"});case"not-applicable":return(0,i.jsx)("span",{className:"text-xl text-black mx-2",title:"Not applicable",children:"⚫"});case"needs-work":return(0,i.jsx)("span",{className:"text-xl text-black mx-2",title:"Has work remaining",children:"\uD83D\uDEA7"});case"partially-implemented":return(0,i.jsx)("span",{className:"text-xl text-black mx-2",title:"Partially implemented",children:"\uD83D\uDFE1"});default:return(0,i.jsx)("span",{className:"text-xl text-gray-600 mx-2",title:"Not started",children:"⚪"})}},l=e=>{let{statuses:t,status:n}=e;if(n)return(0,i.jsx)(s,{status:n});if(null==t?void 0:t.length){if(t.includes("needs-work")||t.includes("not-started")&&!t.every(e=>"not-started"===e))return(0,i.jsx)(s,{status:"needs-work"});if(t.some(e=>"implemented"===e)&&t.some(e=>"not-implemented"===e))return t.includes("not-started")||t.includes("")?(0,i.jsx)(s,{status:"needs-work"}):(0,i.jsx)(s,{status:"partially-implemented"});if(t.includes("not-implemented"))return(0,i.jsx)(s,{status:"not-implemented"});if(t.every(e=>"not-applicable"===e))return(0,i.jsx)(s,{status:"not-applicable"});if(t.every(e=>["not-applicable","implemented"].includes(e)))return(0,i.jsx)(s,{status:"implemented"})}return(0,i.jsx)(s,{})}},1996:(e,t,n)=>{let i;n.d(t,{default:()=>N,u2:()=>I});var r=n(5155),s=function(e){return e.Determination="determination",e.Discussion="discussion",e.Examine="examine",e.Family="family",e.Interview="interview",e.Odp="odp",e.OdpStatement="odp_statement",e.OdpType="odp_type",e.Reference="reference",e.Requirement="requirement",e.SecurityRequirement="security_requirement",e.Test="test",e.WithdrawReason="withdraw_reason",e}({});class l{static toFramework(e){return c(JSON.parse(e),f("Framework"),o)}static frameworkToJson(e){return JSON.stringify(c(e,f("Framework"),u),null,2)}}function a(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=function e(t){return Array.isArray(t)?2===t.length&&void 0===t[0]?"an optional ".concat(e(t[1])):"one of [".concat(t.map(t=>e(t)).join(", "),"]"):"object"==typeof t&&void 0!==t.literal?t.literal:typeof t}(e);throw Error("Invalid value".concat(n?' for key "'.concat(n,'"'):"").concat(i?" on ".concat(i):"",". Expected ").concat(r," but got ").concat(JSON.stringify(t)))}function o(e){if(void 0===e.jsonToJS){let t={};e.props.forEach(e=>t[e.json]={key:e.js,typ:e.typ}),e.jsonToJS=t}return e.jsonToJS}function u(e){if(void 0===e.jsToJSON){let t={};e.props.forEach(e=>t[e.js]={key:e.json,typ:e.typ}),e.jsToJSON=t}return e.jsToJSON}function c(e,t,n){var i,r,s;let l,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if("any"===t)return e;if(null===t)return null===e?e:a(t,e,o,u);if(!1===t)return a(t,e,o,u);for(;"object"==typeof t&&void 0!==t.ref;)l=t.ref,t=y[t.ref];return Array.isArray(t)?-1!==(i=t).indexOf(e)?e:a(i.map(e=>d(e)),e,o,u):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){let i=e.length;for(let r=0;r<i;r++){let i=e[r];try{return c(t,i,n)}catch(e){}}return a(e,t,o,u)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?(r=t.arrayItems,Array.isArray(e)?e.map(e=>c(e,r,n)):a(d("array"),e,o,u)):t.hasOwnProperty("props")?function(e,t,i){if(null===i||"object"!=typeof i||Array.isArray(i))return a(d(l||"object"),i,o,u);let r={};return Object.getOwnPropertyNames(e).forEach(t=>{let s=e[t],a=Object.prototype.hasOwnProperty.call(i,t)?i[t]:void 0;r[s.key]=c(a,s.typ,n,t,l)}),Object.getOwnPropertyNames(i).forEach(s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=c(i[s],t,n,s,l))}),r}(n(t),t.additional,e):a(t,e,o,u):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;let t=new Date(e);return isNaN(t.valueOf())?a(d("Date"),e,o,u):t}(e):typeof(s=t)==typeof e?e:a(s,e,o,u)}function d(e){return{literal:e}}function m(e){return{arrayItems:e}}function p(e,t){return{props:e,additional:t}}function f(e){return{ref:e}}let y={Framework:p([{json:"response",js:"response",typ:f("Response")}],!1),Response:p([{json:"requestType",js:"requestType",typ:0},{json:"elements",js:"elements",typ:f("Elements")}],!1),Elements:p([{json:"documents",js:"documents",typ:m(f("Document"))},{json:"relationship_types",js:"relationship_types",typ:m(f("RelationshipType"))},{json:"elements",js:"elements",typ:m(f("Element"))},{json:"relationships",js:"relationships",typ:m(f("Relationship"))}],!1),Document:p([{json:"doc_identifier",js:"doc_identifier",typ:f("DocIdentifier")},{json:"name",js:"name",typ:""},{json:"version",js:"version",typ:""},{json:"website",js:"website",typ:""}],!1),Element:p([{json:"element_type",js:"element_type",typ:f("ElementType")},{json:"element_identifier",js:"element_identifier",typ:""},{json:"title",js:"title",typ:""},{json:"text",js:"text",typ:""},{json:"doc_identifier",js:"doc_identifier",typ:f("DocIdentifier")}],!1),RelationshipType:p([{json:"relationship_identifier",js:"relationship_identifier",typ:f("RelationshipIdentifier")},{json:"description",js:"description",typ:""}],!1),Relationship:p([{json:"source_element_identifier",js:"source_element_identifier",typ:""},{json:"source_doc_identifier",js:"source_doc_identifier",typ:f("DocIdentifier")},{json:"dest_element_identifier",js:"dest_element_identifier",typ:""},{json:"dest_doc_identifier",js:"dest_doc_identifier",typ:f("DocIdentifier")},{json:"relationship_identifier",js:"relationship_identifier",typ:f("RelationshipIdentifier")},{json:"provenance_doc_identifier",js:"provenance_doc_identifier",typ:f("DocIdentifier")}],!1),DocIdentifier:["SP_800_171_3_0_0"],ElementType:["determination","discussion","examine","family","interview","odp","odp_statement","odp_type","reference","requirement","security_requirement","test","withdraw_reason"],RelationshipIdentifier:["addressed_by","external_reference","incorporated_into","projection"]},h=async()=>{if(i)return i;let e=await fetch("".concat("https://nist-sp-800-171.neal.codes","/data/sp_800_171_3_0_0/framework.json"));return i=l.toFramework(await e.text())},x=e=>{switch(e.element_type){case"requirement":return e.element_identifier.slice(0,5);case"security_requirement":return e.element_identifier.slice(3,8);case"discussion":return e.element_identifier.slice(2,7);default:return e.element_identifier}},b=e=>{switch(e.element_type){case"requirement":default:return e.element_identifier;case"security_requirement":return e.element_identifier.slice(3,11);case"discussion":return e.element_identifier.slice(2);case"withdraw_reason":return e.element_identifier.slice(3)}},j=e=>"security_requirement"===e.element_type?e.element_identifier.slice(3,13):e.element_identifier,w=e=>"security_requirement"===e.element_type?e.element_identifier.slice(3):e.element_identifier;class v{get element_identifier(){return this.element.element_identifier}get element_type(){return this.element.element_type}get id(){return this.element_identifier}get title(){return this.element.title}get text(){return this.element.text}get type(){return this.element_type}get doc_identifier(){return this.element.doc_identifier}get family(){return x(this.element)}get requirement(){return b(this.element)}get subRequirement(){return j(this.element)}get subSubRequirement(){return w(this.element)}static fromElement(e){return new v(e)}constructor(e){this.element=e,Object.freeze(this)}}class _{static fromElements(e,t,n){let i=e.filter(e=>e.element.element_type===t);return n&&(i=i.filter(n)),i=i.sort((e,t)=>_.sortById(e.element,t.element)),new _(i)}constructor(e){for(let t of(this.byId={},this.byFamily={},this.byRequirements={},this.bySubRequirements={},this.bySubSubRequirements={},this.elements=e,this.elements))this.byId[t.element_identifier]=t,this.byFamily[t.family]||(this.byFamily[t.family]=[]),this.byFamily[t.family].push(t),this.byRequirements[t.requirement]||(this.byRequirements[t.requirement]=[]),this.byRequirements[t.requirement].push(t),this.bySubRequirements[t.subRequirement]||(this.bySubRequirements[t.subRequirement]=[]),this.bySubRequirements[t.subRequirement].push(t),this.bySubSubRequirements[t.subSubRequirement]||(this.bySubSubRequirements[t.subSubRequirement]=[]),this.bySubSubRequirements[t.subSubRequirement].push(t);Object.freeze(this)}}_.sortById=(e,t)=>e.element_identifier<t.element_identifier?-1:e.element_identifier>t.element_identifier?1:0;class q{static async init(){return new q(await h())}constructor(e){this.framework=e,this.elements=e.response.elements.elements.map(v.fromElement),this.withdrawReason=_.fromElements(this.elements,s.WithdrawReason),this.families=_.fromElements(this.elements,s.Family),this.requirements=_.fromElements(this.elements,s.Requirement,e=>!this.withdrawReason.byRequirements[e.element_identifier]),this.securityRequirements=_.fromElements(this.elements,s.SecurityRequirement,e=>!!e.text),this.discussions=_.fromElements(this.elements,s.Discussion),Object.freeze(this)}}var R=n(2115);let g=(0,R.createContext)(null);function E(e){let{children:t,value:n}=e;return(0,r.jsx)(g.Provider,{value:n,children:t})}function I(){return(0,R.use)(function(){let e=(0,R.useContext)(g);if(!e)throw Error("useManifestContext must be used within a ManifestProvider");return e}())}function N(e){let{children:t}=e,n=q.init();return(0,r.jsx)(E,{value:n,children:t})}},3272:(e,t,n)=>{let i;n.d(t,{Iq:()=>p});var r,s,l=function(e){return e.SECURITY_REQUIREMENTS="security_requirements",e.REQUIREMENTS="requirements",e}(l||{});{let e=null===(s=window)||void 0===s?void 0:null===(r=s.indexedDB)||void 0===r?void 0:r.open("800_171_r3",1);i=new Promise((t,n)=>{e.onerror=e=>{console.error("Can't use IndexDB"),n(e)},e.onsuccess=e=>{var n;t(null===(n=e.target)||void 0===n?void 0:n.result)},e.onupgradeneeded=function(e){var t;let n=null===(t=e.target)||void 0===t?void 0:t.result,i=n.createObjectStore("security_requirements",{keyPath:"id"});i.createIndex("status","status",{unique:!1}),i.createIndex("description","description",{unique:!1}),n.createObjectStore("requirements",{keyPath:"id"}).createIndex("security_requirements","security_requirements",{unique:!1})}})}var a=function(e){return e.READONLY="readonly",e.READWRITE="readwrite",e}(a||{});let o=async(e,t)=>(await (i||Promise.reject("Can't use IndexDB"))).transaction(e,t).objectStore(e),u=e=>async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0,i=(await o(e,"readonly")).getAll(t,n);return new Promise((e,t)=>{i.onsuccess=()=>{e(i.result)},i.onerror=()=>{t()}})},c=e=>async t=>{let n=await o(e,"readwrite");return new Promise((e,i)=>{let r=n.put(t);r.onsuccess=()=>{e(r.result)},r.onerror=()=>{i()}})},d=e=>async()=>{let t=await o(e,"readwrite");return new Promise((e,n)=>{let i=t.clear();i.onsuccess=()=>{e(!0)},i.onerror=()=>{n(!1)}})};class m{constructor(e){this.table=e,this.getAll=u(e),this.put=c(e),this.clear=d(e),this.store=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"readonly";return o(e,t)}}}class p{}p.requirements=new m("requirements"),p.securityRequirements=new m("security_requirements"),p.version=1}}]);