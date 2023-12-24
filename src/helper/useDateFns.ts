import { format } from "date-fns";

export const convertDateTimeAgo = (
  date: string | Date,
  dateFormat: string = "EEE, MMM dd"
): string => {
  if (date) {
    const jsDate = new Date(date);
    return format(jsDate, dateFormat);
  }

  return "Etibarsız tarix";
};
