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
  const spiderData = getSpiderData(
    creditCardsData.spiderChart,
    creditCardsData.checkedBalances
  );

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
          <CreditCardSpiderChart data={spiderData} height={height} />
        </Grid>
      </Grid>
    </WithBox>
  );
};

const getSpiderData = (data, checkedBalances) => {
  if (!checkedBalances) return data;
  const series = data.series.filter((balance) =>
    checkedBalances.includes(balance.id)
  );
  return { ...data, series };
};

export default withSection(SelectBalanceSection);
