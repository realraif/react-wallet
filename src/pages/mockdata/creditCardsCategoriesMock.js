import balancesData from "./balancesMock";

export default () => {
  return balancesData.map(({ id, name, cc }) => ({
    id,
    name,
    cc: cc.map((credit) => ({
      id: credit.id,
      expenses: credit.expenses,
      categories: categories.map((category) => ({
        name: category,
        data: mockExpensesData(),
      })),
    })),
  }));
};

const categories = [
  "food",
  "rent",
  "transportaion",
  "business",
  "workout",
  "personal",
  "bills",
];

const mockExpensesData = () => {
  const trendRange = 30;
  const now = new Date();
  const startDate = new Date(now.setDate(now.getDate() - trendRange));

  return [...Array(trendRange).keys()].map((index) => {
    const time = startDate.setDate(startDate.getDate() + index);
    const expenses = randomNumber(0, 500);
    return [time, expenses];
  });
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
