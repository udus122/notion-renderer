import type { BlockBlockProps } from "./block";
import type { Overwrite } from "../../utils";
import type { TextRequest } from "../common/common";
import type { RichTextItemType } from "../richText/richTextItem";
import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type PdfBlockObject = Overwrite<
  PdfBlockObjectResponse,
  {
    pdf:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItemType>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItemType>;
        };
  }
>;

export type PdfBlockProps = BlockBlockProps<PdfBlockObject>;

export type PdfBlock = ComponentType<PdfBlockProps>;
