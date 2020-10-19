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

const budgetSlice = createSlice({
  name: "budget",
  initialState: { loading: true },
  reducers: {},
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

export default budgetSlice.reducer;
