import balancesTableMock from "./SelectBalanceSection/BalancesTable/mockdata";
import multisplineMock from "./SelectBalanceSection/BalanceSplineChart/mockdata";
import candleStickMock from "./BalanceCandlestick/mockdata";

const fetchBalancesTableData = (timeframe) => {
  return Promise.resolve({ data: balancesTableMock });
};

const fetchBalancesMultiSplineData = (timeframe) => {
  return Promise.resolve({ data: multisplineMock });
};

const fetchBalancesCandlestickData = (timeframe) => {
  return Promise.resolve({ data: candleStickMock });
};

const fetchBalances = (timeframe) => {
  return Promise.all([
    fetchBalancesTableData(timeframe),
    fetchBalancesMultiSplineData(timeframe),
    fetchBalancesCandlestickData(timeframe),
  ]);
};

export default { fetchBalances };
