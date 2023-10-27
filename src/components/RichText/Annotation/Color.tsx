import type { ColorAnnotationItem } from "../../../types/notion/annotation/color.js";

export const Color: ColorAnnotationItem = ({ richTextItem, children }) => {
  return (
    <span className={`notion-color-${richTextItem.annotations.color}`}>
      {children}
    </span>
  );
};
