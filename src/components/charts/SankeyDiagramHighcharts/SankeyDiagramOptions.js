export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data);
  return options;
};

const getGenericOptions = () => ({
  title: {
    text: "",
  },
  accessibility: {
    point: {
      valueDescriptionFormat:
        "{index}. {point.from} to {point.to}, {point.weight}.",
    },
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
    },
  },
  series: [
    {
      keys: ["from", "to", "weight"],
      type: "sankey",
      name: "Sankey",
    },
  ],
});

const customiseOptions = (options, data) => {
  options.series[0].data = data;
};
