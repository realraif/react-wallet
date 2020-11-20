import getBalancesMock from "pages/mockdata/dashboardBalancesMock";
import getDonutChartMock from "pages/mockdata/donutChartMock";
import getMapChartMock from "pages/mockdata/mapChartMock";

const fetchBalancesData = (timeFrame) => {
  return Promise.resolve({ data: getBalancesMock(timeFrame) });
};

const fetchDonatChartData = (timeFrame) => {
  return Promise.resolve({ data: getDonutChartMock(timeFrame) });
};

const fetchMapChartData = (timeFrame) => {
  return Promise.resolve({ data: getMapChartMock(timeFrame) });
};

const fetchDashboardData = (timeFrame) => {
  return Promise.all([
    fetchBalancesData(timeFrame),
    fetchDonatChartData(timeFrame),
    fetchMapChartData(timeFrame),
  ]);
};

export default { fetchDashboardData };
