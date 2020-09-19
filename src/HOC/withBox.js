import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    borderRadius: theme.box.borderRadius,
    border: `1px solid ${theme.box.borderColor}`,
    boxShadow: "none"
  }
}));

const WithBox = ( props ) => {
  const classes = useStyles();

  return(
    <Paper className={classes.box}>
      {props.children}
    </Paper>
  );
};

export default WithBox;
