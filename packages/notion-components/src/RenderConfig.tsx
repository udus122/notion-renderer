import { AnnotationItemProvider } from "./Mapper/Annotation";
import { BlockProvider } from "./Mapper/Block";
import { LinkProvider } from "./Mapper/Link";
import { PropertyItemProvider } from "./Mapper/Property";
import { RichTextItemProvider } from "./Mapper/RichText";

import type { LinkProps } from "@udus/notion-types";
import type { AnnotationItemMapper } from "@udus/notion-types";
import type { BlockMapper } from "@udus/notion-types";
import type { PropertyItemMapper } from "@udus/notion-types";
import type { RichTextItemMapper } from "@udus/notion-types";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  blockMapper?: BlockMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
  propertyMapper?: PropertyItemMapper;
  theme?: "light" | "dark";
};

export const RenderConfig: FC<Props> = ({
  children,
  theme,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  propertyMapper,
  LinkComponent,
}) => {
  return (
    <div className={`notion-root ${theme ? `notion-${theme}` : ""}`}>
      <BlockProvider mapper={blockMapper}>
        <RichTextItemProvider mapper={richTextItemMapper}>
          <AnnotationItemProvider mapper={annotationMapper}>
            <LinkProvider link={LinkComponent}>
              <PropertyItemProvider mapper={propertyMapper}>
                {children}
              </PropertyItemProvider>
            </LinkProvider>
          </AnnotationItemProvider>
        </RichTextItemProvider>
      </BlockProvider>
    </div>
  );
};
