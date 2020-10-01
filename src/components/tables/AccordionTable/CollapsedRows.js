import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";

const CollapsedRows = ({
  collapsedArray,
  rowId,
  handleSubRowClick,
  isSelected,
  isCollapsed,
  classes,
}) => {

  const tableSubRows = collapsedArray.map((subRow) => {
    const rowKey = rowId + "." + subRow.id;
    const isItemSelected = isSelected(rowKey);
    
    return (
      <TableRow
        hover
        key={rowKey}
        className={classes.subRow}
        selected={isItemSelected}
        onClick={() => handleSubRowClick(rowKey)}
      >
        {["name", "expenses"].map((column) => (
          <TableCell key={column}>{subRow[column]}</TableCell>
        ))}
      </TableRow>
    );
  });

  return (
    <TableRow>
      <TableCell padding="none" colSpan="100%" style={{ border: 0 }}>
        <Collapse in={isCollapsed}>
          <Table size="small">
            <TableBody>{tableSubRows}</TableBody>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsedRows;
