import creditCardTableMock from "./SelectCreditCardSection/CreditCardTable/mockdata";
import spiderChartMock from "./SelectCreditCardSection/CreditCardSpiderChart/mockdata";
import categoryExpensesChartMock from "./CategoryExpensesChart/mockdata";

const fetchCreditCardTableData = (timeframe) => {
  return Promise.resolve({ data: creditCardTableMock });
};
const fetchSpiderChartMockData = (timeframe) => {
  return Promise.resolve({ data: spiderChartMock });
};
const fetchCategoryExpensesChartData = (timeframe) => {
  return Promise.resolve({ data: categoryExpensesChartMock });
};

const fetchCreditCardsData = (timeframe) => {
  return Promise.all([
    fetchCreditCardTableData(timeframe),
    fetchSpiderChartMockData(timeframe),
    fetchCategoryExpensesChartData(timeframe),
  ]);
};

export default { fetchCreditCardsData };
