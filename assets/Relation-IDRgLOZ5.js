import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{e as r}from"./utils-gSqeNnkP.js";import{R as s}from"./RichText-oWlvv9-1.js";import{I as l}from"./Icon-e4pLob1-.js";import{u as c}from"./hooks-vxCG-i9n.js";const a=({relationItem:e})=>{const t=e.page?e.page.icon:null,n=e.page?r(e.page):[];return i.jsxs("div",{className:"notion-relation-item",children:[i.jsx(l,{icon:t}),n.length===0?i.jsx("span",{children:"Anonymous"}):i.jsx(s,{richText:n})]})};try{a.displayName="RelationItem",a.__docgenInfo={description:"",displayName:"RelationItem",props:{relationItem:{defaultValue:null,description:"",name:"relationItem",required:!0,type:{name:"RelationItem"}}}}}catch{}const j=({propertyItem:e})=>{var n;const{Link:t}=c();return i.jsx("div",{id:e==null?void 0:e.id,className:"notion-property-item notion-relation",children:(n=e.relation)==null?void 0:n.map(o=>i.jsx(t,{prefix:"/",link:o.id,children:i.jsx(a,{relationItem:o},o.id)},o.id))})};export{j as R};
