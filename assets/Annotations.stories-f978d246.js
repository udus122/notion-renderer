import{j as p}from"./jsx-runtime-ffb262ed.js";import{A as m}from"./Annotations-dd8c7303.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Bold-3140888d.js";import"./Color-d89d3d8a.js";import"./InlineCode-b9fb5af8.js";import"./Italic-ffb43458.js";import"./Strikethrough-f75249e3.js";import"./Underline-37bef177.js";const h="text",x={content:"rich text with all",link:{url:"https://example.com"}},u={bold:!0,italic:!0,strikethrough:!0,underline:!0,code:!0,color:"brown"},d="rich text with all",w=null,l={type:h,text:x,annotations:u,plain_text:d,href:w},O={title:"RichTexts/Annotations",component:m,tags:["autodocs"]},t={args:{richTextItem:l,children:"text with all annotation"}},e={args:{richTextItem:l,children:"text with all annotation with custom Bold(reset all style)",customAnnotationMapper:{bold:({children:c})=>p.jsx("span",{style:{all:"initial"},children:c})}}};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    richTextItem: (RichTextAnnotationObject as RichTextItemResponse),
    children: "text with all annotation"
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    richTextItem: (RichTextAnnotationObject as RichTextItemResponse),
    children: "text with all annotation with custom Bold(reset all style)",
    customAnnotationMapper: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bold: ({
        children
      }) => <span style={{
        all: "initial"
      }}>{children}</span>
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["Default","withCustomMapper"];export{t as Default,_ as __namedExportsOrder,O as default,e as withCustomMapper};
//# sourceMappingURL=Annotations.stories-f978d246.js.map
