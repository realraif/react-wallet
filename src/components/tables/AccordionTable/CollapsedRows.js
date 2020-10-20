import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";

const CollapsedRows = ({
  collapsedArray,
  handleSubRowClick,
  isSelected,
  isCollapsed,
  classes,
  columns
}) => {
  const tableSubRows = collapsedArray.map((subRow) => {
    const isItemSelected = isSelected(subRow.id);

    return (
      <TableRow
        hover
        key={subRow.id}
        className={classes.subRow}
        selected={isItemSelected}
        onClick={() => handleSubRowClick(subRow.id)}
      >
        {columns.map((column) => (
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
