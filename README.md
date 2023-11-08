![Notion Renderer](/assets/logo.png)

# Notion Renderer
![npm version](https://img.shields.io/npm/v/%40udus%2Fnotion-renderer) ![GitHub License](https://img.shields.io/github/license/udus122/notion-renderer) ![GitHub Repo stars](https://img.shields.io/github/stars/udus122/notion-renderer?style=social)


A fully customizable React renderer for the official Notion API.

> [!NOTE]
> Please note that this package is currently in alpha release.  
> Therefore, there may be significant changes to the API without prior notice.

## Example

- Storybook: https://udus122.github.io/notion-renderer/?path=/docs/renderer--docs

## Installation

```bash
npm install @udus/notion-renderer@alpha
```

## Usage

### Quick Start

First, fetch the blocks of the page you want to render using [`fetchBlockList`](https://github.com/udus122/notion-renderer/blob/alpha/src/libs/notion/blocks/blocks.ts#L104).  
Next, pass the fetched block list to the [`BlockRenderer`](https://github.com/udus122/notion-renderer/blob/alpha/src/components/Blocks/Renderer.tsx#L24).

If you are using Next.js, you can do it as shown in the sample code below.

```typescript
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
```

And you will need to import CSS styles like below.  
```typescript
// Load the CSS to be used with the Notion Renderer.
import "@udus/notion-components/styles/globals.css";
// Load the CSS used for rendering equations
import "katex/dist/katex.min.css";
```

Please set your Notion integration token as an environment variable named `NOTION_TOKEN`.

```
.env
NOTION_TOKEN=secret_epO17gyx***********************************
```

### Custom Component

You can render the page using a custom component instead of the default components, you can also create and use your own components.
Please see the example of creating custom components at the following link: https://github.com/udus122/notion-renderer/tree/alpha/src/components/Blocks/Custom

```typescript
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
```

#### Color

If you want to use dark mode, please set the theme to `theme="dark"` as follows.(`theme="light"` is default.)

```typescript
export default () => (
  <BlockRenderer blocks={blocks} theme="dark" />
)
```

If you want to change the color theme, please overwrite the CSS variables set to .notion-light or .notion-dark as follows. The default values are listed below.

```css
.notion-light {
  --color-text-default: #37352f;
  --color-bg-default: #fff;
  --color-pill-default: rgb(206 205 202 / 50%);
  --color-text-gray: #9b9a97;
  --color-bg-gray: #ebeced;
  --color-pill-gray: rgb(155 154 151 / 40%);
  --color-text-brown: #64473a;
  --color-bg-brown: #e9e5e3;
  --color-pill-brown: rgb(140 46 0 / 20%);
  --color-text-orange: #d9730d;
  --color-bg-orange: #faebdd;
  --color-pill-orange: rgb(245 93 0 / 20%);
  --color-text-yellow: #dfab01;
  --color-bg-yellow: #fbf3db;
  --color-pill-yellow: rgb(233 168 0 / 20%);
  --color-text-green: #0f7b6c;
  --color-bg-green: #ddedea;
  --color-pill-green: rgb(0 135 107 / 20%);
  --color-text-blue: #0b6e99;
  --color-bg-blue: #ddebf1;
  --color-pill-blue: rgb(0 120 223 / 20%);
  --color-text-purple: #6940a5;
  --color-bg-purple: #eae4f2;
  --color-pill-purple: rgb(103 36 222 / 20%);
  --color-text-pink: #ad1a72;
  --color-bg-pink: #f4dfeb;
  --color-pill-pink: rgb(221 0 129 / 20%);
  --color-text-red: #e03e3e;
  --color-bg-red: #fbe4e4;
  --color-pill-red: rgb(255 0 26 / 20%);
}

.notion-dark {
  --color-text-default: rgb(255 255 255 / 90%);
  --color-bg-default: #2f3437;
  --color-pill-default: rgb(206 205 202 / 50%);
  --color-text-gray: rgb(151 154 155 / 95%);
  --color-bg-gray: #454b4e;
  --color-pill-gray: rgb(151 154 155 / 50%);
  --color-text-brown: #937264;
  --color-bg-brown: #434040;
  --color-pill-brown: rgb(147 114 100 / 50%);
  --color-text-orange: #ffa344;
  --color-bg-orange: #594a3a;
  --color-pill-orange: rgb(255 163 68 / 50%);
  --color-text-yellow: #ffdc49;
  --color-bg-yellow: #59563b;
  --color-pill-yellow: rgb(255 220 73 / 50%);
  --color-text-green: #4dab9a;
  --color-bg-green: #354c4b;
  --color-pill-green: rgb(77 171 154 / 50%);
  --color-text-blue: #529cca;
  --color-bg-blue: #364954;
  --color-pill-blue: rgb(82 156 202 / 50%);
  --color-text-purple: #9a6dd7;
  --color-bg-purple: #443f57;
  --color-pill-purple: rgb(154 109 215 / 50%);
  --color-text-pink: #e255a1;
  --color-bg-pink: #533b4c;
  --color-pill-pink: rgb(226 85 161 / 50%);
  --color-text-red: #ff7369;
  --color-bg-red: #594141;
  --color-pill-red: rgb(255 115 105 / 50%);
}
```

## Supported Objects

### [Block](https://developers.notion.com/reference/block)

Most common block types are supported.

| Block Type                                                                                     | Supported | Mapper Field Name                    | HTML Tag                                                                       | Notes                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------- | --------- | ------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio                                                                                          | ✅         | `audio`                              | `<audio>`                                                                      |                                                                                                                                                                                                           |
| [Bookmark](https://developers.notion.com/reference/block#bookmark)                             | ✅         | `bookmark`                           | `<div>`                                                                        | When retrieving an object from the API, we use [@extractus/article-extractor](https://github.com/extractus/article-extractor) to obtain meta information of the site such as OGP images and descriptions. |
| [Breadcrumb](https://developers.notion.com/reference/block#breadcrumb)                         | ✅         | `breadcrumb`                         | `<div>`                                                                        | When retrieving an object from the API, we recursively obtain the parent page.                                                                                                                            |
| [Bulleted list item](https://developers.notion.com/reference/block#breadcrumb)                 | ✅         | `bullted_list`/`bullted_list_item`   | `<ul>`/`<li>`                                                                  |                                                                                                                                                                                                           |
| [Callout](https://developers.notion.com/reference/block#callout)                               | ✅         | `callout`                            | `<div>`                                                                        |                                                                                                                                                                                                           |
| [Child database](https://developers.notion.com/reference/block#child-database)                 | ✅         | `child_database`                     | `<Link>`                                                                       |                                                                                                                                                                                                           |
| [Child page](https://developers.notion.com/reference/block#child-page)                         | ✅         | `child_page`                         | `<Link>`                                                                       |                                                                                                                                                                                                           |
| [Code](https://developers.notion.com/reference/block#code)                                     | ✅         | `code`                               | `<pre><code>`                                                                  | By default, SyntaxHighlight is not included. If necessary, please create a custom component.                                                                                                              |
| [Column list and column](https://developers.notion.com/reference/block#column-list-and-column) | ✅         | `column_list`                        | `<div>`                                                                        |                                                                                                                                                                                                           |
| [Divider](https://developers.notion.com/reference/block#divider)                               | ✅         | `divider`                            | `<hr>`                                                                         |                                                                                                                                                                                                           |
| [Embed](https://developers.notion.com/reference/block#embed)                                   | ✅         | `embed`                              | passing the [oEmbed](https://oembed.com/) content to `dangerouslySetInnerHTML` | When retrieving an object from the API, we use [@extractus/oembed-extractor](https://github.com/extractus/oembed-extractor) to obtain the oEmbed content.                                                 |
| [Equation](https://developers.notion.com/reference/block#equation)                             | ✅         | `equation`                           | [katex](https://katex.org/)                                                    | In order to render properly, you need to import `katex/dist/katex.min.css`.                                                                                                                               |
| [File](https://developers.notion.com/reference/block#file)                                     | ✅         | `file`                               | `<Link>`                                                                       |                                                                                                                                                                                                           |
| [Heading1](https://developers.notion.com/reference/block#headings)                             | ✅         | `heading_1`                          | `<h1>`                                                                         |                                                                                                                                                                                                           |
| [Heading2](https://developers.notion.com/reference/block#headings)                             | ✅         | `heading_2`                          | `<h2>`                                                                         |                                                                                                                                                                                                           |
| [Heading3](https://developers.notion.com/reference/block#headings)                             | ✅         | `heading_3`                          | `<h3>`                                                                         |                                                                                                                                                                                                           |
| [Image](https://developers.notion.com/reference/block#image)                                   | ✅         | `image`                              | `<img>`                                                                        |                                                                                                                                                                                                           |
| [Link Preview](https://developers.notion.com/reference/block#link-preview)                     | ✅         | `link_preview`                       | `<Link>`                                                                       | When retrieving an object from the API, we use [@extractus/article-extractor](https://github.com/extractus/article-extractor) to obtain meta information of the site such as OGP images and descriptions. |
| Link To Page                                                                                   | ✅         | `link_to_page`                       | `<Link>`                                                                       |                                                                                                                                                                                                           |
| [Numbered lit item](https://developers.notion.com/reference/block#numbered-list-item)          | ✅         | `numbered_list`/`numbered_list_item` | `<ol>`/`<li>`                                                                  |                                                                                                                                                                                                           |
| [Paragraph](https://developers.notion.com/reference/block#paragraph)                           | ✅         | `paragraph`                          | `<p>`                                                                          |                                                                                                                                                                                                           |
| [PDF](https://developers.notion.com/reference/block#pdf)                                       | ✅         | `pdf`                                | `<object type="application/pdf>`                                               |                                                                                                                                                                                                           |
| [Quote](https://developers.notion.com/reference/block#quote)                                   | ✅         | `quote`                              | `<blockquote>`                                                                 |                                                                                                                                                                                                           |
| [Synced block](https://developers.notion.com/reference/block#synced-block)                     | ✅         | `synced_block`                       | `<div>`                                                                        |                                                                                                                                                                                                           |
| [Table](https://developers.notion.com/reference/block#table)                                   | ✅         | `table`                              | `<table>`                                                                      |                                                                                                                                                                                                           |
| [Table of contents](https://developers.notion.com/reference/block#table-of-contents)           | ✅         | `table_of_contents`                  | `<div>`                                                                        |                                                                                                                                                                                                           |
| [Template](https://developers.notion.com/reference/block#table-of-contents)                    | ❌         | `template`                           |                                                                                | Deprecated                                                                                                                                                                                                |
| [To do](https://developers.notion.com/reference/block#to-do)                                   | ✅         | `to_do`                              | `<div>`                                                                        |                                                                                                                                                                                                           |
| [Toggle Blocks](https://developers.notion.com/reference/block#toggle-blocks)                   | ✅         | `toggle`                             | `<details><summary>`                                                           |                                                                                                                                                                                                           |
| [Video](https://developers.notion.com/reference/block#video)                                   | ✅         | `video`                              | `<video>`                                                                      | YouTube is supported through the oEmbed API.                                                                                                                                                              |

#### [Rich text](https://developers.notion.com/reference/rich-text#rich-text-type-objects)

| Rich text Type                                                         | Supported | Mapper Field Name | HTML Tag                    | Notes                                                                       |
| ---------------------------------------------------------------------- | --------- | ----------------- | --------------------------- | --------------------------------------------------------------------------- |
| [Equation](https://developers.notion.com/reference/rich-text#equation) | ✅         | `equation`        | [katex](https://katex.org/) | In order to render properly, you need to import `katex/dist/katex.min.css`. |
| [Mention](https://developers.notion.com/reference/rich-text#mention)   | ✅         | `mention`         | `<span>`                    |                                                                             |
| [Text](https://developers.notion.com/reference/rich-text#text)         | ✅         | `text`            | `<span>`                    |                                                                             |


##### [Annotation](https://developers.notion.com/reference/rich-text#the-annotation-object)

| Annotation Type | Supported | Mapper Field Name | HTML Tag   | Notes |
| --------------- | --------- | ----------------- | ---------- | ----- |
| Bold            | ✅         | `bold`            | `<strong>` |       |
| Italic          | ✅         | `italic`          | `<em>`     |       |
| Strikethrough   | ✅         | `strikethrough`   | `<del>`    |       |
| Underline       | ✅         | `underline`       | `<u>`      |       |
| Code            | ✅         | `code`            | `<code>`   |       |
| Color           | ✅         | `color`           | `<span>`   |       |

### Page

| Page components | Supported | Notes |
| --------------- | --------- | ----- |
| Cover           | ✅         |       |
| Icon            | ✅         |       |
| Title           | ✅         |       |

#### Properties

| Property Type                                                                                     | Supported | Mapper Field Name  | Notes |
| ------------------------------------------------------------------------------------------------- | --------- | ------------------ | ----- |
| [Checkbox](https://developers.notion.com/reference/page-property-values#checkbox)                 | ✅         | `checkbox`         |       |
| [Created by](https://developers.notion.com/reference/page-property-values#created-by)             | ✅         | `created_by`       |       |
| [Created time](https://developers.notion.com/reference/page-property-values#created-time)         | ✅         | `created_time`     |       |
| [Date](https://developers.notion.com/reference/page-property-values#date)                         | ✅         | `date`             |       |
| [Email](https://developers.notion.com/reference/page-property-values#email)                       | ✅         | `email`            |       |
| [Files](https://developers.notion.com/reference/page-property-values#files)                       | ✅         | `files`            |       |
| [Formula](https://developers.notion.com/reference/page-property-values#formula)                   | ✅         | `formula`          |       |
| [Last edited by](https://developers.notion.com/reference/page-property-values#last-edited-by)     | ✅         | `last_edited_by`   |       |
| [Last edited time](https://developers.notion.com/reference/page-property-values#last-edited-time) | ✅         | `last_edited_time` |       |
| [Multi-select](https://developers.notion.com/reference/page-property-values#multi-select)         | ✅         | `multi_select`     |       |
| [Number](https://developers.notion.com/reference/page-property-values#number)                     | ✅         | `number`           |       |
| [People](https://developers.notion.com/reference/page-property-values#people)                     | ✅         | `people`           |       |
| [Phone number](https://developers.notion.com/reference/page-property-values#phone-number)         | ✅         | `phone_number`     |       |
| [Relation](https://developers.notion.com/reference/page-property-values#relation)                 | ✅         | `relation`         | WIP   |
| [Rollup](https://developers.notion.com/reference/page-property-values#rollup)                     | ✅         | `rollup`           | WIP   |
| [Rich text](https://developers.notion.com/reference/page-property-values#rich-text)               | ✅         | `rich_text`        |       |
| [Select](https://developers.notion.com/reference/page-property-values#select)                     | ✅         | `select`           |       |
| [Status](https://developers.notion.com/reference/page-property-values#status)                     | ✅         | `status`           |       |
| [Title](https://developers.notion.com/reference/page-property-values#title)                       | ✅         | `title`            |       |
| [URL](https://developers.notion.com/reference/page-property-values#url)                           | ✅         | `url`              |       |
| [Unique ID](https://developers.notion.com/reference/page-property-values#unique-id)               | ✅         | `unique_id`        |       |
| [Verification](https://developers.notion.com/reference/page-property-values#verification)         | ❌         | `verification`     |       |

### Database

under construction.

| Layout Type | Supported | Layout Name | Notes |
| ----------- | --------- | ----------- | ----- |
| Table       | ❌         | `table`     |       |
| Gallery     | ❌         | `gallery`   |       |
| List        | ❌         | `list`      |       |
| Board       | ❌         | `board`     |       |
| Calendar    | ❌         | `calendar`  |       |
| Timeline    | ❌         | `timeline`  |       |


## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)