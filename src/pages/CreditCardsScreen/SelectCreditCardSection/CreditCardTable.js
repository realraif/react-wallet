import React from "react";
import { useDispatch } from "react-redux";

import { cardSelected, balancesChecked } from "../creditCardsSlice";
import AccordionTable from "components/tables/AccordionTable/AccordionTable";

const CreditCardTable = ({ data, selectedCardId, height }) => {
  const dispatch = useDispatch();
  const columns = { parent: ["icon", "name"], child: ["id", "expenses"] };

  const cardSelectedHandler = (id) => {
    dispatch(cardSelected({ id }));
  };
  const balanceCheckedHandler = (selectedBalances) => {
    dispatch(balancesChecked({ selectedBalances }));
  };

  if (!data) return null;

  return (
    <AccordionTable
      columns={columns}
      rows={data}
      accordionIndex="cc"
      selectedId={selectedCardId}
      subRowSelectedHandler={cardSelectedHandler}
      rowCheckedHander={balanceCheckedHandler}
      styles={{ height, rowColor: "pink", subRowColor: "white" }}
    />
  );
};

export default CreditCardTable;
