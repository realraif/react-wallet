import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionWrapper: {
    marginBottom: 10,
  },
  sectionTitle: {
    textTransform: "uppercase",
    height: `${theme.customSpacing.sectionTitle}px`,
    display: "flex",
    alignItems: "flex-end",
  },
}));

const withSection = (WrappedComponent, sectionName) => {
  return (props) => {
    const classes = useStyles();

    return (
      <div className={classes.sectionWrapper}>
        <Typography
          color="textSecondary"
          variant="caption"
          className={classes.sectionTitle}
        >
          {sectionName}
        </Typography>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withSection;
