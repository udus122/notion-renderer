import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{a}from"./hooks-vxCG-i9n.js";const c=({block:o})=>{const n=a(),s=n==null?void 0:n.filter(t=>t!==null&&(t.type==="heading_1"||t.type==="heading_2"||t.type==="heading_3"));return e.jsx("div",{id:o.id,className:`notion-block notion-table-of-contents notion-color-${o.table_of_contents.color}`,children:s&&s.map(t=>e.jsx("div",{className:"notion-table-of-contents-item",children:e.jsx("div",{className:`notion-table-of-contents-item-${t.type}`,children:e.jsx("a",{href:`#${t.id}`,children:t[t.type].rich_text.map(i=>i.plain_text)})})},t.id))})};export{c as T};