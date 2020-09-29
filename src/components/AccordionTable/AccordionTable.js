import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";

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

const AccordionTable = ({ columns, rows, height }) => {
  const classes = useStyles(height)();
  const [selected, setSelected] = React.useState();
  const [collapedRows, setCollapedRows] = React.useState({
    [rows[0].id]: true,
  });

  const handleClick = (event, id) => {
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
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);

                return [
                  <TableRow
                    hover
                    role="radio"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    onClick={() => {
                      setCollapedRows({
                        ...collapedRows,
                        [row.id]: !collapedRows[row.id],
                      });
                    }}
                  >
                    {columns.map((column) => (
                      <TableCell colSpan={3} key={column}>
                        {row[column]}
                      </TableCell>
                    ))}
                  </TableRow>,
                  <TableRow
                    key={row.id + ".1"}
                    selected={isItemSelected}
                    onClick={(event) => handleClick(event, row.id)}
                  >
                    <TableCell padding={"none"} colSpan={12}>
                      <Collapse in={collapedRows[row.id]}>text</Collapse>
                    </TableCell>
                  </TableRow>,
                ];
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AccordionTable;
