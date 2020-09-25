import React from "react";
import RadioTable from "components/RadioTable/RadioTable";
import rows, { columns } from "./mockdata";

const BalanceTable = ({ height }) => {
  return <RadioTable columns={columns} rows={rows} height={height} />;
};

export default BalanceTable;
