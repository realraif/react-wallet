import React from "react";
import TableRow from "@material-ui/core/TableRow";
import CollapsedRows from "./CollapsedRows";

const AccordionRow = ({
  rowId,
  handleRowClick,
  handleSubRowClick,
  isSelected,
  isCollapsed,
  collapsedArray,
  children,
}) => {
  return (
    <>
      <TableRow
        hover
        role="radio"
        tabIndex={-1}
        onClick={(event) => handleRowClick(event, rowId)}
      >
        {children}
      </TableRow>
      <CollapsedRows
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
