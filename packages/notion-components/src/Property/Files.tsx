import { File } from "../Common/File";

import type { FilesPropertyItemComponent } from "@udus/notion-types";

export const FilesProperty: FilesPropertyItemComponent = ({ propertyItem }) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-files">
      {propertyItem.files.map((file) => (
        <File key={file.name} file={file} />
      ))}
    </div>
  );
};
