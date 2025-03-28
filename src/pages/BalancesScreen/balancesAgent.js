import getBalancesWithCandleStickMock from "pages/mockdata/balancesWithCandleStickMock";

const fetchBalancesMultiSplineData = (timeFrame) => {
  return Promise.resolve({ data: getBalancesWithCandleStickMock(timeFrame) });
};

const fetchBalances = (timeFrame) => {
  return fetchBalancesMultiSplineData(timeFrame);
};

const balancesAgent = { fetchBalances };

export default balancesAgent;
