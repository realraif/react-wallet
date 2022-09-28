const sankeyDiagramOptions = {
  margin: { top: 10, right: 10, bottom: 10, left: 10 },
  sort: "input",
  colors: { scheme: "pink_yellowGreen" },
  nodeOpacity: 1,
  nodeThickness: 18,
  nodeSpacing: 60,
  nodeBorderColor: { theme: "grid.line.stroke" },
  linkOpacity: 0.6,
  isInteractive: true,
  linkHoverOpacity: 1,
  linkHoverOthersOpacity: 0.1,
  linkBlendMode: "normal",
  labelPosition: "inside",
  labelPadding: 10,
  labelTextColor: "black",
  animate: true,
  motionStiffness: 190,
  motionDamping: 20,
};

export default sankeyDiagramOptions;
