
export const getTableRowHeight = (theme) => {
  const tableCell = theme.overrides.MuiTableCell.root;
  const lineHeight = tableCell.lineHeight * tableCell.fontSize;
  const padding = tableCell.padding;
  const borderWidth = 1;
  return padding * 2 + borderWidth + lineHeight;
};
