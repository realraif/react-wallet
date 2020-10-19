import getBalancesDataWithCandleStick from "./mockdata";

const fetchBalancesMultiSplineData = (timeframe) => {
  return Promise.resolve({ data: getBalancesDataWithCandleStick() });
};

const fetchBalances = (timeframe) => {
  return fetchBalancesMultiSplineData(timeframe);
};

export default { fetchBalances };
