export const formatDateForTab = (dayOffset: number): string => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + dayOffset);

  const options = { month: "short", day: "numeric", weekday: "short" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    targetDate
  );

  return formattedDate;
};
