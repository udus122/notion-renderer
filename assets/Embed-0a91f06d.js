import{j as t}from"./jsx-runtime-ffb262ed.js";import{r}from"./index-76fb7be0.js";import{R as o}from"./RichText-5e735421.js";const s=({block:e})=>(r.useEffect(()=>{const m=document.createElement("script");return m.src="https://platform.twitter.com/widgets.js",document.body.appendChild(m),()=>{document.body.removeChild(m)}},[]),e.embed.oembed?t.jsx("div",{className:"notion-embed",dangerouslySetInnerHTML:{__html:e.embed.oembed.type==="rich"?e.embed.oembed.html:""}}):t.jsxs("div",{id:e.id,className:"notion-embed",children:[t.jsx("iframe",{src:e.embed.url,title:"notion embed content"}),t.jsx("div",{className:"notion-caption notion-embed-caption",children:t.jsx(o,{richText:e.embed.caption})})]}));export{s as E};
//# sourceMappingURL=Embed-0a91f06d.js.map
