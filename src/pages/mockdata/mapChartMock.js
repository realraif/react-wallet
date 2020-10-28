import balancesData from "./balancesMock";

export default () => {
  const statesData = getStatesExpenses(balancesData);
  const mapData = [];

  for (const [stateCode, { totalExpenses, creditCards }] of Object.entries(
    statesData
  )) {
    mapData.push({
      "hc-key": stateCode,
      id: stateCode,
      value: totalExpenses,
      info: creditCards,
    });
  }

  return mapData;
};

const getStatesExpenses = (balances) => {
  const statesData = {};

  balances.forEach((balance) => {
    balance.cc.forEach(({ states, id }) => {
      const cardInfo = {
        id,
        bankName: balance.name,
        bankId: balance.id,
        expenses: 0,
      };

      states.forEach(({ code, expenses }) => {
        statesData[code] = getStateData(statesData[code], expenses, cardInfo);
        cardInfo.expenses += expenses;
      });
    });
  });

  return statesData;
};

const getStateData = (state, expenses, cardInfo) => {
  let stateData = state || { totalExpenses: 0, creditCards: [] };
  stateData.totalExpenses += expenses;
  stateData.creditCards.push(cardInfo);
  return stateData;
};
