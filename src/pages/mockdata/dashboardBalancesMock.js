import balancesData from "./balancesMock";

export default () => {
  return balancesData.map(({ cc, ...balance }) => {
    const allStates = cc.reduce((arr, { states }) => arr.concat(states), []);
    cc.forEach((card) => {
      card.parentId = balance.id;
    });
    return { ...balance, cc, states: [...new Set(allStates)] };
  });
};
