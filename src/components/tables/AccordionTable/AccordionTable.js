import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import AccordionRow from "./AccordionRow";
import Checkbox from "@material-ui/core/Checkbox";

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

const AccordionTable = ({ columns, rows, accordionIndex, styles }) => {
  const classes = useStyles(styles.height)();
  const [selected, setSelected] = React.useState();
  const [checkedRows, setChecked] = React.useState([]);
  const [areRowsCollapsed, setAreRowsCollapsed] = React.useState({
    [rows[0].id]: true,
  });

  const handleRowClick = (rowId) => {
    setAreRowsCollapsed({
      ...areRowsCollapsed,
      [rowId]: !areRowsCollapsed[rowId],
    });
  };

  const handleSubRowClick = (subRowId) => {
    setSelected(subRowId);
  };

  const handleCheck = (event, rowId) => {
    event.stopPropagation();
    const checkedIndex = checkedRows.indexOf(rowId);
    let newChecked = [...checkedRows];

    if (checkedIndex === -1) {
      newChecked.push(rowId);
    } else {
      newChecked.splice(checkedIndex, 1);
    }

    setChecked(newChecked);
  };

  const isSelected = (id) => id === selected;
  const isChecked = (id) => checkedRows.indexOf(id) !== -1;

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
              {rows.map((row) => {
                const isRowChecked = isChecked(row.id);

                return (
                  <AccordionRow
                    key={row.id}
                    rowId={row.id}
                    handleRowClick={handleRowClick}
                    handleSubRowClick={handleSubRowClick}
                    isSelected={isSelected}
                    isCollapsed={areRowsCollapsed[row.id]}
                    collapsedArray={row[accordionIndex]}
                    rowColor={styles.rowColor}
                    subRowColor={styles.subRowColor}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isRowChecked}
                        onClick={(event) => handleCheck(event, row.id)}
                      />
                    </TableCell>
                    {columns.map((column) => (
                      <TableCell key={column}>{row[column]}</TableCell>
                    ))}
                  </AccordionRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AccordionTable;
