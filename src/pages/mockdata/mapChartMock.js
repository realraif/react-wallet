import balancesData from "./balancesMock";

export default () => {
  const statesExpenses = getStatesExpenses(balancesData);
  const mapData = [];

  for (const [stateCode, { value, data }] of Object.entries(statesExpenses)) {
    mapData.push({
      "hc-key": stateCode,
      value,
      data,
    });
  }

  return mapData;
};

const getStatesExpenses = (balances) => {
  const statesExpenses = {};

  balances.forEach(({ cc, name, id }) => {
    cc.forEach(({ states, id, expenses }) => {
      const cardInfo = { id, bankName: name, bankId: id };
      states.forEach((stateCode) => {
        if (!statesExpenses[stateCode]) {
          statesExpenses[stateCode] = { value: 0, data: [] };
        }
        statesExpenses[stateCode].value += expenses;
        statesExpenses[stateCode].data.push(cardInfo);
      });
    });
  });

  return statesExpenses;
};
