import type { CoverObject } from "@udus/notion-types";

type Props = {
  cover: CoverObject;
};

export const Cover: React.FC<Props> = ({ cover }) => {
  if (!cover) {
    return null;
  }
  if (cover.type === "external") {
    return (
      <img
        className="notion-cover"
        src={cover.external.url}
        alt="notion cover"
      />
    );
  }
  if (cover.type === "file") {
    return (
      <img className="notion-cover" src={cover.file.url} alt="notion cover" />
    );
  }

  console.warn("unknown cover type");
  return null;
};
