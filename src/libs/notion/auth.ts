import { Client } from "@notionhq/client";

import "dotenv/config";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
