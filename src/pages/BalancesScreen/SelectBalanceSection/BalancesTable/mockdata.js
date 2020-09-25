const createData = (icon, bank, balance, status, id) => ({
  icon,
  bank,
  balance,
  status,
  id,
});

export const columns = ["icon", "bank", "balance", "status"];

export default [
  createData("icon", "BOA", 305, 3.7, 67),
  createData("icon", "Leumi", 452, 25.0, 51),
  createData("icon", "Dic", 262, 16.0, 24),
  createData("icon", "Miz", 159, 6.0, 4),
  createData("icon", "Som", 356, 16.0, 49),
];
