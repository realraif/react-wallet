import balancesData from "./balancesMock";

export default () => {
  const statesExpenses = getStatesExpenses(balancesData);
  const mapData = [];

  for (const [stateCode, { value, info }] of Object.entries(statesExpenses)) {
    mapData.push({
      "hc-key": stateCode,
      id: stateCode,
      value,
      info,
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
          statesExpenses[stateCode] = { value: 0, info: [] };
        }
        statesExpenses[stateCode].value += expenses;
        statesExpenses[stateCode].info.push(cardInfo);
      });
    });
  });

  return statesExpenses;
};
