import React from "react";
import SortBoolAscendingVariantIcon from "mdi-react/SortAscendingIcon";
import SortBoolDescendingVariantIcon from "mdi-react/SortDescendingIcon";

const TableBody = ({
  getTableProps,
  classes,
  headerGroups,
  tHeight,
  getTableBodyProps,
  page,
  prepareRow,
  totalSection,
  title,
  viewAllModal
}) => {
  return (
    <table className={classes.table} {...getTableProps()}>
      <thead className={classes.tHead}>
        {headerGroups?.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className={classes.tRow}>
            {headerGroup.headers?.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{ ...column.style, wordBreak: "break-word" }}
              >
                <div className="d-flex align-items-center">
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <SortBoolDescendingVariantIcon />
                    ) : (
                      <SortBoolAscendingVariantIcon />
                    )
                  ) : (
                    ""
                  )}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        className={classes.tBody}
        style={{ height: tHeight }}
        {...getTableBodyProps()}
      >
        {page?.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={classes.tRow}>
              {row.cells?.map((cell) => {
                return (
                  <td style={cell.column.style} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
        {!page.length ? (
          <tr
            className={classes.tRow}
            style={{ textAlign: "center", color: "grey" }}
          >
            <td> No {title}</td>
          </tr>
        ) : null}
        {!viewAllModal && totalSection && <tr className={classes.tRow}>{totalSection}</tr>}
      </tbody>
    </table>
  );
};

export default TableBody;
