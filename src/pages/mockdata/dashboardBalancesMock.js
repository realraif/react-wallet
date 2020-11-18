import balancesData from "./balancesMock";

export default () => {
  return balancesData.map(({ cc, ...balance }) => {
    const allUSStates = cc.reduce((arr, { states }) => arr.concat(states), []);
    const creditCards = cc.map((credit) => ({
      ...credit,
      parentId: balance.id,
    }));
    return { ...balance, cc: creditCards, states: [...new Set(allUSStates)] };
  });
};
