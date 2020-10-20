import React from "react";
import AccordionTable from "components/tables/AccordionTable/AccordionTable";

const CreditCardTable = ({ data, height }) => {
  if (!data) return null;

  const columns = { parent: ["icon", "name"], child: ["id", "expenses"] };

  return (
    <AccordionTable
      columns={columns}
      rows={data}
      accordionIndex="cc"
      styles={{ height, rowColor: "pink", subRowColor: "white" }}
    />
  );
};

export default CreditCardTable;
