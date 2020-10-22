import getBalancesData from "./balancWithTrendMock";

export default () => {
  return getBalancesData().map(({ id, name, status, data }) => {
    return {
      id,
      name,
      status,
      data,
      candleStickData: mockCandleStickData(data),
    };
  });
};

const mockCandleStickData = (data) => {
  return data.map((item, index, elements) => {
    const time = item.x;
    const open = item.y;
    const close =
      index + 1 < elements.length ? elements[index + 1].y : open + 100;
    const [high, low] = getRandomHighLowValues([open, close]);
    return [time, open, high, low, close];
  });
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomHighLowValues = (candleEdges) => {
  const [min, max] = candleEdges.sort((a, b) => {
    return a - b;
  });
  return [randomNumber(max, max + 100), randomNumber(min, min - 100)];
};
