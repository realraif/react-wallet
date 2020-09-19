const data = [
  {
    name: "BOA",
    y: 12446,
    cc: [
      {
        y: 12446,
        name: "BOA1",
      },
      {
        y: 1244,
        name: "BOA2",
      },
    ],
  },
  {
    name: "Leumi",
    y: 12446,
    cc: [
      {
        y: 12446,
        name: "Leumi1",
      },
      {
        y: 1244,
        name: "Leumi2",
      },
    ],
  },
  {
    name: "Discount",
    y: 12446,
    cc: [
      {
        y: 12446,
        name: "Discount1",
      },
      {
        y: 1244,
        name: "Discount2",
      },
      {
        y: 1244,
        name: "Discount3",
      },
    ],
  },
];

export default {
  outer: data.reduce((arr, bank) => arr.concat(bank.cc), []),
  inner: data.map((bank) => ({
    ...bank,
    y: bank.cc.reduce(function (a, b) {
      return a + b.y;
    }, 0),
  })),
};
