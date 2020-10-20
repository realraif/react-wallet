import balancesMock from "pages/mockdata/balancesMock";
import getBarChartMock from "pages/mockdata/barChartMock";
import getDonutChartMock from "pages/mockdata/donutChartMock";
import getMapChartMock from "pages/mockdata/mapChartMock";

const fetchBalancesData = (timeframe) => {
  return Promise.resolve({ data: balancesMock });
};

const fetchBarChartData = (timeframe) => {
  return Promise.resolve({ data: getBarChartMock() });
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
    fetchBarChartData(timeframe),
    fetchDonatChartData(timeframe),
    fetchMapChartData(timeframe),
  ]);
};

export default { fetchDashboardData };
