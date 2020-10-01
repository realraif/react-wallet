import React from "react";
import clsx from "clsx";
import TableRow from "@material-ui/core/TableRow";
import CollapsedRows from "./CollapsedRows";

const AccordionRow = ({
  rowId,
  handleRowClick,
  handleSubRowClick,
  isSelected,
  isCollapsed,
  isChecked,
  collapsedArray,
  classes,
  children,
}) => {
  return (
    <>
      <TableRow
        hover
        className={clsx(classes.row, {
          [classes.Disabledrow]: !isChecked,
        })}
        role="radio"
        tabIndex={-1}
        onClick={() => handleRowClick(rowId)}
      >
        {children}
      </TableRow>
      <CollapsedRows
        classes={classes}
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
