import { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import type { BlockComponentProps } from "@/types";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"hr"> &
  BlockComponentProps<DividerBlockObjectResponse>;

export const Divider: FC<Props> = ({ block }) => {
  return <hr id={block?.id ?? ""} className="notion_divider" />;
};
