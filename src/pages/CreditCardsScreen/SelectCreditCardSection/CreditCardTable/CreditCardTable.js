import React from "react";

import AccordionTable from "components/tables/AccordionTable/AccordionTable";
import rows, { columns } from "./mockdata";

const CreditCardTable = ({ height }) => {
  return (
    <AccordionTable
      columns={columns}
      rows={rows}
      accordionIndex="cc"
      styles={{ height, rowColor: "pink", subRowColor: "white" }}
    />
  );
};

export default CreditCardTable;
