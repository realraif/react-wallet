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

const selectFirstId = (balancesArray) => {
  return balancesArray.length ? balancesArray[0].id : null;
}

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
      Object.assign(state, chartsData);
      
      state.selectedId = selectFirstId(state.balancesData);
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
