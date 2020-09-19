import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const CreditCard = (props) => {
  const [elevation, setElevation] = useState(false);

  const selectCard = () => {
    setElevation((oldElevation) => !oldElevation);
  };

  return (
    <Card elevation={elevation ? 5 : 0}>
      <CardActionArea onClick={selectCard}>
        <CardContent>
          <Typography gutterBottom>{props.cardID}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CreditCard;
