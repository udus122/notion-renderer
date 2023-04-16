import * as React from "react";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"code"> & {
  // for customize
  richTextItem?: RichTextItemResponse;
};

export const InlineCode: React.FC<Props> = ({ children }) => {
  return <code className="notion_inline_code">{children}</code>;
};
