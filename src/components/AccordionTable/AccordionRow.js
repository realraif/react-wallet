import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import CollapsedRows from "./CollapsedRows";

const useStyles = (rowColor) =>
  makeStyles((theme) => ({
    row: {
      backgroundColor: rowColor,
    },
  }));

const AccordionRow = ({
  rowId,
  handleRowClick,
  handleSubRowClick,
  isSelected,
  isCollapsed,
  collapsedArray,
  rowColor,
  subRowColor,
  children,
}) => {

  const classes = useStyles(rowColor)();
  return (
    <>
      <TableRow
        hover
        className={classes.row}
        role="radio"
        tabIndex={-1}
        onClick={(event) => handleRowClick(event, rowId)}
      >
        {children}
      </TableRow>
      <CollapsedRows
        subRowColor={subRowColor}
        collapsedArray={collapsedArray}
        rowId={rowId}
        handleSubRowClick={handleSubRowClick}
        isSelected={isSelected}
        isCollapsed={isCollapsed}
      />
    </>
  );
};

export default AccordionRow;
