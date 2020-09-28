export default {
  nodes: [
    {
      id: "John",
      color: "hsl(69, 70%, 50%)",
    },
    {
      id: "Raoul",
      color: "hsl(50, 70%, 50%)",
    },
    {
      id: "Jane",
      color: "hsl(218, 70%, 50%)",
    },
    {
      id: "Marcel",
      color: "hsl(352, 70%, 50%)",
    },
    {
      id: "Ibrahim",
      color: "hsl(88, 70%, 50%)",
    },
    {
      id: "Junko",
      color: "hsl(250, 70%, 50%)",
    },
  ],
  links: [
    {
      source: "Marcel",
      target: "Ibrahim",
      value: 129,
    },
    {
      source: "Marcel",
      target: "Jane",
      value: 82,
    },
    {
      source: "Marcel",
      target: "Junko",
      value: 200,
    },
    {
      source: "Junko",
      target: "Raoul",
      value: 48,
    },
    {
      source: "Junko",
      target: "John",
      value: 131,
    },
    {
      source: "John",
      target: "Ibrahim",
      value: 55,
    },
    {
      source: "John",
      target: "Jane",
      value: 125,
    },
    {
      source: "John",
      target: "Raoul",
      value: 115,
    },
    {
      source: "Raoul",
      target: "Jane",
      value: 153,
    },
    {
      source: "Ibrahim",
      target: "Raoul",
      value: 104,
    },
  ],
};
