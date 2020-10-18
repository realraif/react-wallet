import React from "react";
import RadioTable from "components/tables/RadioTable/RadioTable";

const BalanceTable = ({ data, height }) => {
  return <RadioTable columns={data.columns} rows={data.rows} height={height} />;
};

export default BalanceTable;
