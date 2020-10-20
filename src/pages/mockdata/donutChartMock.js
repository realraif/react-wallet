import balancesData from "./balancesMock";

export default () => {
  let donutData = [];
  balancesData.forEach(({ id, name, cc }) => {
    const balance = { id, name };
    donutData.push(balance);
    cc.forEach((credit) => {
      const creditCard = {
        name,
        id: credit.id,
        value: credit.expense,
        parent: id,
      };
      donutData.push(creditCard);
    });
  });

  return donutData;
};
