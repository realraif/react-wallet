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
  const creditCardsTable = payload[0].data.map((balance) => {
    return { ...balance, icon: "icon" };
  });
  return {
    creditCardsTable: creditCardsTable,
    spiderChart: payload[1].data,
  };
};

const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState: { loading: true },
  reducers: {
    cardSelected: (state, { payload }) => {
      state.selectedId = payload.id;
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

export const { cardSelected } = creditCardsSlice.actions;

export default creditCardsSlice.reducer;
