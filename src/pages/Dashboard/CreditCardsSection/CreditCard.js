import React, { useState } from "react";
import NumberFormat from "react-number-format";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  chart: {},
  activity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expensesText: {
    fontSize: "1.4rem",
    fontWeight: 500,
    marginRight: 4,
  },
  currency: {
    fontSize: "0.7rem",
    color: "#9191af",
    textTransform: "capitalize",
  },
  cardNumber: {
    backgroundColor: "#f9f9f9",
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 7,
    padding: "4px 16px",
  },
}));

const CreditCard = (props) => {
  const [elevation, setElevation] = useState(false);
  const classes = useStyles();

  const selectCard = () => {
    setElevation((oldElevation) => !oldElevation);
  };

  return (
    <Card elevation={elevation ? 5 : 0}>
      <CardActionArea onClick={selectCard}>
        <CardContent>
          <Typography variant="subtitle2" className={classes.cardNumber}>
            {props.cardID}
          </Typography>
          <div className={classes.activity}>
            <div>
              <NumberFormat
                thousandSeparator={true}
                fixedDecimalScale={true}
                decimalScale={2}
                className={classes.expensesText}
                value={props.expenses}
                displayType={"text"}
              />
              <span className={classes.currency}>{props.currency}</span>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CreditCard;
