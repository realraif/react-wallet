import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCreditCards } from "./creditCardsSlice";
import { Grid } from "@material-ui/core";
import CategoryExpensesChart from "./CategoryExpensesChart/CategoryExpensesChart";
import SelectCreditCardSection from "./SelectCreditCardSection/SelectCreditCardSection";

const CreditCards = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const creditCardsData = useSelector((state) => state.creditCards);

  useEffect(() => {
    dispatch(fetchCreditCards());
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <SelectCreditCardSection creditCardsData={creditCardsData} />
      </Grid>
      <Grid item>
        <CategoryExpensesChart data={creditCardsData.categoryExpensesChart} />
      </Grid>
    </Grid>
  );
};

export default CreditCards;
