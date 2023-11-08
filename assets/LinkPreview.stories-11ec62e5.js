import{L as e}from"./LinkPreview-ac68a575.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks-69e941c5.js";import"./Link-62299450.js";const p="block",o="88436bc7-a2ae-4107-8c86-c79f231c8352",d={type:"page_id",page_id:"7ed3a6ee-bb5e-4cdf-a944-33684d7c56bf"},r="2023-10-28T06:39:00.000Z",c="2023-10-28T06:39:00.000Z",l={object:"user",id:"e0446ede-dde6-457c-b535-d2b19f40b45a"},i={object:"user",id:"47b6bf35-05fa-4cc6-9494-ec0563e35318"},h=!1,b=!1,g="link_preview",u={url:"https://github.com/udus122/notion-renderer",site_meta:{url:"https://github.com/udus122/notion-renderer",title:"GitHub - udus122/notion-renderer",description:"Notion Renderer A fully customizable React renderer for the official Notion API. Note Please note that this package is currently in alpha release. Therefore, there may be significant changes to the API...",links:["https://github.com/udus122/notion-renderer"],image:"https://opengraph.githubassets.com/2270afdfcf1d84cb316bc23a3cfdfdc330de2a7b544309fc7654b593ced9e8af/udus122/notion-renderer",content:`<div>
            <article><p><a target="_blank" href="https://github.com/udus122/notion-renderer/blob/alpha/assets/logo.png"><img src="https://github.com/udus122/notion-renderer/raw/alpha/assets/logo.png" alt="Notion Renderer" /></a></p>
<h2 id="user-content-notion-renderer"><a target="_blank" href="https://github.com/udus122/notion-renderer#notion-renderer">Notion Renderer</a></h2>
<p>A fully customizable React renderer for the official Notion API.</p>
<p><span>Note</span><br />
Please note that this package is currently in alpha release.<br />
Therefore, there may be significant changes to the API without prior notice.</p>
<h2 id="user-content-example"><a target="_blank" href="https://github.com/udus122/notion-renderer#example">Example</a></h2>
<ul>
<li>Storybook: <a target="_blank" href="https://udus122.github.io/notion-renderer/?path=/docs/renderer--docs">https://udus122.github.io/notion-renderer/?path=/docs/renderer--docs</a></li>
</ul>
<h2 id="user-content-installation"><a target="_blank" href="https://github.com/udus122/notion-renderer#installation">Installation</a></h2>
<div><pre>npm install @udus/notion-renderer@alpha</pre></div>
<h2 id="user-content-usage"><a target="_blank" href="https://github.com/udus122/notion-renderer#usage">Usage</a></h2>
<h3 id="user-content-quick-start"><a target="_blank" href="https://github.com/udus122/notion-renderer#quick-start">Quick Start</a></h3>
<p>First, fetch the blocks of the page you want to render using <a target="_blank" href="https://github.com/udus122/notion-renderer/blob/alpha/src/libs/notion/blocks/blocks.ts#L104"><code>fetchBlockList</code></a>.<br />
Next, pass the fetched block list to the <a target="_blank" href="https://github.com/udus122/notion-renderer/blob/alpha/src/components/Blocks/Renderer.tsx#L24"><code>BlockRenderer</code></a>.</p>
<p>If you are using Next.js, you can do it as shown in the sample code below.</p>
<div><pre><span>import</span> <span>{</span> <span>BlockRenderer</span> <span>}</span> <span>from</span> <span>"@udus/notion-components/components"</span><span>;</span>
<span>import</span> <span>{</span> <span>fetchBlockList</span> <span>}</span> <span>from</span> <span>"@udus/notion-components/libs"</span><span>;</span>
<span>import</span> <span>type</span> <span>{</span> <span>InferGetStaticPropsType</span><span>,</span> <span>NextPage</span> <span>}</span> <span>from</span> <span>"next"</span><span>;</span>
<span>export</span> <span>const</span> <span>getStaticProps</span> <span>=</span> <span>async</span> <span>(</span><span>)</span> <span>=&gt;</span> <span>{</span>
  <span>const</span> <span>blocks</span> <span>=</span> <span>await</span> <span>fetchBlockList</span><span>(</span><span>"YOUR_PAGE_ID"</span><span>)</span><span>;</span>
  <span>return</span> <span>{</span>
    <span>props</span>: <span>{</span>
      blocks<span>,</span>
    <span>}</span><span>,</span>
  <span>}</span><span>;</span>
<span>}</span><span>;</span>
<span>type</span> <span>Props</span> <span>=</span> <span>InferGetStaticPropsType</span><span>&lt;</span><span>typeof</span> <span>getStaticProps</span><span>&gt;</span><span>;</span>
<span>const</span> <span>Index</span>: <span>NextPage</span><span>&lt;</span><span>Props</span><span>&gt;</span> <span>=</span> <span>(</span><span>{</span> blocks <span>}</span><span>)</span> <span>=&gt;</span> <span>{</span>
  <span>return</span> <span>&lt;</span><span>BlockRenderer</span><span></span> <span>blocks</span><span>=</span><span>{</span>blocks<span>}</span> <span>/</span><span>&gt;</span><span>;</span>
<span>}</span><span>;</span>
<span>export</span> <span>default</span> <span>Index</span><span>;</span></pre></div>
<p>And you will need to import CSS styles like below.</p>
<div><pre><span>// Load the CSS to be used with the Notion Renderer.</span>
<span>import</span> <span>"@udus/notion-components/styles/globals.css"</span><span>;</span>
<span>// Load the CSS used for rendering equations</span>
<span>import</span> <span>"katex/dist/katex.min.css"</span><span>;</span></pre></div>
<p>Please set your Notion integration token as an environment variable named <code>NOTION_TOKEN</code>.</p>
<div><pre><code>.env
NOTION_TOKEN=secret_epO17gyx***********************************
</code></pre></div>
<h3 id="user-content-custom-component"><a target="_blank" href="https://github.com/udus122/notion-renderer#custom-component">Custom Component</a></h3>
<p>You can render the page using a custom component instead of the default components, you can also create and use your own components.
Please see the example of creating custom components at the following link: <a target="_blank" href="https://github.com/udus122/notion-renderer/tree/alpha/src/components/Blocks/Custom">https://github.com/udus122/notion-renderer/tree/alpha/src/components/Blocks/Custom</a></p>
<div><pre><span>export</span> <span>default</span> <span>(</span><span>)</span> <span>=&gt;</span> <span>(</span>
  <span>&lt;</span><span>BlockRenderer</span>
    <span>blocks</span><span>=</span><span>{</span><span>blocks</span><span>}</span>
    <span>blockMapper</span><span>=</span><span>{</span>
      <span>toggle</span>: <span>OpenedToggle</span><span>,</span>
      <span>heading_1</span>: <span>OpenedHeading1</span><span>,</span>
      <span>heading_2</span>: <span>OpenedHeading2</span><span>,</span>
      <span>heading_3</span>: <span>OpenedHeading3</span><span>,</span>
    <span>}</span> <span>/</span><span>&gt;</span>
<span>)</span></pre></div>
<h4 id="user-content-color"><a target="_blank" href="https://github.com/udus122/notion-renderer#color">Color</a></h4>
<p>If you want to use dark mode, please set the theme to <code>theme="dark"</code> as follows.(<code>theme="light"</code> is default.)</p>
<div><pre><span>export</span> <span>default</span> <span>(</span><span>)</span> <span>=&gt;</span> <span>(</span>
  <span>&lt;</span><span>BlockRenderer</span> <span>blocks</span><span>=</span><span>{</span><span>blocks</span><span>}</span> <span>theme</span><span>=</span><span>"dark"</span> <span>/</span><span>&gt;</span>
<span>)</span></pre></div>
<p>If you want to change the color theme, please overwrite the CSS variables set to .notion-light or .notion-dark as follows. The default values are listed below.</p>
<div><pre>.<span>notion-light</span> {
  <span>--color-text-default</span><span>:</span> <span><span>#</span>37352f</span>;
  <span>--color-bg-default</span><span>:</span> <span><span>#</span>fff</span>;
  <span>--color-pill-default</span><span>:</span> <span>rgb</span>(<span>206</span> <span>205</span> <span>202</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-gray</span><span>:</span> <span><span>#</span>9b9a97</span>;
  <span>--color-bg-gray</span><span>:</span> <span><span>#</span>ebeced</span>;
  <span>--color-pill-gray</span><span>:</span> <span>rgb</span>(<span>155</span> <span>154</span> <span>151</span> <span>/</span> <span>40<span>%</span></span>);
  <span>--color-text-brown</span><span>:</span> <span><span>#</span>64473a</span>;
  <span>--color-bg-brown</span><span>:</span> <span><span>#</span>e9e5e3</span>;
  <span>--color-pill-brown</span><span>:</span> <span>rgb</span>(<span>140</span> <span>46</span> <span>0</span> <span>/</span> <span>20<span>%</span></span>);
  <span>--color-text-orange</span><span>:</span> <span><span>#</span>d9730d</span>;
  <span>--color-bg-orange</span><span>:</span> <span><span>#</span>faebdd</span>;
  <span>--color-pill-orange</span><span>:</span> <span>rgb</span>(<span>245</span> <span>93</span> <span>0</span> <span>/</span> <span>20<span>%</span></span>);
  <span>--color-text-yellow</span><span>:</span> <span><span>#</span>dfab01</span>;
  <span>--color-bg-yellow</span><span>:</span> <span><span>#</span>fbf3db</span>;
  <span>--color-pill-yellow</span><span>:</span> <span>rgb</span>(<span>233</span> <span>168</span> <span>0</span> <span>/</span> <span>20<span>%</span></span>);
  <span>--color-text-green</span><span>:</span> <span><span>#</span>0f7b6c</span>;
  <span>--color-bg-green</span><span>:</span> <span><span>#</span>ddedea</span>;
  <span>--color-pill-green</span><span>:</span> <span>rgb</span>(<span>0</span> <span>135</span> <span>107</span> <span>/</span> <span>20<span>%</span></span>);
  <span>--color-text-blue</span><span>:</span> <span><span>#</span>0b6e99</span>;
  <span>--color-bg-blue</span><span>:</span> <span><span>#</span>ddebf1</span>;
  <span>--color-pill-blue</span><span>:</span> <span>rgb</span>(<span>0</span> <span>120</span> <span>223</span> <span>/</span> <span>20<span>%</span></span>);
  <span>--color-text-purple</span><span>:</span> <span><span>#</span>6940a5</span>;
  <span>--color-bg-purple</span><span>:</span> <span><span>#</span>eae4f2</span>;
  <span>--color-pill-purple</span><span>:</span> <span>rgb</span>(<span>103</span> <span>36</span> <span>222</span> <span>/</span> <span>20<span>%</span></span>);
  <span>--color-text-pink</span><span>:</span> <span><span>#</span>ad1a72</span>;
  <span>--color-bg-pink</span><span>:</span> <span><span>#</span>f4dfeb</span>;
  <span>--color-pill-pink</span><span>:</span> <span>rgb</span>(<span>221</span> <span>0</span> <span>129</span> <span>/</span> <span>20<span>%</span></span>);
  <span>--color-text-red</span><span>:</span> <span><span>#</span>e03e3e</span>;
  <span>--color-bg-red</span><span>:</span> <span><span>#</span>fbe4e4</span>;
  <span>--color-pill-red</span><span>:</span> <span>rgb</span>(<span>255</span> <span>0</span> <span>26</span> <span>/</span> <span>20<span>%</span></span>);
}
.<span>notion-dark</span> {
  <span>--color-text-default</span><span>:</span> <span>rgb</span>(<span>255</span> <span>255</span> <span>255</span> <span>/</span> <span>90<span>%</span></span>);
  <span>--color-bg-default</span><span>:</span> <span><span>#</span>2f3437</span>;
  <span>--color-pill-default</span><span>:</span> <span>rgb</span>(<span>206</span> <span>205</span> <span>202</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-gray</span><span>:</span> <span>rgb</span>(<span>151</span> <span>154</span> <span>155</span> <span>/</span> <span>95<span>%</span></span>);
  <span>--color-bg-gray</span><span>:</span> <span><span>#</span>454b4e</span>;
  <span>--color-pill-gray</span><span>:</span> <span>rgb</span>(<span>151</span> <span>154</span> <span>155</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-brown</span><span>:</span> <span><span>#</span>937264</span>;
  <span>--color-bg-brown</span><span>:</span> <span><span>#</span>434040</span>;
  <span>--color-pill-brown</span><span>:</span> <span>rgb</span>(<span>147</span> <span>114</span> <span>100</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-orange</span><span>:</span> <span><span>#</span>ffa344</span>;
  <span>--color-bg-orange</span><span>:</span> <span><span>#</span>594a3a</span>;
  <span>--color-pill-orange</span><span>:</span> <span>rgb</span>(<span>255</span> <span>163</span> <span>68</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-yellow</span><span>:</span> <span><span>#</span>ffdc49</span>;
  <span>--color-bg-yellow</span><span>:</span> <span><span>#</span>59563b</span>;
  <span>--color-pill-yellow</span><span>:</span> <span>rgb</span>(<span>255</span> <span>220</span> <span>73</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-green</span><span>:</span> <span><span>#</span>4dab9a</span>;
  <span>--color-bg-green</span><span>:</span> <span><span>#</span>354c4b</span>;
  <span>--color-pill-green</span><span>:</span> <span>rgb</span>(<span>77</span> <span>171</span> <span>154</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-blue</span><span>:</span> <span><span>#</span>529cca</span>;
  <span>--color-bg-blue</span><span>:</span> <span><span>#</span>364954</span>;
  <span>--color-pill-blue</span><span>:</span> <span>rgb</span>(<span>82</span> <span>156</span> <span>202</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-purple</span><span>:</span> <span><span>#</span>9a6dd7</span>;
  <span>--color-bg-purple</span><span>:</span> <span><span>#</span>443f57</span>;
  <span>--color-pill-purple</span><span>:</span> <span>rgb</span>(<span>154</span> <span>109</span> <span>215</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-pink</span><span>:</span> <span><span>#</span>e255a1</span>;
  <span>--color-bg-pink</span><span>:</span> <span><span>#</span>533b4c</span>;
  <span>--color-pill-pink</span><span>:</span> <span>rgb</span>(<span>226</span> <span>85</span> <span>161</span> <span>/</span> <span>50<span>%</span></span>);
  <span>--color-text-red</span><span>:</span> <span><span>#</span>ff7369</span>;
  <span>--color-bg-red</span><span>:</span> <span><span>#</span>594141</span>;
  <span>--color-pill-red</span><span>:</span> <span>rgb</span>(<span>255</span> <span>115</span> <span>105</span> <span>/</span> <span>50<span>%</span></span>);
}</pre></div>
<h2 id="user-content-supported-objects"><a target="_blank" href="https://github.com/udus122/notion-renderer#supported-objects">Supported Objects</a></h2>
<h3 id="user-content-block"><a target="_blank" href="https://github.com/udus122/notion-renderer#block"></a><a target="_blank" href="https://developers.notion.com/reference/block">Block</a></h3>
<p>Most common block types are supported.</p>
<table>
<thead>
<tr>
<th>Block Type</th>
<th>Supported</th>
<th>Mapper Field Name</th>
<th>HTML Tag</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Audio</td>
<td>✅</td>
<td><code>audio</code></td>
<td><code>&lt;audio&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#bookmark">Bookmark</a></td>
<td>✅</td>
<td><code>bookmark</code></td>
<td><code>&lt;div&gt;</code></td>
<td>When retrieving an object from the API, we use <a target="_blank" href="https://github.com/extractus/article-extractor">@extractus/article-extractor</a> to obtain meta information of the site such as OGP images and descriptions.</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#breadcrumb">Breadcrumb</a></td>
<td>✅</td>
<td><code>breadcrumb</code></td>
<td><code>&lt;div&gt;</code></td>
<td>When retrieving an object from the API, we recursively obtain the parent page.</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#breadcrumb">Bulleted list item</a></td>
<td>✅</td>
<td><code>bullted_list</code>/<code>bullted_list_item</code></td>
<td><code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#callout">Callout</a></td>
<td>✅</td>
<td><code>callout</code></td>
<td><code>&lt;div&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#child-database">Child database</a></td>
<td>✅</td>
<td><code>child_database</code></td>
<td><code>&lt;Link&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#child-page">Child page</a></td>
<td>✅</td>
<td><code>child_page</code></td>
<td><code>&lt;Link&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#code">Code</a></td>
<td>✅</td>
<td><code>code</code></td>
<td><code>&lt;pre&gt;&lt;code&gt;</code></td>
<td>By default, SyntaxHighlight is not included. If necessary, please create a custom component.</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#column-list-and-column">Column list and column</a></td>
<td>✅</td>
<td><code>column_list</code></td>
<td><code>&lt;div&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#divider">Divider</a></td>
<td>✅</td>
<td><code>divider</code></td>
<td><code>&lt;hr&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#embed">Embed</a></td>
<td>✅</td>
<td><code>embed</code></td>
<td>passing the <a target="_blank" href="https://oembed.com/">oEmbed</a> content to <code>dangerouslySetInnerHTML</code></td>
<td>When retrieving an object from the API, we use <a target="_blank" href="https://github.com/extractus/oembed-extractor">@extractus/oembed-extractor</a> to obtain the oEmbed content.</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#equation">Equation</a></td>
<td>✅</td>
<td><code>equation</code></td>
<td><a target="_blank" href="https://katex.org/">katex</a></td>
<td>In order to render properly, you need to import <code>katex/dist/katex.min.css</code>.</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#file">File</a></td>
<td>✅</td>
<td><code>file</code></td>
<td><code>&lt;Link&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#headings">Heading1</a></td>
<td>✅</td>
<td><code>heading_1</code></td>
<td><code>&lt;h1&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#headings">Heading2</a></td>
<td>✅</td>
<td><code>heading_2</code></td>
<td><code>&lt;h2&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#headings">Heading3</a></td>
<td>✅</td>
<td><code>heading_3</code></td>
<td><code>&lt;h3&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#image">Image</a></td>
<td>✅</td>
<td><code>image</code></td>
<td><code>&lt;img&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#link-preview">Link Preview</a></td>
<td>✅</td>
<td><code>link_preview</code></td>
<td><code>&lt;Link&gt;</code></td>
<td>When retrieving an object from the API, we use <a target="_blank" href="https://github.com/extractus/article-extractor">@extractus/article-extractor</a> to obtain meta information of the site such as OGP images and descriptions.</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#numbered-list-item">Numbered lit item</a></td>
<td>✅</td>
<td><code>numbered_list</code>/<code>numbered_list_item</code></td>
<td><code>&lt;ol&gt;</code>/<code>&lt;li&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#paragraph">Paragraph</a></td>
<td>✅</td>
<td><code>paragraph</code></td>
<td><code>&lt;p&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#pdf">PDF</a></td>
<td>✅</td>
<td><code>pdf</code></td>
<td><code>&lt;object type="application/pdf&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#quote">Quote</a></td>
<td>✅</td>
<td><code>quote</code></td>
<td><code>&lt;blockquote&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#synced-block">Synced block</a></td>
<td>✅</td>
<td><code>synced_block</code></td>
<td><code>&lt;div&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#table">Table</a></td>
<td>✅</td>
<td><code>table</code></td>
<td><code>&lt;table&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#table">Table</a></td>
<td>✅</td>
<td><code>table</code></td>
<td><code>&lt;table&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#table-of-contents">Table of contents</a></td>
<td>✅</td>
<td><code>table_of_contents</code></td>
<td><code>&lt;div&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#table-of-contents">Template</a></td>
<td>❌</td>
<td><code>template</code></td>
<td></td>
<td>Deprecated</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#to-do">To do</a></td>
<td>✅</td>
<td><code>to_do</code></td>
<td><code>&lt;div&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#toggle-blocks">Toggle Blocks</a></td>
<td>✅</td>
<td><code>toggle</code></td>
<td><code>&lt;details&gt;&lt;summary&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/block#video">Video</a></td>
<td>✅</td>
<td><code>video</code></td>
<td><code>&lt;video&gt;</code></td>
<td>YouTube is supported through the oEmbed API.</td>
</tr>
</tbody>
</table>
<h4 id="user-content-rich-text"><a target="_blank" href="https://github.com/udus122/notion-renderer#rich-text"></a><a target="_blank" href="https://developers.notion.com/reference/rich-text#rich-text-type-objects">Rich text</a></h4>
<table>
<thead>
<tr>
<th>Rich text Type</th>
<th>Supported</th>
<th>Mapper Field Name</th>
<th>HTML Tag</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/rich-text#equation">Equation</a></td>
<td>✅</td>
<td><code>equation</code></td>
<td><a target="_blank" href="https://katex.org/">katex</a></td>
<td>In order to render properly, you need to import <code>katex/dist/katex.min.css</code>.</td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/rich-text#mention">Mention</a></td>
<td>✅</td>
<td><code>mention</code></td>
<td><code>&lt;span&gt;</code></td>
<td></td>
</tr>
<tr>
<td><a target="_blank" href="https://developers.notion.com/reference/rich-text#text">Text</a></td>
<td>✅</td>
<td><code>text</code></td>
<td><code>&lt;span&gt;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h5 id="user-content-annotation"><a target="_blank" href="https://github.com/udus122/notion-renderer#annotation"></a><a target="_blank" href="https://developers.notion.com/reference/rich-text#the-annotation-object">Annotation</a></h5>
<table>
<thead>
<tr>
<th>Annotation Type</th>
<th>Supported</th>
<th>Mapper Field Name</th>
<th>HTML Tag</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bold</td>
<td>✅</td>
<td><code>bold</code></td>
<td><code>&lt;strong&gt;</code></td>
<td></td>
</tr>
<tr>
<td>Italic</td>
<td>✅</td>
<td><code>italic</code></td>
<td><code>&lt;em&gt;</code></td>
<td></td>
</tr>
<tr>
<td>Strikethrough</td>
<td>✅</td>
<td><code>strikethrough</code></td>
<td><code>&lt;del&gt;</code></td>
<td></td>
</tr>
<tr>
<td>Underline</td>
<td>✅</td>
<td><code>underline</code></td>
<td><code>&lt;u&gt;</code></td>
<td></td>
</tr>
<tr>
<td>Code</td>
<td>✅</td>
<td><code>code</code></td>
<td><code>&lt;code&gt;</code></td>
<td></td>
</tr>
<tr>
<td>Color</td>
<td>✅</td>
<td><code>color</code></td>
<td><code>&lt;span&gt;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="user-content-page"><a target="_blank" href="https://github.com/udus122/notion-renderer#page">Page</a></h3>
<p>comming soon.</p>
<h3 id="user-content-database"><a target="_blank" href="https://github.com/udus122/notion-renderer#database">Database</a></h3>
<p>comming soon.</p>
<h2 id="user-content-contributing"><a target="_blank" href="https://github.com/udus122/notion-renderer#contributing">Contributing</a></h2>
<p>Pull requests are welcome.</p>
<h2 id="user-content-license"><a target="_blank" href="https://github.com/udus122/notion-renderer#license">License</a></h2>
<p><a target="_blank" href="https://choosealicense.com/licenses/mit/">MIT</a></p>
</article>
          </div>`,author:"",favicon:"https://github.githubassets.com/favicons/favicon.svg",source:"github.com",published:"",ttr:173}},f={object:p,id:o,parent:d,created_time:r,last_edited_time:c,created_by:l,last_edited_by:i,has_children:h,archived:b,type:g,link_preview:u},w={title:"Blocks/LinkPreview",component:e,tags:["autodocs"]},n={args:{block:f}};var a,t,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    block: ((LinkPreviewObject as unknown) as LinkPreviewBlockObject)
  }
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const P=["Default"];export{n as Default,P as __namedExportsOrder,w as default};
//# sourceMappingURL=LinkPreview.stories-11ec62e5.js.map
