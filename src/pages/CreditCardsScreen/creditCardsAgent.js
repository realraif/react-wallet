import creditCardsCategoriesMock from "pages/mockdata/creditCardsCategoriesMock";
import getSpiderChartMock from "pages/mockdata/spiderChartMock";

const fetchCreditCardTableData = (timeframe) => {
  return Promise.resolve({ data: creditCardsCategoriesMock() });
};
const fetchSpiderChartMockData = (timeframe) => {
  return Promise.resolve({ data: getSpiderChartMock() });
};

const fetchCreditCardsData = (timeframe) => {
  return Promise.all([
    fetchCreditCardTableData(timeframe),
    fetchSpiderChartMockData(timeframe),
  ]);
};

export default { fetchCreditCardsData };
