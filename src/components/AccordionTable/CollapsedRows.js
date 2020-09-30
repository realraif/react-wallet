import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";

const useStyles = (rowColor) =>
  makeStyles((theme) => ({
    subRow: {
      backgroundColor: rowColor,
    },
  }));

const CollapsedRows = ({
  collapsedArray,
  rowId,
  handleSubRowClick,
  isSelected,
  isCollapsed,
  subRowColor,
}) => {
  const classes = useStyles(subRowColor)();
  const rowKey = (id) => rowId + "." + id;

  const tableSubRows = collapsedArray.map((subRow) => {
    const isItemSelected = isSelected(rowKey(subRow.id));
    return (
      <TableRow
        hover
        key={subRow.id}
        className={classes.subRow}
        aria-checked={isItemSelected}
        selected={isItemSelected}
        onClick={(event) => handleSubRowClick(event, rowKey(subRow.id))}
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
