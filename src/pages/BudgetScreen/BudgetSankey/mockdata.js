const data = {
  nodes: [
    {
      id: "Salary",
    },
    {
      id: "Bonus",
    },
    {
      id: "Investment",
    },
    {
      id: "Interest",
    },
    {
      id: "Income",
    },
    {
      id: "Deductions",
    },
    {
      id: "Tax",
    },
    {
      id: "Net",
    },
    {
      id: "Savings",
    },
    {
      id: "Expenses",
    },
    {
      id: "Home",
    },
    {
      id: "Food",
    },
    {
      id: "Bills",
    },
    {
      id: "Other",
    },
  ],
  links: [
    {
      source: "Salary",
      target: "Income",
      value: 100000,
    },
    {
      source: "Bonus",
      target: "Income",
      value: 50000,
    },
    {
      source: "Investment",
      target: "Income",
      value: 40000,
    },
    {
      source: "Interest",
      target: "Income",
      value: 30000,
    },
    {
      source: "Income",
      target: "Deductions",
      value: 15000,
    },
    {
      source: "Income",
      target: "Tax",
      value: 40000,
    },
    {
      source: "Income",
      target: "Net",
      value: 175000,
    },
    {
      source: "Net",
      target: "Expenses",
      value: 150000,
    },
    {
      source: "Net",
      target: "Savings",
      value: 10000,
    },
    {
      source: "Deductions",
      target: "Savings",
      value: 10000,
    },
    {
      source: "Deductions",
      target: "Tax",
      value: 3000,
    },
    {
      source: "Expenses",
      target: "Home",
      value: 10000,
    },
    {
      source: "Expenses",
      target: "Food",
      value: 5000,
    },
    {
      source: "Expenses",
      target: "Bills",
      value: 5000,
    },
    {
      source: "Expenses",
      target: "Other",
      value: 100000,
    },
  ],
};

export default data;
