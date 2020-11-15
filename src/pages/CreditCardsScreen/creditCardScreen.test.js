import creditCardsSlice, { cardSelected, categorySelected } from "./creditCardsSlice";

describe("credit card reducer", () => {
  it("should increase the category selection", () => {
    const state = creditCardsSlice(
      { categoryChangedCounter: 0 },
      { type: categorySelected.type, payload: { category: "food" } }
    );

    expect(state.categoryChangedCounter).toEqual(1);
  });

  it("should change selected card", () => {
    const state = creditCardsSlice(
      {},
      { type: cardSelected.type, payload: { id: "test" } }
    );

    expect(state.selectedCardId).toEqual("test");
  });
});
