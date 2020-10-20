import getBalancesWithCandleStickMock from "pages/mockdata/balancesWithCandleStick";

const fetchBalancesMultiSplineData = (timeframe) => {
  return Promise.resolve({ data: getBalancesWithCandleStickMock() });
};

const fetchBalances = (timeframe) => {
  return fetchBalancesMultiSplineData(timeframe);
};

export default { fetchBalances };
