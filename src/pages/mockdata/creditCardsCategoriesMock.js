import balancesData, { categories } from "./balancesMock";

const creditCardsMock = () => {
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

const mockExpensesData = () => {
  const trendRange = 30;
  const now = new Date();
  const startDate = new Date(now.setDate(now.getDate() - trendRange));
  let expensesAround = randomNumber(0, 500);

  return [...Array(trendRange).keys()].map((index) => {
    const time = startDate.setDate(startDate.getDate() + index);
    const expenses = randomNumber(expensesAround - 50, expensesAround + 50);
    expensesAround = expenses;
    return [time, expenses];
  });
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default creditCardsMock;
