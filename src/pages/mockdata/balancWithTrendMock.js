import balancesData from "./balancesMock";

export default () => {
  return balancesData.map((balance) => {
    return {
      ...balance,
      data: getBalanceTrend(100),
    };
  });
};

const getBalanceTrend = (trendLength) => {
  const trend = [];
  const startDate = getStartDate(trendLength);

  const daysInterval = 1;
  let index = 0;
  while (index < trendLength) {
    const x = startDate.setDate(startDate.getDate() + daysInterval);
    const y = randomNumber(-200, 1000);
    trend.push({ x, y });
    index++;
  }

  return trend;
};

const getStartDate = (daysBefore) => {
  let now = new Date();
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);
  return new Date(now.setDate(now.getDate() - daysBefore));
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
