import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dashboardAgent from "./dashboardAgent";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async (timeFrame) => {
    try {
      const response = await dashboardAgent.fetchDashboardData(timeFrame);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const getChartsData = (payload) => ({
  balances: payload[0].data,
  barChart: payload[1].data,
  donutChart: payload[2].data,
  mapChart: payload[3].data,
});

const initialState = { selectedCards: [], loading: true };

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    cardsSelected: (state, { payload }) => {
      state.selectedCards = payload.cards;
    },
    addToSelectedCards: (state, { payload }) => {
      state.selectedCards.push(payload.card);
    },
    removeFromSelectedCards: (state, { payload }) => {
      const isParent = !payload.card.parentId;
      const childIds = isParent ? payload.card.cc.map((card) => card.id) : [];
      const isParentSelected =
        !isParent &&
        state.selectedCards.some(
          (selectedCard) => selectedCard.id === payload.card.parentId
        );
      const siblings = isParentSelected
        ? state.balances.find((balance) => balance.id === payload.card.parentId)
            .cc
        : [];
      siblings.forEach((card) => {
        card.parentId = payload.card.parentId;
      });

      state.selectedCards = [...state.selectedCards, ...siblings];
      state.selectedCards = state.selectedCards.filter((selectedCard) => {
        const isUnselectedCard = payload.card.id === selectedCard.id;
        const isParent = payload.card.parentId === selectedCard.id;
        const isChild = childIds.includes(selectedCard.id);
        return !isUnselectedCard && !isParent && !isChild;
      });
    },
    onDestroy: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [fetchDashboard.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchDashboard.fulfilled]: (state, { payload }) => {
      const chartsData = getChartsData(payload);
      Object.assign(state, chartsData);
      state.loading = false;
      state.error = false;
    },
    [fetchDashboard.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  cardsSelected,
  addToSelectedCards,
  removeFromSelectedCards,
  onDestroy,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
