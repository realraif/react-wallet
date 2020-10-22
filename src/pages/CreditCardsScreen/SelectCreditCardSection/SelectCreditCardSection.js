import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";
import { getTableRowHeight } from "themes/utils";
import CreditCardSpiderChart from "./CreditCardSpiderChart";
import CreditCardTable from "./CreditCardTable";

const SelectBalanceSection = ({ creditCardsData }) => {
  const theme = useTheme();
  const rowHeight = getTableRowHeight(theme);

  const rowsPerPage = 4;
  const height = rowHeight * rowsPerPage;

  return (
    <WithBox>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <CreditCardTable
            data={creditCardsData.creditCardsTable}
            selectedCardId={creditCardsData.selectedCardId}
            height={height}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "right" }}>
          <CreditCardSpiderChart
            data={creditCardsData.spiderChart}
            height={height}
          />
        </Grid>
      </Grid>
    </WithBox>
  );
};

export default withSection(SelectBalanceSection);
