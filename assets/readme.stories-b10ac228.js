import{M as l,d as s}from"./index-d105c2e7.js";import{j as e}from"./jsx-runtime-ffb262ed.js";import{u as c}from"./index-a1cf9e47.js";import"./iframe-f170c33b.js";import"../sb-preview/runtime.js";import"./index-7653c3a3.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-2ee68151.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const i=`![Notion Renderer](/assets/logo.png)

# Notion Renderer
![npm version](https://img.shields.io/npm/v/%40udus%2Fnotion-renderer) ![GitHub License](https://img.shields.io/github/license/udus122/notion-renderer) ![GitHub Repo stars](https://img.shields.io/github/stars/udus122/notion-renderer?style=social)


A fully customizable React renderer for the official Notion API.

> [!NOTE]
> Please note that this package is currently in alpha release.  
> Therefore, there may be significant changes to the API without prior notice.

## Example

- Storybook: https://udus122.github.io/notion-renderer/?path=/docs/renderer--docs

## Installation

\`\`\`bash
npm install @udus/notion-renderer@alpha
\`\`\`

## Usage

### Quick Start

First, fetch the blocks of the page you want to render using [\`fetchBlockList\`](https://github.com/udus122/notion-renderer/blob/alpha/src/libs/notion/blocks/blocks.ts#L104).  
Next, pass the fetched block list to the [\`BlockRenderer\`](https://github.com/udus122/notion-renderer/blob/alpha/src/components/Blocks/Renderer.tsx#L24).

If you are using Next.js, you can do it as shown in the sample code below.

\`\`\`typescript
import { BlockRenderer } from "@udus/notion-components/components";
import { fetchBlockList } from "@udus/notion-components/libs";

import type { InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps = async () => {
  const blocks = await fetchBlockList("YOUR_PAGE_ID");

  return {
    props: {
      blocks,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<Props> = ({ blocks }) => {
  return <BlockRenderer blocks={blocks} />;
};

export default Index;
\`\`\`

And you will need to import CSS styles like below.  
\`\`\`typescript
// Load the CSS to be used with the Notion Renderer.
import "@udus/notion-components/styles/globals.css";
// Load the CSS used for rendering equations
import "katex/dist/katex.min.css";
\`\`\`

Please set your Notion integration token as an environment variable named \`NOTION_TOKEN\`.

\`\`\`
.env
NOTION_TOKEN=secret_epO17gyx***********************************
\`\`\`

### Custom Component

You can render the page using a custom component instead of the default components, you can also create and use your own components.
Please see the example of creating custom components at the following link: https://github.com/udus122/notion-renderer/tree/alpha/src/components/Blocks/Custom

\`\`\`typescript
export default () => (
  <BlockRenderer
    blocks={blocks}
    blockMapper={
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3,
    } />
)
\`\`\`

#### Color

If you want to use dark mode, please set the theme to \`theme="dark"\` as follows.(\`theme="light"\` is default.)

\`\`\`typescript
export default () => (
  <BlockRenderer blocks={blocks} theme="dark" />
)
\`\`\`

If you want to change the color theme, please overwrite the CSS variables set to .notion-light or .notion-dark as follows. The default values are listed below.

\`\`\`css
:root {
  /* light-theme */
  --color-text-default: rgb(55 53 47);
  --color-bg-default: rgb(255 255 255);
  --color-pill-default: rgb(227 226 224 / 50%);
  --color-text-gray: rgb(120 119 116);
  --color-bg-gray: rgb(241 241 239);
  --color-pill-gray: rgb(227 226 224);
  --color-text-brown: rgb(159 107 83);
  --color-bg-brown: rgb(244 238 238);
  --color-pill-brown: rgb(238 224 218);
  --color-text-orange: rgb(217 115 13);
  --color-bg-orange: rgb(251 236 221);
  --color-pill-orange: rgb(250 222 201);
  --color-text-yellow: rgb(203 145 47);
  --color-bg-yellow: rgb(251 243 219);
  --color-pill-yellow: rgb(253 236 200);
  --color-text-green: rgb(68 131 97);
  --color-bg-green: rgb(237 243 236);
  --color-pill-green: rgb(219 237 219);
  --color-text-blue: rgb(51 126 169);
  --color-bg-blue: rgb(231 243 248);
  --color-pill-blue: rgb(211 229 239);
  --color-text-purple: rgb(144 101 176);
  --color-bg-purple: #eae4f2;
  --color-pill-purple: rgb(244 240 247 / 80%);
  --color-text-pink: rgb(193 76 138);
  --color-bg-pink: rgb(249 238 243 / 80%);
  --color-pill-pink: rgb(245 224 233);
  --color-text-red: rgb(212 76 71);
  --color-bg-red: rgb(253 235 236);
  --color-pill-red: rgb(255 226 221);

  /* dark-theme */
  .notion-dark {
    --color-text-default: rgb(255 255 255 / 81%);
    --color-bg-default: rgb(25 25 25);
    --color-pill-default: rgb(55 55 55);
    --color-text-gray: rgb(155 155 155);
    --color-bg-gray: rgb(47 47 47);
    --color-pill-gray: rgb(90 90 90);
    --color-text-brown: rgb(186 133 111);
    --color-bg-brown: rgb(74 50 40);
    --color-pill-brown: rgb(96 59 44);
    --color-text-orange: rgb(199 125 72);
    --color-bg-orange: rgb(92 59 35);
    --color-pill-orange: rgb(133 76 29);
    --color-text-yellow: rgb(202 152 73);
    --color-bg-yellow: rgb(86 67 40);
    --color-pill-yellow: rgb(137 99 42);
    --color-text-green: rgb(82 158 114);
    --color-bg-green: rgb(36 61 48);
    --color-pill-green: rgb(43 89 63);
    --color-text-blue: rgb(94 135 201);
    --color-bg-blue: rgb(20 58 78);
    --color-pill-blue: rgb(40 69 108);
    --color-text-purple: rgb(157 104 211);
    --color-bg-purple: rgb(60 45 73);
    --color-pill-purple: rgb(73 47 100);
    --color-text-pink: rgb(209 87 150);
    --color-bg-pink: rgb(78 44 60);
    --color-pill-pink: rgb(105 49 76);
    --color-text-red: rgb(223 84 82);
    --color-bg-red: rgb(82 46 42);
    --color-pill-red: rgb(110 54 48);
  }
    }
\`\`\`

## Supported Objects

### [Block](https://developers.notion.com/reference/block)

Most common block types are supported.

| Block Type                                                                                     | Supported | Mapper Field Name                    | HTML Tag                                                                       | Notes                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------- | --------- | ------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio                                                                                          | ✅         | \`audio\`                              | \`<audio>\`                                                                      |                                                                                                                                                                                                           |
| [Bookmark](https://developers.notion.com/reference/block#bookmark)                             | ✅         | \`bookmark\`                           | \`<div>\`                                                                        | When retrieving an object from the API, we use [@extractus/article-extractor](https://github.com/extractus/article-extractor) to obtain meta information of the site such as OGP images and descriptions. |
| [Breadcrumb](https://developers.notion.com/reference/block#breadcrumb)                         | ✅         | \`breadcrumb\`                         | \`<div>\`                                                                        | When retrieving an object from the API, we recursively obtain the parent page.                                                                                                                            |
| [Bulleted list item](https://developers.notion.com/reference/block#breadcrumb)                 | ✅         | \`bullted_list\`/\`bullted_list_item\`   | \`<ul>\`/\`<li>\`                                                                  |                                                                                                                                                                                                           |
| [Callout](https://developers.notion.com/reference/block#callout)                               | ✅         | \`callout\`                            | \`<div>\`                                                                        |                                                                                                                                                                                                           |
| [Child database](https://developers.notion.com/reference/block#child-database)                 | ✅         | \`child_database\`                     | \`<Link>\`                                                                       |                                                                                                                                                                                                           |
| [Child page](https://developers.notion.com/reference/block#child-page)                         | ✅         | \`child_page\`                         | \`<Link>\`                                                                       |                                                                                                                                                                                                           |
| [Code](https://developers.notion.com/reference/block#code)                                     | ✅         | \`code\`                               | \`<pre><code>\`                                                                  | By default, SyntaxHighlight is not included. If necessary, please create a custom component.                                                                                                              |
| [Column list and column](https://developers.notion.com/reference/block#column-list-and-column) | ✅         | \`column_list\`                        | \`<div>\`                                                                        |                                                                                                                                                                                                           |
| [Divider](https://developers.notion.com/reference/block#divider)                               | ✅         | \`divider\`                            | \`<hr>\`                                                                         |                                                                                                                                                                                                           |
| [Embed](https://developers.notion.com/reference/block#embed)                                   | ✅         | \`embed\`                              | passing the [oEmbed](https://oembed.com/) content to \`dangerouslySetInnerHTML\` | When retrieving an object from the API, we use [@extractus/oembed-extractor](https://github.com/extractus/oembed-extractor) to obtain the oEmbed content.                                                 |
| [Equation](https://developers.notion.com/reference/block#equation)                             | ✅         | \`equation\`                           | [katex](https://katex.org/)                                                    | In order to render properly, you need to import \`katex/dist/katex.min.css\`.                                                                                                                               |
| [File](https://developers.notion.com/reference/block#file)                                     | ✅         | \`file\`                               | \`<Link>\`                                                                       |                                                                                                                                                                                                           |
| [Heading1](https://developers.notion.com/reference/block#headings)                             | ✅         | \`heading_1\`                          | \`<h1>\`                                                                         |                                                                                                                                                                                                           |
| [Heading2](https://developers.notion.com/reference/block#headings)                             | ✅         | \`heading_2\`                          | \`<h2>\`                                                                         |                                                                                                                                                                                                           |
| [Heading3](https://developers.notion.com/reference/block#headings)                             | ✅         | \`heading_3\`                          | \`<h3>\`                                                                         |                                                                                                                                                                                                           |
| [Image](https://developers.notion.com/reference/block#image)                                   | ✅         | \`image\`                              | \`<img>\`                                                                        |                                                                                                                                                                                                           |
| [Link Preview](https://developers.notion.com/reference/block#link-preview)                     | ✅         | \`link_preview\`                       | \`<Link>\`                                                                       | When retrieving an object from the API, we use [@extractus/article-extractor](https://github.com/extractus/article-extractor) to obtain meta information of the site such as OGP images and descriptions. |
| Link To Page                                                                                   | ✅         | \`link_to_page\`                       | \`<Link>\`                                                                       |                                                                                                                                                                                                           |
| [Numbered lit item](https://developers.notion.com/reference/block#numbered-list-item)          | ✅         | \`numbered_list\`/\`numbered_list_item\` | \`<ol>\`/\`<li>\`                                                                  |                                                                                                                                                                                                           |
| [Paragraph](https://developers.notion.com/reference/block#paragraph)                           | ✅         | \`paragraph\`                          | \`<p>\`                                                                          |                                                                                                                                                                                                           |
| [PDF](https://developers.notion.com/reference/block#pdf)                                       | ✅         | \`pdf\`                                | \`<object type="application/pdf>\`                                               |                                                                                                                                                                                                           |
| [Quote](https://developers.notion.com/reference/block#quote)                                   | ✅         | \`quote\`                              | \`<blockquote>\`                                                                 |                                                                                                                                                                                                           |
| [Synced block](https://developers.notion.com/reference/block#synced-block)                     | ✅         | \`synced_block\`                       | \`<div>\`                                                                        |                                                                                                                                                                                                           |
| [Table](https://developers.notion.com/reference/block#table)                                   | ✅         | \`table\`                              | \`<table>\`                                                                      |                                                                                                                                                                                                           |
| [Table of contents](https://developers.notion.com/reference/block#table-of-contents)           | ✅         | \`table_of_contents\`                  | \`<div>\`                                                                        |                                                                                                                                                                                                           |
| [Template](https://developers.notion.com/reference/block#table-of-contents)                    | ❌         | \`template\`                           |                                                                                | Deprecated                                                                                                                                                                                                |
| [To do](https://developers.notion.com/reference/block#to-do)                                   | ✅         | \`to_do\`                              | \`<div>\`                                                                        |                                                                                                                                                                                                           |
| [Toggle Blocks](https://developers.notion.com/reference/block#toggle-blocks)                   | ✅         | \`toggle\`                             | \`<details><summary>\`                                                           |                                                                                                                                                                                                           |
| [Video](https://developers.notion.com/reference/block#video)                                   | ✅         | \`video\`                              | \`<video>\`                                                                      | YouTube is supported through the oEmbed API.                                                                                                                                                              |

#### [Rich text](https://developers.notion.com/reference/rich-text#rich-text-type-objects)

| Rich text Type                                                         | Supported | Mapper Field Name | HTML Tag                    | Notes                                                                       |
| ---------------------------------------------------------------------- | --------- | ----------------- | --------------------------- | --------------------------------------------------------------------------- |
| [Equation](https://developers.notion.com/reference/rich-text#equation) | ✅         | \`equation\`        | [katex](https://katex.org/) | In order to render properly, you need to import \`katex/dist/katex.min.css\`. |
| [Mention](https://developers.notion.com/reference/rich-text#mention)   | ✅         | \`mention\`         | \`<span>\`                    |                                                                             |
| [Text](https://developers.notion.com/reference/rich-text#text)         | ✅         | \`text\`            | \`<span>\`                    |                                                                             |


##### [Annotation](https://developers.notion.com/reference/rich-text#the-annotation-object)

| Annotation Type | Supported | Mapper Field Name | HTML Tag   | Notes |
| --------------- | --------- | ----------------- | ---------- | ----- |
| Bold            | ✅         | \`bold\`            | \`<strong>\` |       |
| Italic          | ✅         | \`italic\`          | \`<em>\`     |       |
| Strikethrough   | ✅         | \`strikethrough\`   | \`<del>\`    |       |
| Underline       | ✅         | \`underline\`       | \`<u>\`      |       |
| Code            | ✅         | \`code\`            | \`<code>\`   |       |
| Color           | ✅         | \`color\`           | \`<span>\`   |       |

### Page

| Page components | Supported | Notes |
| --------------- | --------- | ----- |
| Cover           | ✅         |       |
| Icon            | ✅         |       |
| Title           | ✅         |       |

#### Properties

| Property Type                                                                                     | Supported | Mapper Field Name  | Notes |
| ------------------------------------------------------------------------------------------------- | --------- | ------------------ | ----- |
| [Checkbox](https://developers.notion.com/reference/page-property-values#checkbox)                 | ✅         | \`checkbox\`         |       |
| [Created by](https://developers.notion.com/reference/page-property-values#created-by)             | ✅         | \`created_by\`       |       |
| [Created time](https://developers.notion.com/reference/page-property-values#created-time)         | ✅         | \`created_time\`     |       |
| [Date](https://developers.notion.com/reference/page-property-values#date)                         | ✅         | \`date\`             |       |
| [Email](https://developers.notion.com/reference/page-property-values#email)                       | ✅         | \`email\`            |       |
| [Files](https://developers.notion.com/reference/page-property-values#files)                       | ✅         | \`files\`            |       |
| [Formula](https://developers.notion.com/reference/page-property-values#formula)                   | ✅         | \`formula\`          |       |
| [Last edited by](https://developers.notion.com/reference/page-property-values#last-edited-by)     | ✅         | \`last_edited_by\`   |       |
| [Last edited time](https://developers.notion.com/reference/page-property-values#last-edited-time) | ✅         | \`last_edited_time\` |       |
| [Multi-select](https://developers.notion.com/reference/page-property-values#multi-select)         | ✅         | \`multi_select\`     |       |
| [Number](https://developers.notion.com/reference/page-property-values#number)                     | ✅         | \`number\`           |       |
| [People](https://developers.notion.com/reference/page-property-values#people)                     | ✅         | \`people\`           |       |
| [Phone number](https://developers.notion.com/reference/page-property-values#phone-number)         | ✅         | \`phone_number\`     |       |
| [Relation](https://developers.notion.com/reference/page-property-values#relation)                 | ✅         | \`relation\`         | WIP   |
| [Rollup](https://developers.notion.com/reference/page-property-values#rollup)                     | ✅         | \`rollup\`           | WIP   |
| [Rich text](https://developers.notion.com/reference/page-property-values#rich-text)               | ✅         | \`rich_text\`        |       |
| [Select](https://developers.notion.com/reference/page-property-values#select)                     | ✅         | \`select\`           |       |
| [Status](https://developers.notion.com/reference/page-property-values#status)                     | ✅         | \`status\`           |       |
| [Title](https://developers.notion.com/reference/page-property-values#title)                       | ✅         | \`title\`            |       |
| [URL](https://developers.notion.com/reference/page-property-values#url)                           | ✅         | \`url\`              |       |
| [Unique ID](https://developers.notion.com/reference/page-property-values#unique-id)               | ✅         | \`unique_id\`        |       |
| [Verification](https://developers.notion.com/reference/page-property-values#verification)         | ❌         | \`verification\`     |       |

### Database

| Layout Type | Supported | Layout Name | Notes |
| ----------- | --------- | ----------- | ----- |
| Table       | ✅         | \`table\`     |       |
| Gallery     | ✅         | \`gallery\`   |       |
| List        | ✅         | \`list\`      |       |
| Board       | ❌         | \`board\`     |       |
| Calendar    | ❌         | \`calendar\`  |       |
| Timeline    | ❌         | \`timeline\`  |       |


## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)`;function r(o){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Readme"}),`
`,e.jsx(s,{children:i})]})}function p(o={}){const{wrapper:t}=Object.assign({},c(),o.components);return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r()}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const n={title:"Readme",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:p};const _=["__page"];export{_ as __namedExportsOrder,a as __page,n as default};
//# sourceMappingURL=readme.stories-b10ac228.js.map
