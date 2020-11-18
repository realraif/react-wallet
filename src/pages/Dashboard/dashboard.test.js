import React from "react";
import { mount } from "enzyme";
import { MuiThemeProvider } from "@material-ui/core";

import { Balances as BalancesSection } from "./Balances/BalancesSection";
import BalanceCard from "./Balances/BalanceCard/BalanceCard";
import themes from "themes";
import dashboardSlice, { removeFromSelectedCards } from "./dashboardSlice";

describe("dashboard", () => {
  it("should show <BalanceCard>s of selected balances and selected balances' children", () => {
    const data = [
      { id: 1, trend: [] },
      { id: 2, trend: [] },
    ];
    const selectedCards = [{ parentId: 1 }, { id: 2 }];
    const props = { data, selectedCards };
    const wrapper = mount(
      <MuiThemeProvider theme={themes.default}>
        <BalancesSection {...props} />
      </MuiThemeProvider>
    );
    expect(wrapper.find(BalanceCard)).toHaveLength(2);
  });

  it("should remove parent and add siblings", () => {
    const initialState = {
      selectedCards: [{ id: 1 }],
      balances: [{ id: 1, cc: [{ id: 1.1 }, { id: 1.2 }] }],
    };
    const payload = { card: { id: 1.1, parentId: 1 } };

    const state = dashboardSlice(initialState, {
      type: removeFromSelectedCards.type,
      payload,
    });

    expect(state.selectedCards).toHaveLength(1);
    expect(state.selectedCards[0].id).toEqual(1.2);
  });

  it("should remove all children", () => {
    const initialState = { selectedCards: [{ id: 1 }, { id: 1.1 }] };
    const children = [{ id: 1.1 }, { id: 1.2 }];
    const payload = {
      card: { id: 1, cc: children },
    };

    const state = dashboardSlice(initialState, {
      type: removeFromSelectedCards.type,
      payload,
    });

    expect(state.selectedCards).toHaveLength(0);
  });

  it("should remove only selected card's parent", () => {
    const parentId = 1;
    const otherParent = 2;
    const childId = 1.1;
    const siblingId = 1.2;

    const initialState = {
      selectedCards: [{ id: parentId }, { id: otherParent }],
      balances: [
        { id: parentId, cc: [{ id: childId }, { id: siblingId }] },
        { id: otherParent, cc: [] },
      ],
    };
    const payload = {
      card: { id: childId, parentId },
    };

    const state = dashboardSlice(initialState, {
      type: removeFromSelectedCards.type,
      payload,
    });

    expect(state.selectedCards.find((card) => card.id === parentId)).toBeFalsy();
    expect(state.selectedCards.find((card) => card.id === otherParent)).toBeTruthy();
    expect(state.selectedCards.find((card) => card.id === siblingId)).toBeTruthy();
  });
});
