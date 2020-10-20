import budgetSankeyMock from "pages/mockdata/sankeyMock";
import polarChartMock from "pages/mockdata/polarChartMock";

const fetchBudgetSankeyData = (timeframe) => {
  return Promise.resolve({ data: budgetSankeyMock });
};
const fetchPolarChartData = (timeframe) => {
  return Promise.resolve({ data: polarChartMock });
};

const fetchBudgetData = (timeframe) => {
  return Promise.all([
    fetchBudgetSankeyData(timeframe),
    fetchPolarChartData(timeframe),
  ]);
};

export default { fetchBudgetData };
