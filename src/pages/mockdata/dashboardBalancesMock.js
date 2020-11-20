import balancesData from "./balancesMock";

export default (timeFrame) => {
  return balancesData.map(({ cc, ...balance }) => {
    const trend = mockBalanceTrend(timeFrame);
    const allUSStates = cc.reduce((arr, { states }) => arr.concat(states), []);
    const creditCards = cc.map((credit) => ({
      ...credit,
      parentId: balance.id,
    }));
    return {
      ...balance,
      trend,
      cc: creditCards,
      states: [...new Set(allUSStates)],
    };
  });
};

const mockBalanceTrend = (timeFrame) => {
  const trendRange = 14;
  let expensesAround = randomNumber(0, 500);

  return [...Array(trendRange).keys()].map((index) => {
    const expenses = randomNumber(expensesAround - 50, expensesAround + 50);
    expensesAround = expenses;
    return expenses;
  });
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
