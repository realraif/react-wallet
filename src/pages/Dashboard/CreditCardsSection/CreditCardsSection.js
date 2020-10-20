import React from "react";
import { Grid } from "@material-ui/core";

import withSection from "HOC/withSection";
import CreditCard from "./CreditCard/CreditCard";

const CreditCardsSection = ({ data }) => {
  if (!data) return null;

  return (
    <Grid container justify="space-between" spacing={4} alignItems="center">
      {data.map((balance) => {
        return balance.cc.map((card) => (
          <Grid item xs={12} md={6} lg={3} key={card.id}>
            <CreditCard
              cardID={card.id}
              currency={balance.currency}
              bank={balance.id}
              creditLimit={card.creditLimit}
              expense={card.expense}
            />
          </Grid>
        ));
      })}
    </Grid>
  );
};

export default withSection(CreditCardsSection, "Credit Cards");
