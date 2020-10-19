import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import creditCardsAgent from "./creditCardsAgent";

export const fetchCreditCards = createAsyncThunk(
  "creditCards/fetchCreditCards",
  async (timeFrame) => {
    try {
      const response = await creditCardsAgent.fetchCreditCardsData(timeFrame);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState: { loading: true },
  reducers: {},
  extraReducers: {
    [fetchCreditCards.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCreditCards.fulfilled]: (state, { payload }) => {
      const chartsData = {
        creditCardTable: payload[0].data,
        spiderChart: payload[1].data,
        categoryExpensesChart: payload[2].data,
      };
      state.loading = false;
      state.error = false;
      state.creditCardTable = chartsData.creditCardTable;
      state.spiderChart = chartsData.spiderChart;
      state.categoryExpensesChart = chartsData.categoryExpensesChart;
    },
    [fetchCreditCards.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default creditCardsSlice.reducer;
