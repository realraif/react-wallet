import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import balancesAgent from "./balancesAgent";

export const fetchBalances = createAsyncThunk(
  "users/fetchUsers",
  async (timeFrame) => {
    try {
      const response = await balancesAgent.fetchBalances(timeFrame);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const balancesSlice = createSlice({
  name: "balances",
  initialState: { loading: true },
  reducers: {
    [fetchBalances.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchBalances.fulfilled]: {
      prepare: (payload) => ({
        balancesTable: payload[0].data,
        balancesMultiSpline: payload[1].data,
        candlestick: payload[2].data,
      }),
      reducer: (state, chartsData) => {
        state.loading = false;
        state.error = false;
        state.balancesTable = chartsData.balancesTable;
        state.balancesMultiSpline = chartsData.balancesMultiSpline;
        state.candlestick = chartsData.candlestick;
      },
    },
    [fetchBalances.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default balancesSlice.reducer;
