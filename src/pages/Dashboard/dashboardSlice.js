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

const getChartsData = (payload) => ({
  balances: payload[0].data,
  barChart: payload[1].data,
  donutChart: payload[2].data,
  mapChart: payload[3].data,
});

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
      const chartsData = getChartsData(payload);
      Object.assign(state, chartsData);
      state.loading = false;
      state.error = false;
    },
    [fetchDashboard.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default dashboardSlice.reducer;
