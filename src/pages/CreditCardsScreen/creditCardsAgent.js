import getCreditCardTableMock from "pages/mockdata/creditCardsCategoriesMock";
import spiderChartMock from "./SelectCreditCardSection/CreditCardSpiderChart/mockdata";

const fetchCreditCardTableData = (timeframe) => {
  return Promise.resolve({ data: getCreditCardTableMock() });
};
const fetchSpiderChartMockData = (timeframe) => {
  return Promise.resolve({ data: spiderChartMock });
};

const fetchCreditCardsData = (timeframe) => {
  return Promise.all([
    fetchCreditCardTableData(timeframe),
    fetchSpiderChartMockData(timeframe),
  ]);
};

export default { fetchCreditCardsData };
