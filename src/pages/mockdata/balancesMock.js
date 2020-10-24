export default [
  {
    id: "DE89-3704-0044-0532-0130-00",
    name: "BOA",
    currency: "USD",
    status: 3.3,
    data: [10, 3, 4, 5, 2, 7, 2, 1, 4, -5, 3, 1, 6],
    cc: [
      {
        id: "DE89-3704-0044-0532-0130-01",
        creditLimit: 600,
        expenses: 23,
        chargeDate: "23",
        states: ["us-wa", "us-or", "us-ne", "us-tn", "us-mn"],
      },
      {
        id: "DE89-3704-0044-0532-0130-02",
        creditLimit: 500,
        expenses: 133,
        chargeDate: "23",
        states: ["us-wi", "us-wa"],
      },
    ],
  },
  {
    id: "DE89-3704-0044-0532-0130-10",
    name: "Leumi",
    currency: "USD",
    status: 3.3,
    data: [6, 5, 1, 1, 3, 2, 4, 6, 0, 2, 1, 4, 1],
    cc: [
      {
        id: "DE89-3704-0044-0532-0130-12",
        creditLimit: 200,
        expenses: 200.0,
        chargeDate: "23",
        states: ["us-in", "us-wa", "us-ok"],
      },
    ],
  },
  {
    id: "DE89-3704-0044-0532-0130-20",
    name: "Disc",
    currency: "USD",
    status: 3.3,
    data: [1, 2, 1, 4, 3, 1, 2, 1, 2, 1, 3, 4, 6],
    cc: [
      {
        id: "DE89-3704-0044-0532-0130-13",
        creditLimit: 5000,
        expenses: 145.0,
        chargeDate: "23",
        states: ["us-oh", "us-sc"],
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
