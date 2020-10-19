import React from "react";
import RadioTable from "components/tables/RadioTable/RadioTable";

const BalanceTable = ({ data, height }) => {
  if (!data) return null;

  return <RadioTable columns={data.columns} rows={data.rows} height={height} />;
};

export default BalanceTable;
