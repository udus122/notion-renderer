import { Client } from "@notionhq/client";

import "dotenv/config";

export const client = new Client({
  auth: process.env.NOTION_TOKEN,
});
