import creditCardsCategoriesMock from "pages/mockdata/creditCardsCategoriesMock";
import getSpiderChartMock from "pages/mockdata/spiderChartMock";

const fetchCreditCardTableData = (timeFrame) => {
  return Promise.resolve({ data: creditCardsCategoriesMock(timeFrame) });
};
const fetchSpiderChartMockData = (timeFrame) => {
  return Promise.resolve({ data: getSpiderChartMock(timeFrame) });
};

const fetchCreditCardsData = (timeFrame) => {
  return Promise.all([
    fetchCreditCardTableData(timeFrame),
    fetchSpiderChartMockData(timeFrame),
  ]);
};

export default { fetchCreditCardsData };
