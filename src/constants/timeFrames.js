const WEEK = { value: 7, label: "past week", status: "this week" };
const MONTH = { value: 30, label: "past 30 days", status: "this month" };
const QUARTER = {
  value: 90,
  label: "past quarter",
  status: "this quarter",
};
const YEAR = { value: 365, label: "past year", status: "this year" };

const timeFrameOptions = [WEEK, MONTH, QUARTER, YEAR];

export default timeFrameOptions;
