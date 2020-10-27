import balancesData from "./balancesMock";

export default () => {
  let donutData = [];
  balancesData.forEach(({ id, name, cc }) => {
    const allStates = cc.reduce((arr, { states }) => arr.concat(states), []);
    const balance = {
      id,
      name,
      info: {
        states: [...new Set(allStates)],
      },
    };
    donutData.push(balance);
    cc.forEach((credit, index) => {
      const creditCard = {
        name: `${name}.${index}`,
        id: credit.id,
        value: credit.expenses,
        parent: id,
        info: {
          states: credit.states,
        },
      };
      donutData.push(creditCard);
    });
  });

  return donutData;
};
