import React from "react";

import AccordionTable from "components/AccordionTable/AccordionTable";
import rows, { columns } from "./mockdata";

const CreditCardTable = ({ height }) => {
  return (
    <AccordionTable
      columns={columns}
      rows={rows}
      height={height}
      accordionIndex="cc"
    />
  );
};

export default CreditCardTable;
