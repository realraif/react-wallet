import balancesData from "pages/Dashboard/Balances/mockdata";

export default () => {
  return balancesData.map((balance) => ({
    ...balance,
    candleStickData: mockCandleStickData(balance.data),
  }));
};

const mockCandleStickData = (data) => {
  const now = new Date();
  const startDate = new Date(now.setDate(now.getDate() - 30));
  const dateInterval = 1;

  return data.map((item, index) => {
    const time = startDate.setDate(startDate.getDate() + dateInterval);
    const open = item;
    const close = data[index + 1];
    const [high, low] = getRandomHighLowValues([open, close]);
    return [time, open, high, low, close];
  });
};

const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getRandomHighLowValues = (candleEdges) => {
  const [min, max] = candleEdges.sort((a, b) => {
    return a - b;
  });
  return [randomNumber(max, max + 10), randomNumber(min, min - 10)];
};
