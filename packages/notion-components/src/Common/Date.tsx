import { fromZonedTime, format as formatDate } from "date-fns-tz";

import type { DateResponse } from "@udus/notion-types";

type Props = {
  date: DateResponse;
  format?: string;
};

export const DateComponent: React.FC<Props> = ({
  date,
  format = "yyyy-MM-dd",
}) => {
  if (!date) return null;

  const time_zone = date.time_zone ?? "UTC";
  const start = fromZonedTime(date.start, time_zone);
  const end = date.end && fromZonedTime(date.end, time_zone);

  return (
    <>
      <span>{formatDate(start, format)}</span>
      {end && (
        <span>
          <span> → </span>
          <span>{formatDate(end, format)}</span>
        </span>
      )}
    </>
  );
};
