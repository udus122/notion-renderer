const i=t=>{let e;const r={};return Object.entries(t).forEach(([s,c])=>{l(c)?e=c:r[s]=c}),{title:e,other:r}},f=t=>{if(t.object==="page"){const{title:e}=i(t.properties);return(e==null?void 0:e.title)??[]}return t.object==="database"?t.title:[]},l=t=>t.type==="title",d=(t,e)=>{const r=Object.keys(t).find(s=>t[s].id===e);if(r){const s=t[r];return{[r]:s}}},u=(t,e)=>{const r=t[e];if(r)return{[e]:r}},y=(t,e)=>e.reduce((s,c)=>{const n=u(t,c);if(n)return{...s,...n};const o=d(t,c);return o?{...s,...o}:{...s}},{});export{y as a,f as e,l as i,i as s};
//# sourceMappingURL=utils-957ad31c.js.map
