
```typescript
// example usage of the NotionAPIWrangler class
const client = new Client({
  auth: process.env.NOTION_TOKEN,
});
const wrangler = new NotionAPIWrangler(client);
const block = await wrangler.blocks.children.list({
  block_id: '7ed3a6eebb5e4cdfa94433684d7c56bf',
});
console.log(block);
```
