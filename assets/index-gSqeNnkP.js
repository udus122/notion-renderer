const l=t=>{const e=Object.values(t).find(n=>o(n))??{id:"",type:"title",title:[]},c=Object.fromEntries(Object.entries(t).filter(([n,s])=>!o(s)));return{title:e,other:c}},f=t=>{if(t.object==="page"){const{title:e}=l(t.properties);return(e==null?void 0:e.title)??[]}return t.object==="database"?t.title:[]},o=t=>t.type==="title",d=(t,e)=>{const c=Object.keys(t).find(n=>t[n].id===e);if(c){const n=t[c];return{[c]:n}}},u=(t,e)=>{const c=t[e];if(c)return{[e]:c}},y=(t,e)=>e.reduce((n,s)=>{const r=u(t,s);if(r)return{...n,...r};const i=d(t,s);return i?{...n,...i}:{...n}},{});export{y as a,f as e,o as i,l as s};