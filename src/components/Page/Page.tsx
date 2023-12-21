import { PropertyItemProvider } from "../Mapper/Property.js";

import { PageMeta } from "./PageMeta.js";

import type { PropertyItemMapper } from "../../types/notion/mapper/propertyItem.js";
import type { PageObject } from "../../types/notion/page.js";
import type { FC } from "react";

type Props = {
  page: PageObject;
  displayProperties?: Array<string>;
  hideProperties?: boolean;
  hideCover?: boolean;
  hideIcon?: boolean;
  hideTitle?: boolean;
  propertyMapper?: PropertyItemMapper;
  theme?: "light" | "dark";
};

export const Page: FC<Props> = ({
  page,
  displayProperties,
  hideCover = false,
  hideIcon = false,
  hideTitle = false,
  hideProperties = false,
  propertyMapper,
  theme = "light",
}) => {
  return (
    <div className={`notion-root notion-${theme}`}>
      {page && (
        <PropertyItemProvider mapper={propertyMapper}>
          <PageMeta
            page={page}
            displayProperties={displayProperties}
            hideCover={hideCover}
            hideIcon={hideIcon}
            hideTitle={hideTitle}
            hideProperties={hideProperties}
          />
        </PropertyItemProvider>
      )}
    </div>
  );
};
