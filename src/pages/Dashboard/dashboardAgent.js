import balancesTrendsMock from "./Balances/mockdata";
import creditCardsMock from "./CreditCardsSection/mockdata";
import barChartMock from "./Expenses/ExpensesBarChart/mockdata";
import donatChartMock from "./Expenses/ExpensesDonut/mockdata";
import mapChartMock from "./Expenses/ExpensesMap/mockdata";

const fetchBalancesTrendsData = (timeframe) => {
  return Promise.resolve({ data: balancesTrendsMock });
};

const fetchCreditCardsData = (timeframe) => {
  return Promise.resolve({ data: creditCardsMock });
};

const fetchBarChartData = (timeframe) => {
  return Promise.resolve({ data: barChartMock });
};

const fetchDonatChartData = (timeframe) => {
  return Promise.resolve({ data: donatChartMock });
};

const fetchMapChartData = (timeframe) => {
  return Promise.resolve({ data: mapChartMock });
};

const fetchDashboardData = (timeframe) => {
  return Promise.all([
    fetchBalancesTrendsData(timeframe),
    fetchCreditCardsData(timeframe),
    fetchBarChartData(timeframe),
    fetchDonatChartData(timeframe),
    fetchMapChartData(timeframe),
  ]);
};

export default { fetchDashboardData };
