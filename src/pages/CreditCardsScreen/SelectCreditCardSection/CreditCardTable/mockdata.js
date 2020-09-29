const createData = (icon, bank, id, cc) => ({
  icon,
  bank,
  id,
  cc,
});

const createCardData = (name, expenses, id) => ({
  name, expenses, id
});

export const columns = ["icon", "bank"];

export default [
  createData("icon", "BOA", 67, [
    createCardData("BOA1", 50, 1),
    createCardData("BOA2", 300, 2),
  ]),
  createData("icon", "Leumi", 51, [
    createCardData("Leumi1", 50, 1),
    createCardData("Leumi2", 300, 2),
  ]),
  createData("icon", "Dic", 24, [
    createCardData("Dic1", 50, 1),
    createCardData("Dic2", 300, 2),
  ]),
  createData("icon", "Miz", 4, [
    createCardData("Miz1", 50, 1),
    createCardData("Miz2", 300, 2),
  ]),
  createData("icon", "Som", 49, [
    createCardData("Som1", 50, 1),
    createCardData("Som2", 300, 2),
  ]),
];
