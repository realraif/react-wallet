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

const CollapsedRows = ({
  collapsedArray,
  rowId,
  handleClick,
  isSelected,
  isCollapsed,
}) => {
  const rowKey = (id) => rowId + "." + id;

  return collapsedArray.map((subRow) => {
    const isItemSelected = isSelected(rowKey(subRow.id));
    return (
      <TableRow
        hover
        key={subRow.id}
        aria-checked={isItemSelected}
        selected={isItemSelected}
        onClick={(event) => handleClick(event, rowKey(subRow.id))}
      >
        <TableCell padding={"none"} colspan="100%">
          <Collapse in={isCollapsed}>
            <TableRow>
              <TableCell>text</TableCell>
            </TableRow>
          </Collapse>
        </TableCell>
      </TableRow>
    );
  });
};

const AccordionTable = ({ columns, rows, accordionIndex, height }) => {
  const classes = useStyles(height)();
  const [selected, setSelected] = React.useState();
  const [areRowsCollapsed, setAreRowsCollapsed] = React.useState({
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
              {rows.map((row) => [
                <TableRow
                  hover
                  role="radio"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => {
                    setAreRowsCollapsed({
                      ...areRowsCollapsed,
                      [row.id]: !areRowsCollapsed[row.id],
                    });
                  }}
                >
                  {columns.map((column) => (
                    <TableCell key={column}>{row[column]}</TableCell>
                  ))}
                </TableRow>,
                <CollapsedRows
                  key={row.id + "."}
                  collapsedArray={row[accordionIndex]}
                  rowId={row.id}
                  handleClick={handleClick}
                  isSelected={isSelected}
                  isCollapsed={areRowsCollapsed[row.id]}
                />,
              ])}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AccordionTable;
