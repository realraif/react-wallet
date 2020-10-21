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

const getChartsData = (payload) => {
  const creditCardsTable = payload[0].data.map(({ id, name, cc }) => {
    const creditCards = cc.map(({ id, expenses }) => ({ id, expenses }));
    return { id, name, cc: creditCards, icon: "icon" };
  });
  return {
    creditCardsTable: creditCardsTable,
    balancesData: payload[0].data,
    spiderChart: payload[1].data,
  };
};

const initialState = { loading: true };

const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {
    cardSelected: (state, { payload }) => {
      state.selectedId = payload.id;
    },
    categorySelected: (state, { payload }) => {
      state.selectedCategory = payload.name;
    },
    onDestroy: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [fetchCreditCards.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCreditCards.fulfilled]: (state, { payload }) => {
      const chartsData = getChartsData(payload);
      Object.assign(state, chartsData);
      state.loading = false;
      state.error = false;
    },
    [fetchCreditCards.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { cardSelected, onDestroy } = creditCardsSlice.actions;

export default creditCardsSlice.reducer;
