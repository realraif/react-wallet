import balancesData from "pages/Dashboard/Balances/mockdata";
import getCandleStickData from "./BalanceCandlestick/mockdata";

export default () => {
  return balancesData.map((balance) => ({
    ...balance,
    candleStickData: getCandleStickData(balance.data),
  }));
};
