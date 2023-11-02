import { zonedTimeToUtc, format as formatDate } from "date-fns-tz";

import type { DatePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

type Props = {
  date: DatePropertyItemObjectResponse["date"];
  format?: string;
};

export const DateComponent: React.FC<Props> = ({
  date,
  format = "yyyy-MM-dd",
}) => {
  if (!date) return null;

  const time_zone = date.time_zone ?? "UTC";
  const start = zonedTimeToUtc(date.start, time_zone);
  const end = date.end && zonedTimeToUtc(date.end, time_zone);

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
