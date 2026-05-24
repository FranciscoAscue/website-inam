import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as g}from"./index.umIYQD0e.js";import{c as a}from"./createLucideIcon.CUt--Wto.js";import{P as b}from"./package.3tk6-z7I.js";import{C as i}from"./circle-check.CIqnO7da.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],y=a("car",u);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],v=a("circle-alert",j);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],f=a("heart",N);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],w=a("laptop",k);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],C=a("lightbulb",_);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],A=a("shopping-cart",M);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],I=a("utensils-crossed",$),x={ShoppingCart:A,Heart:f,Car:y,Laptop:w,Package:b,UtensilsCrossed:I};function U({useCases:l}){const c=Array.from(new Set(l.map(s=>s.industry))),[n,h]=g.useState(c[0]??""),t=l.find(s=>s.industry===n)??l[0];if(!t)return null;const o=x[t.iconName];return e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"mb-8 flex flex-wrap gap-2 border-b-2 border-gray-200 pb-2",children:c.map(s=>{const r=l.find(p=>p.industry===s),d=r?x[r.iconName]:null,m=s===n;return e.jsxs("button",{type:"button",onClick:()=>h(s),className:`flex items-center gap-2 border-b-2 px-6 py-3 text-sm font-semibold transition-all duration-200 ${m?"border-blue-600 text-blue-600":"border-transparent text-gray-600 hover:border-blue-300 hover:text-blue-600"}`,children:[d?e.jsx(d,{className:"h-4 w-4"}):null,s]},s)})}),e.jsx("div",{className:"animate-fadeIn space-y-6",children:e.jsx("div",{className:"group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl",children:e.jsxs("div",{className:"grid grid-cols-1 gap-0 lg:grid-cols-12",children:[e.jsxs("div",{className:"relative h-64 overflow-hidden lg:col-span-5 lg:h-auto",children:[e.jsx("img",{src:t.image.src,alt:t.industry,className:"h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent"}),e.jsx("div",{className:"absolute left-6 top-6",children:e.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-xl bg-white/95 shadow-lg backdrop-blur-sm",children:o?e.jsx(o,{className:"h-8 w-8 text-blue-600"}):null})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-white",children:e.jsx("h2",{className:"mb-2 text-2xl font-bold md:text-3xl",children:t.industry})})]}),e.jsx("div",{className:"p-8 lg:col-span-7 lg:p-10",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"rounded-r-lg border-l-4 border-red-500 bg-red-50 p-5",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(v,{className:"mt-0.5 h-6 w-6 shrink-0 text-red-600"}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-bold text-red-900",children:"Challenge"}),e.jsx("p",{className:"leading-relaxed text-gray-700",children:t.challenge})]})]})}),e.jsx("div",{className:"rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-5",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(C,{className:"mt-0.5 h-6 w-6 shrink-0 text-blue-600"}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-lg font-bold text-blue-900",children:"Solution"}),e.jsx("p",{className:"leading-relaxed text-gray-700",children:t.solution})]})]})}),e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-4 flex items-center gap-2 text-lg font-bold text-gray-900",children:[e.jsx(i,{className:"h-5 w-5 text-green-600"}),"Results"]}),e.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:t.results.map((s,r)=>e.jsxs("div",{className:"flex items-start gap-3 rounded-lg border border-green-100 bg-green-50 p-4",children:[e.jsx(i,{className:"mt-0.5 h-5 w-5 shrink-0 text-green-600"}),e.jsx("span",{className:"text-sm font-medium leading-relaxed text-gray-800",children:s})]},r))})]})]})})]})})})]})}export{U as default};
