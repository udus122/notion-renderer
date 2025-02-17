import type { ColorAnnotationItem } from "@udus/notion-types";

export const Color: ColorAnnotationItem = ({ richTextItem, children }) => {
  return (
    <span className={`notion-color-${richTextItem.annotations.color}`}>
      {children}
    </span>
  );
};
