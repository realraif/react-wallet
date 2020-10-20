import balancesData from "./balancesMock";

export default () => {
  const labels = [
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
  ];
  const creditIds = getCreditIds();
  const series = labels.map((label) => {
    return creditIds.reduce(
      (obj, creditId) => ({
        ...obj,
        [creditId]: randomNumber(0, 500),
      }),
      { time: label }
    );
  });

  return { seriesData: series, bars: creditIds };
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getCreditIds = () => {
  let creditIds = [];
  balancesData.forEach((balance) => {
    balance.cc.forEach((credit) => {
      creditIds.push(credit.id);
    });
  });
  return creditIds;
};
