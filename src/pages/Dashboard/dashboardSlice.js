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

const initialState = { loading: true };

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    cardsSelected: (state, { payload }) => {
      state.selectedCards = payload.cards;
    },
    onDestroy: (state) => {
      return initialState;
    },
  },
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

export const { cardsSelected, onDestroy } = dashboardSlice.actions;

export default dashboardSlice.reducer;
