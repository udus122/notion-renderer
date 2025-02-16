import {
  type Params,
  type LinkTypeData,
  type PhotoTypeData,
  type VideoTypeData,
  type RichTypeData,
  extract,
} from "@extractus/oembed-extractor";

import type { Result } from "../../types/utils.js";

export const fetchOembed = async (
  url: string,
  params: Params = {},
): Promise<
  Result<LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData>
> => {
  try {
    const oembed = (await extract(url, params)) as
      | LinkTypeData
      | PhotoTypeData
      | VideoTypeData
      | RichTypeData;
    return { ok: true, data: oembed };
  } catch (error) {
    return {
      ok: false,
      data: error as Error,
    };
  }
};
