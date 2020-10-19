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

const getChartsData = (balances) => {
  const balancesTable = balances.data.map(({ name, status, data, id }) => {
    return { name, status, id, balance: data[data.length - 1], icon: "icon" };
  });
  return {
    balancesData: balances.data,
    balancesTable,
  };
};

const balancesSlice = createSlice({
  name: "balances",
  initialState: { loading: true },
  reducers: {
    balanceSelected: (state, { payload }) => {
      state.selectedId = payload.id;
    },
  },
  extraReducers: {
    [fetchBalances.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchBalances.fulfilled]: (state, { payload }) => {
      const chartsData = getChartsData(payload);

      state.balancesData = chartsData.balancesData;
      state.balancesTable = chartsData.balancesTable;
      state.candlestick = chartsData.candlestick;

      state.selectedId = chartsData.balancesData.length ? chartsData.balancesData[0].id : null;
      state.loading = false;
      state.error = false;
    },
    [fetchBalances.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { balanceSelected } = balancesSlice.actions;

export default balancesSlice.reducer;
