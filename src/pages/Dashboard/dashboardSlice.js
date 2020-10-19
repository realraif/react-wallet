import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dashboardAgent from "./dashboardAgent";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async (timeFrame) => {
    try {
      const response = await dashboardAgent.fetchDashboardData(timeFrame);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { loading: true },
  reducers: {},
  extraReducers: {
    [fetchDashboard.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchDashboard.fulfilled]: (state, { payload }) => {
      const chartsData = {
        balancesTrend: payload[0].data,
        creditCards: payload[1].data,
        barChart: payload[2].data,
        donutChart: payload[3].data,
        mapChart: payload[4].data,
      };
      state.loading = false;
      state.error = false;
      state.balancesTrend = chartsData.balancesTrend;
      state.creditCards = chartsData.creditCards;
      state.barChart = chartsData.barChart;
      state.donutChart = chartsData.donutChart;
      state.mapChart = chartsData.mapChart;
    },
    [fetchDashboard.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default dashboardSlice.reducer;
