import type { FileObject } from "@udus/notion-types";
import type { FC } from "react";

type Props = {
  file: FileObject;
};

export const File: FC<Props> = ({ file }) => {
  const fileUrl =
    file.type === "external"
      ? file.external.url
      : file.type === "file"
        ? file.file.url
        : "";

  const filename =
    file.name ??
    // TODO: Fix this
    decodeURIComponent(new URL(fileUrl).pathname.split("/").slice(-1)[0] ?? "");

  return (
    <a href={fileUrl} className="notion-file">
      <span className="notion-file-title">
        <span className="notion-file-icon">
          <img src="https://www.notion.so/icons/document_gray.svg" alt="" />
        </span>
        <span className="notion-file-name">{filename}</span>
      </span>
    </a>
  );
};
