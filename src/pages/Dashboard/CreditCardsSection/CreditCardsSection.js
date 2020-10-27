import React from "react";
import { Grid } from "@material-ui/core";

import withSection from "HOC/withSection";
import CreditCard from "./CreditCard";

const CreditCardsSection = ({ data, selectedCards }) => {
  const isSelected = selectedCards.map((card) => card.id);

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
              expenses={card.expenses}
              isSelected={
                isSelected.includes(card.id) || isSelected.includes(balance.id)
              }
            />
          </Grid>
        ));
      })}
    </Grid>
  );
};

export default withSection(CreditCardsSection, "Credit Cards");
