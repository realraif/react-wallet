import balancesMock from "pages/mockdata/balancesMock";
import barChartMock from "./Expenses/ExpensesBarChart/mockdata";
import getDonutChartMock from "pages/mockdata/donutChartMock";
import mapChartMock from "./Expenses/ExpensesMap/mockdata";

const fetchBalancesData = (timeframe) => {
  return Promise.resolve({ data: balancesMock });
};

const fetchBarChartData = (timeframe) => {
  return Promise.resolve({ data: barChartMock });
};

const fetchDonatChartData = (timeframe) => {
  return Promise.resolve({ data: getDonutChartMock() });
};

const fetchMapChartData = (timeframe) => {
  return Promise.resolve({ data: mapChartMock });
};

const fetchDashboardData = (timeframe) => {
  return Promise.all([
    fetchBalancesData(timeframe),
    fetchBarChartData(timeframe),
    fetchDonatChartData(timeframe),
    fetchMapChartData(timeframe),
  ]);
};

export default { fetchDashboardData };
