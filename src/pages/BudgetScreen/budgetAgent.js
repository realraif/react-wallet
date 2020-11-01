import getBudgetSankeyMock from "pages/mockdata/sankeyMock";
import polarChartMock from "pages/mockdata/polarChartMock";
import getBarChartMock from "pages/mockdata/barChartMock";

const fetchBudgetSankeyData = (timeframe) => {
  return Promise.resolve({ data: getBudgetSankeyMock() });
};

const fetchPolarChartData = (timeframe) => {
  return Promise.resolve({ data: polarChartMock });
};

const fetchBarChartData = (timeframe) => {
  return Promise.resolve({ data: getBarChartMock() });
};

const fetchBudgetData = (timeframe) => {
  return Promise.all([
    fetchBudgetSankeyData(timeframe),
    fetchPolarChartData(timeframe),
    fetchBarChartData(timeframe),
  ]);
};

export default { fetchBudgetData };
