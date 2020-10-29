import balancesData from "./balancesMock";

export default () => {
  return balancesData.map(({ cc, ...balance }) => {
    const allStates = cc.reduce((arr, { states }) => arr.concat(states), []);
    return { ...balance, cc, states: [...new Set(allStates)] };
  });
};
