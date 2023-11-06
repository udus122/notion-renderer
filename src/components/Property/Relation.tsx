// import { extractTitle } from "../../utils.js";
// import { Icon } from "../index.js";
// import { useMapper } from "../Mapper/hooks.js";
// import { RichText } from "../RichText/RichText.js";

import type { RelationPropertyItemComponent } from "../../types/notion/propertyItem/relation.js";

export const RelationProperty: RelationPropertyItemComponent = ({
  propertyItem,
}) => {
  console.warn("RelationProperty is not supported yet.");
  return null;
  // const { Link } = useMapper();
  // return (
  //   <div id={propertyItem.id} className="notion-property-item notion-relation">
  //     {propertyItem.relation?.map((r) => {
  //       return (
  //         r?.page && (
  //           <Link key={r.id} href={`/${r.id}`}>
  //             <div>
  //               <Icon icon={r.page.icon} />
  //               <RichText richText={extractTitle(r.page)} />
  //             </div>
  //           </Link>
  //         )
  //       );
  //     }) ?? null}
  //   </div>
  // );
};
