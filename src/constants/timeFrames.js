const WEEK = { value: 7, label: "past week", status: "this week" };
const MONTH = { value: 30, label: "past 30 days", status: "this month" };
const QUARTER = {
  value: 30 * 3,
  label: "past quarter",
  status: "this quarter",
};
const YEAR = { value: 365, label: "past year", status: "this year" };

export default [WEEK, MONTH, QUARTER, YEAR];
