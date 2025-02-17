import type { EmojiRequest, TextRequest } from "./common";

export type IconObject =
  | {
      type: "emoji";
      emoji: EmojiRequest;
    }
  | {
      type: "external";
      external: {
        url: TextRequest;
      };
    }
  | {
      type: "file";
      file: {
        url: string;
        expiry_time: string;
      };
    }
  | null;
