import { File } from "../Common/File.js";

import type { FilesPropertyItemComponent } from "../../types/notion/property/files.js";

export const FilesProperty: FilesPropertyItemComponent = ({ propertyItem }) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-files">
      {propertyItem.files.map((file) => (
        <File file={file} />
      ))}
    </div>
  );
};
