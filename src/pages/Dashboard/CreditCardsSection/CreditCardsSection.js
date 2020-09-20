import React from "react";
import { Grid } from "@material-ui/core";

import data from './mockdata';
import withSection from 'HOC/withSection';
import CreditCard from "./CreditCard/CreditCard";

const CreditCardsSection = (props) => {

  return (
    <Grid container justify="space-between" spacing={4} alignItems="center">
      {data.map((card, index) => (
        <Grid item xs={12} md={6} lg={3} key={card.id}>
          <CreditCard cardID={card.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withSection(CreditCardsSection, "Credit Cards");
