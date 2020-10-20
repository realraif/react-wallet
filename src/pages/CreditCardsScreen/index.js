import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCreditCards, onDestroy } from "./creditCardsSlice";
import { Grid } from "@material-ui/core";
import CategoryExpensesChart from "./CategoryExpensesChart";
import SelectCreditCardSection from "./SelectCreditCardSection/SelectCreditCardSection";

const getCategoriesTrendData = ({ selectedId, balancesData }) => {
  if (!balancesData || !selectedId) return null;
  let selectedCard = { categories: [] };
  balancesData.some((balance) => {
    selectedCard = balance.cc.find((credit) => credit.id === selectedId);
    return !!selectedCard;
  });
  return selectedCard.categories;
};

const CreditCards = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const creditCardsData = useSelector((state) => state.creditCards);
  const categoriesTrendData = getCategoriesTrendData(creditCardsData);

  useEffect(() => {
    dispatch(fetchCreditCards());
    return () => {
      dispatch(onDestroy());
    }
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <SelectCreditCardSection creditCardsData={creditCardsData} />
      </Grid>
      <Grid item>
        <CategoryExpensesChart data={categoriesTrendData} />
      </Grid>
    </Grid>
  );
};

export default CreditCards;
