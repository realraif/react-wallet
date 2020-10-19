import React from "react";
import { useDispatch } from "react-redux";

import { balanceSelected } from "../balancesSlice";
import RadioTable from "components/tables/RadioTable/RadioTable";

const BalanceTable = ({ data, height, selectedId }) => {
  const dispatch = useDispatch();
  if (!data) return null;

  const columns = ["icon", "name", "balance", "status"];

  const balanceSelectedHandler = (id) => {
    dispatch(balanceSelected({ id }));
  };

  return (
    <RadioTable
      columns={columns}
      rows={data}
      height={height}
      selectedId={selectedId}
      rowSelectedHandler={balanceSelectedHandler}
    />
  );
};

export default BalanceTable;
