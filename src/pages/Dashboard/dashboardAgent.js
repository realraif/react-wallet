import getBalancesMock from "pages/mockdata/dashboardBalancesMock";
import getDonutChartMock from "pages/mockdata/donutChartMock";
import getMapChartMock from "pages/mockdata/mapChartMock";

const fetchBalancesData = (timeframe) => {
  return Promise.resolve({ data: getBalancesMock() });
};

const fetchDonatChartData = (timeframe) => {
  return Promise.resolve({ data: getDonutChartMock() });
};

const fetchMapChartData = (timeframe) => {
  return Promise.resolve({ data: getMapChartMock() });
};

const fetchDashboardData = (timeframe) => {
  return Promise.all([
    fetchBalancesData(timeframe),
    fetchDonatChartData(timeframe),
    fetchMapChartData(timeframe),
  ]);
};

export default { fetchDashboardData };
