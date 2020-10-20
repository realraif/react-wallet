import React from "react";
import { useDispatch } from "react-redux";

import { cardSelected } from "../creditCardsSlice";
import AccordionTable from "components/tables/AccordionTable/AccordionTable";

const CreditCardTable = ({ data, height }) => {
  const dispatch = useDispatch();
  const columns = { parent: ["icon", "name"], child: ["id", "expenses"] };
  const cardSelectedHandler = (id) => {
    dispatch(cardSelected({ id }));
  };

  if (!data) return null;

  return (
    <AccordionTable
      columns={columns}
      rows={data}
      accordionIndex="cc"
      rowSelectedHandler={cardSelectedHandler}
      styles={{ height, rowColor: "pink", subRowColor: "white" }}
    />
  );
};

export default CreditCardTable;
