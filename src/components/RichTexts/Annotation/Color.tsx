import * as React from "react";

import { generateBlockColorClass } from "@/libs";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"span"> & {
  richTextItem: RichTextItemResponse;
};

export const Color: React.FC<Props> = ({ richTextItem, children }) => {
  return (
    <span
      className={`${generateBlockColorClass(richTextItem.annotations.color)}`}
    >
      {children}
    </span>
  );
};
