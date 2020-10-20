import getBalancesWithCandleStickMock from "./mockdata";

const fetchBalancesMultiSplineData = (timeframe) => {
  return Promise.resolve({ data: getBalancesWithCandleStickMock() });
};

const fetchBalances = (timeframe) => {
  return fetchBalancesMultiSplineData(timeframe);
};

export default { fetchBalances };
