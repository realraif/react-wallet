import React from "react";
import RadioTable from "components/tables/RadioTable/RadioTable";

const BalanceTable = ({ data, height }) => {
  if (!data) return null;

  const columns = ["icon", "name", "balance", "status"];

  return <RadioTable columns={columns} rows={data} height={height} />;
};

export default BalanceTable;
