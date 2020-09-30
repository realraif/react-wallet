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

const useStylesSub = makeStyles((theme) => ({
  subRow: {
    backgroundColor: "black",
  },
}));

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

const CollapsedRows = ({
  collapsedArray,
  rowId,
  handleSubRowClick,
  isSelected,
  isCollapsed,
}) => {
  const classes = useStylesSub();
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
