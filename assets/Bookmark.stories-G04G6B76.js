import{q as l}from"./Audio-Myap7b36.js";import"./jsx-runtime-vNq4Oc-g.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Annotation-fR2yJeRa.js";import"./hooks-3JhRioXY.js";import"./Link-4y-dmM-M.js";import"./AnnotationItem-s6kmnr_Q.js";import"./Bold-lS9YMGOC.js";import"./Color-mptN1qya.js";import"./InlineCode-TPhS41qP.js";import"./Italic-ORC3lBYR.js";import"./Strikethrough-g_2WBDxm.js";import"./Underline-K-lIgRJf.js";import"./InlineEquation-wvDc40t4.js";import"./katex-mFqOzwKf.js";import"./index-jnESftpm.js";import"./index-Ou0R2y6e.js";import"./Date-Pu-r1Rem.js";import"./Text-nGQm-V4-.js";import"./Icon-e4pLob1-.js";import"./ChildDatabase-SDaNFEpP.js";import"./ChildPage-lVq8yHN5.js";import"./Divider-uligtz63.js";import"./Equation-yeHPBoRl.js";import"./Files-L4SlQa9H.js";import"./LinkPreview-gmflsAnQ.js";import"./TableOfContents-p8al1xEY.js";import"./Checkbox-tcHiP4BQ.js";import"./Cover-z89RitXa.js";import"./Title-Hc14J7Em.js";import"./Checkbox-JL70vLAJ.js";import"./CreatedBy-iOJDkciQ.js";import"./CreatedTime-VvaTSUef.js";import"./index-svRVa2Vs.js";import"./Date-sXOTSNaq.js";import"./Email-dwSEzcgk.js";import"./Formula-yLIBVUXb.js";import"./LastEditedBy-O9svYQ5V.js";import"./LastEditedTime-0qC6POEY.js";import"./MultiSelect-i5MF47Mt.js";import"./Number-ngrvBzjk.js";import"./People-DfB2XZVQ.js";import"./PhoneNumber-EJEYVhPk.js";import"./Rollup-YqiuD841.js";import"./Select-5o4j6stF.js";import"./Status-7q_XHn2S.js";import"./UniqueId-zpaUPJvo.js";import"./Url-xp6E5wKB.js";const i="block",b="0ef6015c-4d37-4922-9014-fe40b526c7e3",p={type:"page_id",page_id:"2712e341-754a-41ae-a9ce-4c0bb4b18c52"},h="2023-03-18T12:21:00.000Z",s="2023-10-07T07:04:00.000Z",k={object:"user",id:"e0446ede-dde6-457c-b535-d2b19f40b45a"},u={object:"user",id:"e0446ede-dde6-457c-b535-d2b19f40b45a"},f=!1,g=!1,y="bookmark",m={caption:[{type:"text",text:{content:"this is bookmark caption",link:null},annotations:{bold:!1,italic:!1,strikethrough:!1,underline:!1,code:!1,color:"default"},plain_text:"this is bookmark caption",href:null}],url:"https://developers.notion.com/reference/block#block-type-objects",site_meta:{url:"https://developers.notion.com/reference/block",title:"Start building with the Notion API",description:"A block object represents a piece of content within Notion. The API translates the headings, toggles, paragraphs, lists, media, and more that you can interact with in the Notion UI as different block type...",links:["https://developers.notion.com/reference/block"],image:"https://files.readme.io/a507683-developer-portal-meta.png",content:`<div><p>A block object represents a piece of content within Notion. The API translates the headings, toggles, paragraphs, lists, media, and more that you can interact with in the Notion UI as different <a target="_blank" href="https://developers.notion.com/reference/block#block-type-objects">block type objects</a>. </p>
<p> For example, the following block object represents a <code>Heading 2</code> in the Notion UI:</p>
<div><pre><code>{
	"object": "block",
	"id": "c02fc1d3-db8b-45c5-a222-27595b15aea7",
	"parent": {
		"type": "page_id",
		"page_id": "59833787-2cf9-4fdf-8782-e53db20768a5"
	},
	"created_time": "2022-03-01T19:05:00.000Z",
	"last_edited_time": "2022-07-06T19:41:00.000Z",
	"created_by": {
		"object": "user",
		"id": "ee5f0f84-409a-440f-983a-a5315961c6e4"
	},
	"last_edited_by": {
		"object": "user",
		"id": "ee5f0f84-409a-440f-983a-a5315961c6e4"
	},
	"has_children": false,
	"archived": false,
	"type": "heading_2",
	"heading_2": {
		"rich_text": [
			{
				"type": "text",
				"text": {
					"content": "Lacinato kale",
					"link": null
				},
				"annotations": {
					"bold": false,
					"italic": false,
					"strikethrough": false,
					"underline": false,
					"code": false,
					"color": "green"
				},
				"plain_text": "Lacinato kale",
				"href": null
			}
		],
		"color": "default",
    "is_toggleable": false
	}
}
</code></pre></div>
<p>Use the <a target="_blank" href="https://developers.notion.com/reference/get-block-children">Retrieve block children</a> endpoint to list all of the blocks on a page. </p>
<blockquote><p><span>📘</span></p><p>Fields marked with an * are available to integrations with any capabilities. Other properties require read content capabilities in order to be returned from the Notion API. Consult the <a target="_blank" href="https://developers.notion.com/reference/capabilities">integration capabilities reference</a> for details.</p></blockquote>
<p>Some block types contain nested blocks. The following block types support child blocks: </p>
<ul>
<li><a target="_blank" href="https://developers.notion.com/reference/block#bulleted-list-item">Bulleted list item</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#callout">Callout</a> </li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#child-database">Child database</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#child-page">Child page</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#column-list-and-column">Column</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#heading-1">Heading 1</a>, when the <code>is_toggleable</code> property is <code>true</code></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#heading-2">Heading 2</a>, when the <code>is_toggleable</code> property is <code>true</code></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#heading-3">Heading 3</a>, when the <code>is_toggleable</code> property is <code>true</code></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#numbered-list-item">Numbered list item</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#paragraph">Paragraph</a> </li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#quote">Quote</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#synced-block">Synced block</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#table">Table</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#template">Template</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#to-do">To do</a></li>
<li><a target="_blank" href="https://developers.notion.com/reference/block#toggle-blocks">Toggle</a> </li>
</ul>
<blockquote><p><span>📘</span></p><p>The API does not support all block types.</p><p>Only the block type objects listed in the reference below are supported. Any unsupported block types appear in the structure, but contain a <code>type</code> set to <code>"unsupported"</code>.</p></blockquote>
<p>Every block object has a key corresponding to the value of <code>type</code>. Under the key is an object with type-specific block information.</p>
<blockquote><p><span>📘</span></p><p>Many block types support rich text. In cases where it is supported, a <a target="_blank" href="https://developers.notion.com/reference/rich-text"><code>rich_text</code> object</a> will be included in the block <code>type</code> object. All <code>rich_text</code> objects will include a <code>plain_text</code> property, which provides a convenient way for developers to access unformatted text from the Notion block.</p></blockquote>
<p>Bookmark block objects contain the following information within the <code>bookmark</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>caption</code></td><td>array of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a> text</td><td>The caption for the bookmark.</td></tr><tr><td><code>url</code></td><td>string</td><td>The link for the bookmark.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "bookmark",
  //...other keys excluded
  "bookmark": {
    "caption": [],
    "url": "https://companywebsite.com"
  }
}
</code></pre></div>
<p>Breadcrumb block objects do not contain any information within the <code>breadcrumb</code> property.</p>
<div><pre><code>{
  //...other keys excluded
  "type": "breadcrumb",
  //...other keys excluded
  "breadcrumb": {}
}
</code></pre></div>
<p>Bulleted list item block objects contain the following information within the <code>bulleted_list_item</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text in the <code>bulleted_list_item</code> block.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks (if any) of the <code>bulleted_list_item</code> block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "bulleted_list_item",
  //...other keys excluded
  "bulleted_list_item": {
    "rich_text": [{
      "type": "text",
      "text": {
        "content": "Lacinato kale",
        "link": null
      }
      // ..other keys excluded
    }],
    "color": "default",
    "children":[{
      "type": "paragraph"
      // ..other keys excluded
    }]
  }
}
</code></pre></div>
<p>Callout block objects contain the following information within the <code>callout</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text in the <code>callout</code> block.</td></tr><tr><td><code>icon</code></td><td><code>object</code></td><td>An <a target="_blank" href="https://developers.notion.com/reference/emoji-object">emoji</a> or <a target="_blank" href="https://developers.notion.com/reference/file-object">file</a> object that represents the callout's icon. If the callout does not have an icon.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
	"type": "callout",
   // ..other keys excluded
   "callout": {
   	"rich_text": [{
      "type": "text",
      "text": {
        "content": "Lacinato kale",
        "link": null
      }
      // ..other keys excluded
    }],
     "icon": {
       "emoji": "⭐"
     },
     "color": "default"
   }
}
</code></pre></div>
<p>Child database block objects contain the following information within the <code>child_database</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>title</code></td><td><code>string</code></td><td>The plain text title of the database.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "child_database",
  //...other keys excluded
  "child_database": {
    "title": "My database"
  }
}
</code></pre></div>
<blockquote><p><span>📘</span></p><p>Creating and updating <code>child_database</code> blocks</p><p>To create or update <code>child_database</code> type blocks, use the <a target="_blank" href="https://developers.notion.com/reference/create-a-database">Create a database</a> and the <a target="_blank" href="https://developers.notion.com/reference/update-a-database">Update a database</a> endpoints, specifying the ID of the parent page in the <code>parent</code> body param.</p></blockquote>
<p>Child page block objects contain the following information within the <code>child_page</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>title</code></td><td><code>string</code></td><td>The plain text <code>title</code> of the page.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "child_page",
  //...other keys excluded
  "child_page": {
    "title": "Lacinato kale"
  }
}
</code></pre></div>
<blockquote><p><span>📘</span></p><p>Creating and updating <code>child_page</code> blocks</p><p>To create or update <code>child_page</code> type blocks, use the <a target="_blank" href="https://developers.notion.com/reference/post-page">Create a page</a> and the <a target="_blank" href="https://developers.notion.com/reference/patch-page">Update page</a> endpoints, specifying the ID of the parent page in the <code>parent</code> body param.</p></blockquote>
<p>Code block objects contain the following information within the <code>code</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>caption</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">Rich text object</a> text objects</td><td>The rich text in the caption of the code block.</td></tr><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">Rich text object</a> text objects</td><td>The rich text in the code block.</td></tr><tr><td><code>language</code></td><td>- <code>"abap"</code><br />
- <code>"arduino"</code><br />
- <code>"bash"</code><br />
- <code>"basic"</code><br />
- <code>"c"</code><br />
- <code>"clojure"</code><br />
- <code>"coffeescript"</code><br />
- <code>"c++"</code><br />
- <code>"c#"</code><br />
- <code>"css"</code><br />
- <code>"dart"</code><br />
- <code>"diff"</code><br />
- <code>"docker"</code><br />
- <code>"elixir"</code><br />
- <code>"elm"</code><br />
- <code>"erlang"</code><br />
- <code>"flow"</code><br />
- <code>"fortran"</code><br />
- <code>"f#"</code><br />
- <code>"gherkin"</code><br />
- <code>"glsl"</code><br />
- <code>"go"</code><br />
- <code>"graphql"</code><br />
- <code>"groovy"</code><br />
- <code>"haskell"</code><br />
- <code>"html"</code><br />
- <code>"java"</code><br />
- <code>"javascript"</code><br />
- <code>"json"</code><br />
- <code>"julia"</code><br />
- <code>"kotlin"</code><br />
- <code>"latex"</code><br />
- <code>"less"</code><br />
- <code>"lisp"</code><br />
- <code>"livescript"</code><br />
- <code>"lua"</code><br />
- <code>"makefile"</code><br />
- <code>"markdown"</code><br />
- <code>"markup"</code><br />
- <code>"matlab"</code><br />
- <code>"mermaid"</code><br />
- <code>"nix"</code><br />
- <code>"objective-c"</code><br />
- <code>"ocaml"</code><br />
- <code>"pascal"</code><br />
- <code>"perl"</code><br />
- <code>"php"</code><br />
- <code>"plain text"</code><br />
- <code>"powershell"</code><br />
- <code>"prolog"</code><br />
- <code>"protobuf"</code><br />
- <code>"python"</code><br />
- <code>"r"</code><br />
- <code>"reason"</code><br />
- <code>"ruby"</code><br />
- <code>"rust"</code><br />
- <code>"sass"</code><br />
- <code>"scala"</code><br />
- <code>"scheme"</code><br />
- <code>"scss"</code><br />
- <code>"shell"</code><br />
- <code>"sql"</code><br />
- <code>"swift"</code><br />
- <code>"typescript"</code><br />
- <code>"vb.net"</code><br />
- <code>"verilog"</code><br />
- <code>"vhdl"</code><br />
- <code>"visual basic"</code><br />
- <code>"webassembly"</code><br />
- <code>"xml"</code><br />
- <code>"yaml"</code><br />
- <code>"java/c/c++/c#"</code></td><td>The language of the code contained in the code block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "code",
  //...other keys excluded
  "code": {
   	"caption": [],
 		"rich_text": [{
      "type": "text",
      "text": {
        "content": "const a = 3"
      }
    }],
    "language": "javascript"
  }
}
</code></pre></div>
<p>Column lists are parent blocks for columns. They do not contain any information within the <code>column_list</code> property. </p>
<div><pre><code>{
  //...other keys excluded
  "type": "column_list",
  //...other keys excluded
  "column_list": {}
}
</code></pre></div>
<p>Columns are parent blocks for any block types listed in this reference except for other <code>column</code>s. They do not contain any information within the <code>column</code> property. They can only be appended to <code>column_list</code>s.</p>
<div><pre><code>{
  //...other keys excluded
  "type": "column",
  //...other keys excluded
  "column": {}
}
</code></pre></div>
<p>When creating a <code>column_list</code> block via <a target="_blank" href="https://developers.notion.com/reference/patch-block-children">Append block children</a>, the <code>column_list</code> must have at least two <code>column</code>s, and each <code>column</code> must have at least one child.</p>
<p>Follow these steps to fetch the content in a <code>column_list</code>: </p>
<ol>
<li>
<p>Get the <code>column_list</code> ID from a query to <a target="_blank" href="https://developers.notion.com/reference/get-block-children">Retrieve block children</a> for the parent page. </p>
</li>
<li>
<p>Get the <code>column</code> children from a query to Retrieve block children for the <code>column_list</code>. </p>
</li>
<li>
<p>Get the content in each individual <code>column</code> from a query to Retrieve block children for the unique <code>column</code> ID. </p>
</li>
</ol>
<p>Divider block objects do not contain any information within the <code>divider</code> property.</p>
<div><pre><code>{
  //...other keys excluded
  "type": "divider",
  //...other keys excluded
  "divider": {}
}
</code></pre></div>
<p>Embed block objects include information about another website displayed within the Notion UI. The <code>embed</code> property contains the following information:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>url</code></td><td><code>string</code></td><td>The link to the website that the embed block displays.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "embed",
  //...other keys excluded
  "embed": {
    "url": "https://companywebsite.com"
  }
}
</code></pre></div>
<blockquote><p><span>🚧</span></p><p>Differences in embed blocks between the Notion app and the API</p><p>The Notion app uses a 3rd-party service, iFramely, to validate and request metadata for embeds given a URL. This works well in a web app because Notion can kick off an asynchronous request for URL information, which might take seconds or longer to complete, and then update the block with the metadata in the UI after receiving a response from iFramely.</p><p>We chose not to call iFramely when creating embed blocks in the API because the API needs to be able to return faster than the UI, and because the response from iFramely could actually cause us to change the block type. This would result in a slow and potentially confusing experience as the block in the response would not match the block sent in the request.</p><p>The result is that embed blocks created via the API may not look exactly like their counterparts created in the Notion app.</p></blockquote>
<blockquote><p><span>👍</span></p><p>Vimeo video links can be embedded in a Notion page via the public API using the embed block type.</p><p>For example, the following object can be passed to the <a target="_blank" href="https://developers.notion.com/reference/patch-block-children">Append block children endpoint</a>:</p><div><pre><code>{
  "children": [
    {
      "embed": {
        "url": "https://player.vimeo.com/video/226053498?h=a1599a8ee9"
      }
    }
  ]
}
</code></pre></div><p>For other video sources, see <a target="_blank" href="https://developers.notion.com/reference/block#supported-video-types">Supported video types</a>.</p></blockquote>
<p>Equation block objects are represented as children of <a target="_blank" href="https://developers.notion.com/reference/block#paragraph">paragraph</a> blocks. They are nested within a <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text object</a> and contain the following information within the <code>equation</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>expression</code></td><td><code>string</code></td><td>A KaTeX compatible string.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "equation",
  //...other keys excluded
  "equation": {
    "expression": "e=mc^2"
  }
}
</code></pre></div>
<p>File block objects contain the following information within the <code>file</code> property: </p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>caption</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The caption of the file block.</td></tr><tr><td><code>type</code></td><td><code>"file"</code><p><code>"external"</code></p></td><td>A constant string.</td></tr><tr><td><code>file</code></td><td><a target="_blank" href="https://developers.notion.com/reference/file-object">file object</a></td><td>A file object that details information about the file contained in the block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "file",
  //...other keys excluded
  "file": {
		"caption": [],
    "type": "external",
    "external": {
 	  	"url": "https://companywebsite.com/files/doc.txt"
    }
  }
}
</code></pre></div>
<p>All heading block objects, <code>heading_1</code>, <code>heading_2</code>, and <code>heading_3</code>, contain the following information within their corresponding objects:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text of the heading.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr><tr><td><code>is_toggleable</code></td><td><code>boolean</code></td><td>Whether or not the heading block is a toggle heading or not. If <code>true</code>, then the heading block toggles and can support children. If <code>false</code>, then the heading block is a static heading block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "heading_1",
  //...other keys excluded
  "heading_1": {
    "rich_text": [{
      "type": "text",
      "text": {
        "content": "Lacinato kale",
        "link": null
      }
    }],
    "color": "default",
    "is_toggleable": false
  }
}
</code></pre></div>
<div><pre><code>{
  //...other keys excluded
  "type": "heading_2",
  //...other keys excluded
  "heading_2": {
    "rich_text": [{
      "type": "text",
      "text": {
        "content": "Lacinato kale",
        "link": null
      }
    }],
    "color": "default",
    "is_toggleable": false
  }
}
</code></pre></div>
<div><pre><code>{
  //...other keys excluded
  "type": "heading_3",
  //...other keys excluded
  "heading_3": {
    "rich_text": [{
      "type": "text",
      "text": {
        "content": "Lacinato kale",
        "link": null
      }
    }],
    "color": "default",
    "is_toggleable": false
  }
}
</code></pre></div>
<p>Image block objects contain a <a target="_blank" href="https://developers.notion.com/reference/file-object">file object</a> detailing information about the image. </p>
<div><pre><code>{
  //...other keys excluded
  "type": "image",
  //...other keys excluded
  "image": {
    "type": "external",
    "external": {
 	  	"url": "https://website.domain/images/image.png"
    }
  }
}
</code></pre></div>
<p>The image must be directly hosted. In other words, the <code>url</code> cannot point to a service that retrieves the image. The following image types are supported: </p>
<ul>
<li><code>.bmp</code></li>
<li><code>.gif</code></li>
<li><code>.heic</code></li>
<li><code>.jpeg</code></li>
<li><code>.jpg</code></li>
<li><code>.png</code></li>
<li><code>.svg</code></li>
<li><code>.tif</code></li>
<li><code>.tiff</code></li>
</ul>
<p><a target="_blank" href="https://developers.notion.com/docs/link-previews">Link Preview</a> block objects contain the originally pasted <code>url</code>:</p>
<div><pre><code>{
  //...other keys excluded
  "type": "link_preview",
  //...other keys excluded
  "link_preview": {
    "url": "https://github.com/example/example-repo/pull/1234"
  }
}
</code></pre></div>
<blockquote><p><span>🚧</span></p><p>The <code>link_preview</code> block can only be returned as part of a response. The API does not support creating or appending <code>link_preview</code> blocks.</p></blockquote>
<p>A mention block object is a child of a <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text object</a> that is nested within a <a target="_blank" href="https://developers.notion.com/reference/block#paragraph">paragraph block object</a>. This block type represents any <code>@</code> tag in the Notion UI, for a user, date, Notion page, Notion database, or a miniaturized version of a <a target="_blank" href="https://developers.notion.com/reference/unfurl-attribute-object">Link Preview</a>.  </p>
<p>A mention block object contains the following fields: </p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>"database"</code><p><code>"date"</code></p><p><code>"link_preview"</code></p><p><code>"page"</code></p><p><code>"user"</code></p></td><td>A constant string representing the type of the mention.</td></tr><tr><td><code>"database"</code><p><code>"date"</code></p><p><code>"link_preview"</code></p><p><code>"page"</code></p><p><code>"user"</code></p></td><td><code>object</code></td><td>An object with type-specific information about the mention.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "page",
  "page": {
    "id": "3c612f56-fdd0-4a30-a4d6-bda7d7426309"
  }
}
</code></pre></div>
<p>Numbered list item block objects contain the following information within the <code>numbered_list_item</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text displayed in the <code>numbered_list_item</code> block.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks (if any) of the <code>numbered_list_item</code> block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "numbered_list_item",
  "numbered_list_item": {
    "rich_text": [
      {
        "type": "text",
        "text": {
          "content": "Finish reading the docs",
          "link": null
        }
      }
    ],
    "color": "default"
  }
}
</code></pre></div>
<p>Paragraph block objects contain the following information within the <code>paragraph</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text displayed in the paragraph block.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks (if any) of the <code>paragraph</code> block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "paragraph",
  //...other keys excluded
  "paragraph": {
    "rich_text": [{
      "type": "text",
      "text": {
        "content": "Lacinato kale",
        "link": null
      }
    }],
    "color": "default"
}
</code></pre></div>
<div><pre><code>{
//...other keys excluded
	"type": "paragraph",
  	"paragraph":{
  		"rich_text": [
    		{
      		"type": "mention",
      		"mention": {
        		"type": "date",
        		"date": {
          		"start": "2023-03-01",
          		"end": null,
          		"time_zone": null
        		}
      		},
      		"annotations": {
        		"bold": false,
        		"italic": false,
        		"strikethrough": false,
        		"underline": false,
        		"code": false,
        		"color": "default"
      		},
      		"plain_text": "2023-03-01",
      		"href": null
    		},
    		{
          "type": "text",
      		"text": {
        		"content": " ",
        		"link": null
      		},
      		"annotations": {
        		"bold": false,
        		"italic": false,
        		"strikethrough": false,
        		"underline": false,
        		"code": false,
        		"color": "default"
      		},
      		"plain_text": " ",
      		"href": null
    		}
  		],
  		"color": "default"
  	}
}
</code></pre></div>
<p>A PDF block object represents a PDF that has been embedded within a Notion page. It contains the following fields:</p>
<div><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>caption</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>A caption, if provided, for the PDF block.</td></tr><tr><td><code>type</code></td><td><code>"external"</code><p><code>"file"</code></p></td><td>A constant string representing the type of PDF. <code>file</code> indicates a Notion-hosted file, and <code>external</code> represents a third-party link.</td></tr><tr><td><code>external</code><p><code>file</code></p></td><td><a target="_blank" href="https://developers.notion.com/reference/file-object">file object</a></td><td>An object containing type-specific information about the PDF.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
	"type": "pdf",
  //...other keys excluded
  "pdf": {
    "type": "external",
    "external": {
 	  	"url": "https://website.domain/files/doc.pdf"
    }
  }
}
</code></pre></div>
<p>Quote block objects contain the following information within the <code>quote</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text displayed in the quote block.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks, if any, of the quote block.</td></tr></tbody></table></div>
<div><pre><code>{
	//...other keys excluded
	"type": "quote",
   //...other keys excluded
   "quote": {
   	"rich_text": [{
      "type": "text",
      "text": {
        "content": "To be or not to be...",
        "link": null
      },
    	//...other keys excluded
    }],
    //...other keys excluded
    "color": "default"
   }
}
</code></pre></div>
<p>Similar to the Notion UI, there are two versions of a <code>synced_block</code> object: the original block that was created first and doesn't yet sync with anything else, and the duplicate block or blocks synced to the original.</p>
<blockquote><p><span>📘</span></p><p>An original synced block must be created before corresponding duplicate block or blocks can be made.</p></blockquote>
<p>Original synced block objects contain the following information within the <code>synced_block</code> property: </p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>synced_from</code></td><td><code>null</code></td><td>The value is always <code>null</code> to signify that this is an original synced block that does not refer to another block.</td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks, if any, of the <code>synced_block</code> block. These blocks will be mirrored in the duplicate <code>synced_block</code>.</td></tr></tbody></table></div>
<div><pre><code>{
    //...other keys excluded
  	"type": "synced_block",
    "synced_block": {
        "synced_from": null,
        "children": [
            {
                "callout": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Callout in synced block"
                            }
                        }
                    ]
                }
            }
        ]
    }
}
</code></pre></div>
<p>Duplicate synced block objects contain the following information within the <code>synced_from</code> object: </p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>string</code> (enum)</td><td>The type of the synced from object.<p>
Possible values are:<br />
- <code>"block_id"</code></p></td></tr><tr><td><code>block_id</code></td><td><code>string</code> (UUIDv4)</td><td>An identifier for the original <code>synced_block</code>.</td></tr></tbody></table></div>
<div><pre><code>{
    //...other keys excluded
  	"type": "synced_block",
    "synced_block": {
        "synced_from": {
            "block_id": "original_synced_block_id"
        }
    }
}
</code></pre></div>
<blockquote><p><span>🚧</span></p><p>The API does not supported updating synced block content.</p></blockquote>
<p>Table block objects are parent blocks for table row children. Table block objects contain the following fields within the <code>table</code> property: </p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>table_width</code></td><td><code>integer</code></td><td>The number of columns in the table.<p><strong>Note that this cannot be changed via the public API once a table is created.</strong></p></td></tr><tr><td><code>has_column_header</code></td><td><code>boolean</code></td><td>Whether the table has a column header. If <code>true</code>, then the first row in the table appears visually distinct from the other rows.</td></tr><tr><td><code>has_row_header</code></td><td><code>boolean</code></td><td>Whether the table has a header row. If <code>true</code>, then the first column in the table appears visually distinct from the other columns.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "table",
  "table": {
    "table_width": 2,
    "has_column_header": false,
    "has_row_header": false
  }
}
</code></pre></div>
<blockquote><p><span>🚧</span></p><p><code>table_width</code> can only be set when the table is first created.</p><p>Note that the number of columns in a table can only be set when the table is first created. Calls to the Update block endpoint to update <code>table_width</code> fail.</p></blockquote>
<p>Follow these steps to fetch the <code>table_row</code>s of a <code>table</code>: </p>
<ol>
<li>
<p>Get the <code>table</code> ID from a query to <a target="_blank" href="https://developers.notion.com/reference/get-block-children">Retrieve block children</a> for the parent page. </p>
</li>
<li>
<p>Get the <code>table_rows</code> from a query to Retrieve block children for the <code>table</code>. </p>
</li>
</ol>
<p>A <code>table_row</code> block object contains the following fields within the <code>table_row</code> property:</p>
<div><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>cells</code></td><td><code>array</code> of array of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>An array of cell contents in horizontal display order. Each cell is an array of rich text objects.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "table_row",
  "table_row": {
    "cells": [
      [
        {
          "type": "text",
          "text": {
            "content": "column 1 content",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "column 1 content",
          "href": null
        }
      ],
      [
        {
          "type": "text",
          "text": {
            "content": "column 2 content",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "column 2 content",
          "href": null
        }
      ],
      [
        {
          "type": "text",
          "text": {
            "content": "column 3 content",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "column 3 content",
          "href": null
        }
      ]
    ]
  }
}
</code></pre></div>
<blockquote><p><span>📘</span></p><p>When creating a table block via the <a target="_blank" href="https://developers.notion.com/reference/patch-block-children">Append block children</a> endpoint, the <code>table</code> must have at least one <code>table_row</code> whose <code>cells</code> array has the same length as the <code>table_width</code>.</p></blockquote>
<p>Table of contents block objects contain the following information within the <code>table_of_contents</code> property:</p>
<div><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
	"type": "table_of_contents",
  "table_of_contents": {
  	"color": "default"
  }
}
</code></pre></div>
<blockquote><p><span>❗️</span></p><p>Deprecation Notice</p><p>As of March 27, 2023 creation of template blocks will no longer be supported.</p></blockquote>
<p>Template blocks represent <a target="_blank" href="https://www.notion.so/help/template-buttons">template buttons</a> in the Notion UI.</p>
<p>Template block objects contain the following information within the <code>template</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text displayed in the title of the template.</td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks, if any, of the template block. These blocks are duplicated when the template block is used in the UI.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "template": {
    "rich_text": [
      {
        "type": "text",
        "text": {
          "content": "Add a new to-do",
          "link": null
        },
        "annotations": {
          //...other keys excluded
        },
        "plain_text": "Add a new to-do",
        "href": null
      }
    ]
  }
}
</code></pre></div>
<p>To do block objects contain the following information within the <code>to_do</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text displayed in the To do block.</td></tr><tr><td><code>checked</code></td><td><code>boolean</code> (optional)</td><td>Whether the To do is checked.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks, if any, of the To do block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "to_do",
  "to_do": {
    "rich_text": [{
      "type": "text",
      "text": {
        "content": "Finish Q3 goals",
        "link": null
      }
    }],
    "checked": false,
    "color": "default",
    "children":[{
      "type": "paragraph"
      // ..other keys excluded
    }]
  }
}
</code></pre></div>
<p>Toggle block objects contain the following information within the <code>toggle</code> property:</p>
<div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>rich_text</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/rich-text">rich text objects</a></td><td>The rich text displayed in the Toggle block.</td></tr><tr><td><code>color</code></td><td><code>string</code> (enum)</td><td>The color of the block. Possible values are:<p>
- <code>"blue"</code><br />
- <code>"blue_background"</code><br />
- <code>"brown"</code><br />
-  <code>"brown_background"</code><br />
- <code>"default"</code><br />
- <code>"gray"</code><br />
- <code>"gray_background"</code><br />
- <code>"green"</code><br />
- <code>"green_background"</code><br />
- <code>"orange"</code><br />
- <code>"orange_background"</code><br />
- <code>"yellow"</code><br />
- <code>"green"</code><br />
- <code>"pink"</code><br />
- <code>"pink_background"</code><br />
- <code>"purple"</code><br />
- <code>"purple_background"</code><br />
- <code>"red"</code><br />
- <code>"red_background"</code><br />
- <code>"yellow_background"</code></p></td></tr><tr><td><code>children</code></td><td><code>array</code> of <a target="_blank" href="https://developers.notion.com/reference/block">block objects</a></td><td>The nested child blocks, if any, of the Toggle block.</td></tr></tbody></table></div>
<div><pre><code>{
  //...other keys excluded
  "type": "toggle",
  "toggle": {
    "rich_text": [{
      "type": "text",
      "text": {
        "content": "Additional project details",
        "link": null
      }
      //...other keys excluded
    }],
    "color": "default",
    "children":[{
      "type": "paragraph"
      // ..other keys excluded
    }]
  }
}
</code></pre></div>
<p>Video block objects contain a <a target="_blank" href="https://developers.notion.com/reference/file-object">file object</a> detailing information about the image. </p>
<div><pre><code>{
  "type": "video",
  //...other keys excluded
  "video": {
    "type": "external",
    "external": {
 	  	"url": "https://companywebsite.com/files/video.mp4"
    }
  }
}
</code></pre></div>
<ul>
<li><code>.amv</code></li>
<li><code>.asf</code></li>
<li><code>.avi</code></li>
<li><code>.f4v</code></li>
<li><code>.flv</code></li>
<li><code>.gifv</code></li>
<li><code>.mkv</code></li>
<li><code>.mov</code></li>
<li><code>.mpg</code></li>
<li><code>.mpeg</code></li>
<li><code>.mpv</code></li>
<li><code>.mp4</code></li>
<li><code>.m4v</code></li>
<li><code>.qt</code></li>
<li><code>.wmv</code></li>
<li>YouTube video links that include <code>embed</code> or <code>watch</code>.<br />
E.g. <code>https://www.youtube.com/watch?v=[id]</code>, <code>https://www.youtube.com/embed/[id]</code></li>
</ul>
<blockquote><p><span>📘</span></p><p>Vimeo video links are not currently supported by the video block type. However, they can be embedded in Notion pages using the <code>embed</code> block type. See <a target="_blank" href="https://developers.notion.com/reference/block#embed">Embed</a> for more information.</p></blockquote></div>`,author:"",favicon:"https://dev.notion.so/front-static/favicon.ico",source:"developers.notion.com",published:"",ttr:707}},_={object:i,id:b,parent:p,created_time:h,last_edited_time:s,created_by:k,last_edited_by:u,has_children:f,archived:g,type:y,bookmark:m},v="block",x="0d2f6e7c-c77f-40f6-a7dc-429d62e265ef",w={type:"page_id",page_id:"2712e341-754a-41ae-a9ce-4c0bb4b18c52"},j="2023-03-18T12:21:00.000Z",T="2023-10-07T07:04:00.000Z",q={object:"user",id:"e0446ede-dde6-457c-b535-d2b19f40b45a"},A={object:"user",id:"e0446ede-dde6-457c-b535-d2b19f40b45a"},D=!1,F=!1,I="bookmark",P={caption:[{type:"text",text:{content:"this is bookmark caption",link:null},annotations:{bold:!1,italic:!1,strikethrough:!1,underline:!1,code:!1,color:"default"},plain_text:"this is bookmark caption",href:null}],url:"https://example.com",site_meta:{title:"Example Domain"}},N={object:v,id:x,parent:w,created_time:j,last_edited_time:T,created_by:q,last_edited_by:A,has_children:D,archived:F,type:I,bookmark:P},De={title:"Blocks/Bookmark",component:l,tags:["autodocs"]},e={args:{block:_}},t={args:{block:N}};var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    block: (BookmarkObject as BookmarkBlockObject)
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,r,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    block: (BookmarkNoOgMetaObject as BookmarkBlockObject)
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const Fe=["Default","NoOgMeta"];export{e as Default,t as NoOgMeta,Fe as __namedExportsOrder,De as default};
