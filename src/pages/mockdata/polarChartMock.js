const categories = [
  "April",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default {
  incomes: {
    series: [{ name: "incomes", data: [1, 3, 4, 5, 3, 1, 3] }],
    categories,
  },
  expenses: {
    series: [{ name: "expenses", data: [5, 3, 6, 2, 1, 3, 4] }],
    categories,
  },
};
