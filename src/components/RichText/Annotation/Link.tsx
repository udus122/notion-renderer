import * as React from "react";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"a"> & { richTextItem: RichTextItemResponse };

export const Link: React.FC<Props> = ({ richTextItem, children }) => (
  <a href={richTextItem.href ?? ""} className="notion_link">
    {children}
  </a>
);
