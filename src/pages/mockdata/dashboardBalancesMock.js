import balancesData from "./balancesMock";

export default () => {
  return balancesData.map(({ cc, ...balance }) => {
    const allStates = cc.reduce((arr, { states }) => arr.concat(states), []);
    const creditCards = cc.map((card) => ({
      ...card,
      parentId: balance.id,
    }));
    return { ...balance, cc: creditCards, states: [...new Set(allStates)] };
  });
};
