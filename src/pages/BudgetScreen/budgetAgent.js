import getBudgetSankeyMock from "pages/mockdata/sankeyMock";
import polarChartMock from "pages/mockdata/polarChartMock";
import getBarChartMock from "pages/mockdata/barChartMock";

const fetchBudgetSankeyData = (timeFrame) => {
  return Promise.resolve({ data: getBudgetSankeyMock() });
};

const fetchPolarChartData = (timeFrame) => {
  return Promise.resolve({ data: polarChartMock });
};

const fetchBarChartData = (timeFrame) => {
  return Promise.resolve({ data: getBarChartMock(timeFrame) });
};

const fetchBudgetData = (timeFrame) => {
  return Promise.all([
    fetchBudgetSankeyData(timeFrame),
    fetchPolarChartData(timeFrame),
    fetchBarChartData(timeFrame),
  ]);
};

const budgetAgent = { fetchBudgetData };

export default budgetAgent;
