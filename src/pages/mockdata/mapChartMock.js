import balancesData from "./balancesMock";

const mapChartMock = () => {
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
      states.forEach(({ code, expenses }) => {
        const creditInfo = {
          id,
          bankName: balance.name,
          bankId: balance.id,
          expenses,
        };
        statesData[code] = getStateData(statesData[code], expenses, creditInfo);
      });
    });
  });

  return statesData;
};

const getStateData = (state, expenses, creditInfo) => {
  let stateData = state || { totalExpenses: 0, creditCards: [] };
  stateData.totalExpenses += expenses;
  stateData.creditCards.push(creditInfo);
  return stateData;
};

export default mapChartMock;
