import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import AccordionRow from "./AccordionRow";

const useStyles = (height) =>
  makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
    },
    tableContainer: {
      height: height,
      overflowX: "hidden",
    },
    table: {
      cursor: "pointer",
    },
  }));

const AccordionTable = ({ columns, rows, accordionIndex, height }) => {
  const classes = useStyles(height)();
  const [selected, setSelected] = React.useState();
  const [areRowsCollapsed, setAreRowsCollapsed] = React.useState({
    [rows[0].id]: true,
  });

  const handleRowClick = (event, rowId) => {
    setAreRowsCollapsed({
      ...areRowsCollapsed,
      [rowId]: !areRowsCollapsed[rowId],
    });
  };

  const handleSubRowClick = (event, id) => {
    setSelected(id);
  };

  const isSelected = (id) => id === selected;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <TableContainer className={classes.tableContainer}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="radio table"
          >
            <TableBody>
              {rows.map((row) => (
                <AccordionRow
                  key={row.id}
                  rowId={row.id}
                  handleRowClick={handleRowClick}
                  handleSubRowClick={handleSubRowClick}
                  isSelected={isSelected}
                  isCollapsed={areRowsCollapsed[row.id]}
                  collapsedArray={row[accordionIndex]}
                >
                  {columns.map((column) => (
                    <TableCell key={column}>{row[column]}</TableCell>
                  ))}
                </AccordionRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AccordionTable;
