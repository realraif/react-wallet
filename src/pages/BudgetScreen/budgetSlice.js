import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import budgetAgent from "./budgetAgent";

export const fetchBudget = createAsyncThunk(
  "budget/fetchBudget",
  async (timeFrame) => {
    try {
      const response = await budgetAgent.fetchBudgetData(timeFrame);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const initialState = { loading: true };

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    onDestroy: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [fetchBudget.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchBudget.fulfilled]: (state, { payload }) => {
      const chartsData = {
        budgetSankey: payload[0].data,
        budgetPolarChart: payload[1].data,
      };
      state.loading = false;
      state.error = false;
      state.budgetSankey = chartsData.budgetSankey;
      state.budgetPolarChart = chartsData.budgetPolarChart;
    },
    [fetchBudget.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { onDestroy } = budgetSlice.actions;

export default budgetSlice.reducer;
