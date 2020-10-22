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

const selectFirstId = (balancesArray) => {
  return balancesArray.length
    ? balancesArray[0].cc.length
      ? balancesArray[0].cc[0].id
      : null
    : null;
};

const initialState = { loading: true, categoryChangedCounter: 0 };

const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {
    cardSelected: (state, { payload }) => {
      state.selectedCardId = payload.id;
      state.selectedCategory = null;
    },
    categorySelected: (state, { payload }) => {
      state.selectedCategory = payload.category;
      state.categoryChangedCounter++;
    },
    onDestroy: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [fetchCreditCards.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.selectedCategory = null;
    },
    [fetchCreditCards.fulfilled]: (state, { payload }) => {
      const chartsData = getChartsData(payload);
      Object.assign(state, chartsData);

      state.selectedCardId = selectFirstId(state.creditCardsTable);
      state.loading = false;
      state.error = false;
      state.selectedCategory = null;
    },
    [fetchCreditCards.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.selectedCategory = null;
    },
  },
});

export const {
  cardSelected,
  categorySelected,
  onDestroy,
} = creditCardsSlice.actions;

export default creditCardsSlice.reducer;
