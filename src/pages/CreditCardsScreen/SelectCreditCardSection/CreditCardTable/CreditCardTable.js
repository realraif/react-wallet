import React from "react";
import AccordionTable from "components/tables/AccordionTable/AccordionTable";

const CreditCardTable = ({ data, height }) => {
  if (!data) return null;

  return (
    <AccordionTable
      columns={data.columns}
      rows={data.rows}
      accordionIndex="cc"
      styles={{ height, rowColor: "pink", subRowColor: "white" }}
    />
  );
};

export default CreditCardTable;
