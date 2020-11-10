const labels = [
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
];

const incomes = ["Salary", "Bonus", "Investment", "Interest"];
const expenses = ["Home", "Food", "Bills", "Other"];

export default () => {
  const incomesSeries = getSeriesData(incomes);
  const expensesSeries = getSeriesData(expenses);

  return {
    incomes: { seriesData: incomesSeries, bars: incomes },
    expenses: { seriesData: expensesSeries, bars: expenses },
  };
};

const getSeriesData = (bars) => {
  return labels.map((label) => {
    return bars.reduce(
      (obj, bar) => ({
        ...obj,
        [bar]: randomNumber(0, 500),
      }),
      { time: label }
    );
  });
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
