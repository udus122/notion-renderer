const s=t=>{let e;const i={};return Object.entries(t).forEach(([o,r])=>{n(r)?e=r:i[o]=r}),{title:e,other:i}},c=t=>{if(t.object==="page"){const{title:e}=s(t.properties);return(e==null?void 0:e.title)??[]}return t.object==="database"?t.title:[]},n=t=>t.type==="title";export{c as e,s};
//# sourceMappingURL=utils-15c71b6e.js.map
