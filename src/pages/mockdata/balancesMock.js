export default [
  {
    id: "DE89-3704-0044-0532-0130-00",
    name: "BOA",
    currency: "USD",
    status: 3.3,
    trend: [10, 3, 4, 5, 2, 7, 2, 1, 4, -5, 3, 1, 6],
    cc: [
      {
        id: "DE89-3704-0044-0532-0130-01",
        creditLimit: 600,
        expenses: 230,
        chargeDate: "23",
        states: [
          { code: "us-wa", expenses: 50 },
          { code: "us-or", expenses: 100 },
        ],
      },
      {
        id: "DE89-3704-0044-0532-0130-02",
        creditLimit: 500,
        expenses: 830,
        chargeDate: "23",
        states: [
          { code: "us-wi", expenses: 150 },
          { code: "us-wa", expenses: 510 },
        ],
      },
    ],
  },
  {
    id: "DE89-3704-0044-0532-0130-10",
    name: "Leumi",
    currency: "USD",
    status: 3.3,
    trend: [6, 5, 1, 1, 3, 2, 4, 6, 0, 2, 1, 4, 1],
    cc: [
      {
        id: "DE89-3704-0044-0532-0130-12",
        creditLimit: 200,
        expenses: 2000.0,
        chargeDate: "23",
        states: [
          { code: "us-in", expenses: 10 },
          { code: "us-wa", expenses: 100 },
          { code: "us-ok", expenses: 50 },
        ],
      },
    ],
  },
  {
    id: "DE89-3704-0044-0532-0130-20",
    name: "Disc",
    currency: "USD",
    status: 3.3,
    trend: [1, 2, 1, 4, 3, 1, 2, 1, 2, 1, 3, 4, 6],
    cc: [
      {
        id: "DE89-3704-0044-0532-0130-13",
        creditLimit: 5000,
        expenses: 1045.0,
        chargeDate: "23",
        states: [
          { code: "us-sc", expenses: 70 },
          { code: "us-oh", expenses: 150 },
        ],
      },
    ],
  },
];

export const categories = [
  "food",
  "rent",
  "transportaion",
  "business",
  "workout",
  "personal",
  "bills",
];
