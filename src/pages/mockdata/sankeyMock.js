const data = [
  ["Salary", "Income", 150000],
  ["Bonus", "Income", 50000],
  ["Investment", "Income", 40000],
  ["Interest", "Income", 30000],
  ["Income", "Deductions", 15000],
  ["Income", "Tax", 40000],
  ["Income", "Net", 175000],
  ["Net", "Expenses", 150000],
  ["Net", "Savings", 10000],
  ["Deductions", "Savings", 10000],
  ["Deductions", "Tax", 30000],
  ["Expenses", "Home", 10000],
  ["Expenses", "Food", 50000],
  ["Expenses", "Bills", 50000],
  ["Expenses", "Other", 100000],
];

const getLinks = (data) => {
  return data.map((link) => {
    return { source: link[0], target: link[1], value: link[2] };
  });
};

const getNodes = (data) => {
  const nodes = [];
  data.forEach((link) => {
    for (let i = 0; i < 2; i++) {
      if (!nodes.includes(link[i])) {
        nodes.push(link[i]);
      }
    }
  });

  return nodes.map((node) => ({ id: node }));
};

export const getData = () => {
  const links = getLinks(data);
  const nodes = getNodes(data);

  return { links, nodes };
};

export default getData;
