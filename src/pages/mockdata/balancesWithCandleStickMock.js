import balancesData from "./balancesMock";

export default () => {
  return balancesData.map(({ id, name, status, data }) => {
    const splineData = getSplineData(data);
    return {
      id,
      name,
      status,
      data: splineData,
      candleStickData: mockCandleStickData(splineData),
    };
  });
};

const getSplineData = (data) => {
  const now = new Date();
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);
  const startDate = new Date(now.setDate(now.getDate() - 30));
  const dateInterval = 1;

  return data.map((value, index) => {
    const time = startDate.setDate(startDate.getDate() + dateInterval);
    return { x: time, y: value };
  });
};

const mockCandleStickData = (data) => {
  return data.map((item, index, elements) => {
    const time = item.x;
    const open = item.y;
    const close =
      index + 1 < elements.length ? elements[index + 1].y : open + 1;
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
  return [randomNumber(max, max + 10), randomNumber(min, min - 10)];
};
