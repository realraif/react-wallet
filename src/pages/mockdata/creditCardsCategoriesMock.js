import balancesData from "./balancesMock";

export default () => {
  return balancesData.map(({ id, name, cc }) => ({
    id, name, 
    cc: cc.map((credit) => ({
      id: credit.id,
      expenses: credit.expenses
    })),
  }));
};
