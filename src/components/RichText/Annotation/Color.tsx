import type { ColorAnnotationItem } from "../../../types/notion/annotation/color.js";

export const Color: ColorAnnotationItem = ({ richTextItem, children }) => {
  return (
    <span className={`notion_color_${richTextItem.annotations.color}`}>
      {children}
    </span>
  );
};
