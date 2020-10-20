import React, { useState, useRef } from "react";
import NumberFormat from "react-number-format";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import RadialBarChart from "components/charts/RadialBarChart/RadialBarChart";

const useStyles = makeStyles((theme) => ({
  chart: {},
  activity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expenseText: {
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
    backgroundColor: "#9191af",
    marginLeft: -16,
    marginRight: -16,
    padding: "0 16px",
  },
}));

const CreditCard = (props) => {
  const [elevation, setElevation] = useState(false);
  const classes = useStyles();
  const chartRef = useRef();

  const selectCard = () => {
    setElevation((oldElevation) => !oldElevation);
  };

  const expensePercent = (props.expense * 100) / props.creditLimit;

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
                className={classes.expenseText}
                value={props.expense}
                displayType={"text"}
              />
              <span className={classes.currency}>{props.currency}</span>
            </div>
            <div className={classes.activity}>
              <RadialBarChart
                chartRef={chartRef}
                data={[
                  {
                    name: "Expenses",
                    percent: expensePercent,
                    color: "#20657b",
                  },
                ]}
                diameter={80}
              />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CreditCard;
