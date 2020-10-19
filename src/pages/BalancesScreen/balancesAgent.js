import balancesTrendsMock from "pages/Dashboard/Balances/mockdata";
import getCandleStickMock from "./BalanceCandlestick/mockdata";

const fetchBalancesMultiSplineData = (timeframe) => {
  return Promise.resolve({ data: balancesTrendsMock });
};

const fetchBalancesCandlestickData = (timeframe) => {
  return Promise.resolve({ data: getCandleStickMock() });
};

const fetchBalances = (timeframe) => {
  return Promise.all([
    fetchBalancesMultiSplineData(timeframe),
    fetchBalancesCandlestickData(timeframe),
  ]);
};

export default { fetchBalances };
