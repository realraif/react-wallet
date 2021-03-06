import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";
import { getTableRowHeight } from "themes/utils";
import BalanceSplineChart from "./BalanceSplineChart";
import BalanceTable from "./BalancesTable";

const SelectBalanceSection = ({ data }) => {
  const theme = useTheme();
  const rowHeight = getTableRowHeight(theme);

  const rowsPerPage = 4;
  const height = rowHeight * rowsPerPage;

  return (
    <WithBox>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <BalanceTable
            height={height}
            data={data.balancesTable}
            selectedBalanceId={data.selectedBalanceId}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BalanceSplineChart
            height={height}
            data={data.balancesData}
            selectedBalanceId={data.selectedBalanceId}
          />
        </Grid>
      </Grid>
    </WithBox>
  );
};

export default withSection(SelectBalanceSection);
