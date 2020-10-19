import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import balancesAgent from "./balancesAgent";

export const fetchBalances = createAsyncThunk(
  "balances/fetchBalances",
  async (timeFrame) => {
    try {
      const response = await balancesAgent.fetchBalances(timeFrame);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const getChartsData = ([balances, candlestick]) => {
  const balancesTable = balances.data.map(({ name, status, data, id }) => {
    return { name, status, id, balance: data[data.length - 1], icon: "icon" };
  });
  return {
    balancesTable,
    balancesMultiSpline: balances.data,
    candlestick: candlestick.data,
  };
};

const balancesSlice = createSlice({
  name: "balances",
  initialState: { loading: true },
  reducers: {},
  extraReducers: {
    [fetchBalances.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchBalances.fulfilled]: (state, { payload }) => {
      const chartsData = getChartsData(payload);

      state.balancesTable = chartsData.balancesTable;
      state.balancesMultiSpline = chartsData.balancesMultiSpline;
      state.candlestick = chartsData.candlestick;
      state.loading = false;
      state.error = false;
    },
    [fetchBalances.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default balancesSlice.reducer;
