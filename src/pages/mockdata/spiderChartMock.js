import balancesData, { categories } from "./balancesMock";

const spiderChartMock = () => {
  const series = balancesData.map(({ id, name }) => ({
    id,
    name,
    data: categories.map((category) => ({
      category,
      id: category,
      y: randomNumber(1, 5),
    })),
  }));

  return { series, categories };
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default spiderChartMock;
