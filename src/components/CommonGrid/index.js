/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useSortBy,
} from "react-table";
// Constant
import { __CommonGridData } from "./constants";
// Components
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
// Css Module
import classes from "./commonGrid.module.css";
import formatNumber from "format-number";
import { SpinnerBlock } from "../../Utils/CustomComponent";

const CommonGrid = ({
  commonGridData = __CommonGridData,
  height = null,
  className = "",
  title = null,
  gridColumns = null,
  columnData = null,
  tHeight = "30rem",
  numberOfRows = 10,
  viewAllModal = true,
  hideColumn = false,
  totalSection = null,
  totalSectionArr = null,
  filterOption,
  tableTotal = null,
  hiddenColumns = [],
  pagination,
  bulkUpdate,
  status = "fulfilled",
  minHeight = "700px",
  header = true,
  footer = true,
}) => {
  const [dataToPopulate, setDataToPopulate] = useState(
    columnData == null ? commonGridData.columnData : columnData
  );

  const [gridColumnDefinitions, setGridColumnDefinitions] = useState(
    gridColumns == null ? commonGridData.gridColumns : gridColumns
  );
  useEffect(() => {
    setDataToPopulate(
      columnData == null ? commonGridData.columnData : columnData
    );
    setGridColumnDefinitions(
      gridColumns == null ? commonGridData.gridColumns : gridColumns
    );
  });
  const mappedColumnsData = gridColumnDefinitions?.map((data) =>
    data.title.toLowerCase().includes("date")
      ? {
          Header: data.title,
          accessor: data.field,
          maxWidth: 70,
          minWidth: 50,
          width: 60,
          sortType: (a, b) => {
            return (
              new Date(b.values[data.field]) - new Date(a.values[data.field])
            );
          },
          ...data,
        }
      : {
          Header: data.title,
          accessor: data.field,
          maxWidth: 70,
          minWidth: 50,
          width: 60,
          ...data,
        }
  );
  if (tableTotal) {
    const keys = mappedColumnsData
      ?.map((data) => data.accessor)
      .reduce((a, v) => ({ ...a, [v]: "" }), {});
    tableTotal.forEach((element) => {
      const no = dataToPopulate
        ?.map((data) => Number(data?.[element] || 0))
        .reduce((partialSum, a) => partialSum + a, 0);
      keys[element] = formatNumber({ prefix: "$", round: 2 })(
        parseFloat(no).toFixed(5)
      );
    });

    const finalobj = Object.values(keys);
    let totalIndex = 0;
    finalobj.every((data, index) => {
      if (data?.length > 0) {
        totalIndex = index - 1;
        return false;
      } else return true;
    });
    totalSection = (
      <>
        {finalobj?.map((data, index) =>
          index === 0 ? (
            <td key={index} className="total"></td>
          ) : index === totalIndex ? (
            <td key={index}>Total</td>
          ) : (
            <td key={index}>{data}</td>
          )
        )}
      </>
    );
    totalSectionArr = finalobj?.map((data, index) =>
      index === 0 ? "" : index === totalIndex ? "Total" : data
    );
  }
  // React Table
  const columns = useMemo(() => mappedColumnsData, []);
  const data = useMemo(() => dataToPopulate, [dataToPopulate]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns: columns,
      data: data,
      initialState: { pageSize: numberOfRows, hiddenColumns: hiddenColumns },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { pageIndex } = state;
  return (
    <div className={`rounded pb-2 ${className}`}>
      <div
        className="mx-2 mb-5 bg-white p-0 rounded w-100"
        style={{ height: height }}
      >
        <div className={classes.tableBackground} style={{ minHeight }}>
          {header && (
            <TableHeader
              setGlobalFilter={setGlobalFilter}
              state={state}
              title={title}
              rows={rows}
              headerGroups={headerGroups}
              dataToPopulate={dataToPopulate}
              preGlobalFilteredRows={columnData || commonGridData.columnData}
              setDataToPopulate={setDataToPopulate}
              filterOption={filterOption}
              allColumns={allColumns}
              getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
              hideColumn={hideColumn}
              gridColumns={gridColumns}
              columnData={columnData}
              viewAllModal={viewAllModal}
              totalSection={totalSection}
              totalSectionArr={totalSectionArr}
              bulkUpdate={bulkUpdate}
            />
          )}
          {status === "fulfilled" ? (
            <>
              <TableBody
                getTableProps={getTableProps}
                classes={classes}
                headerGroups={headerGroups}
                tHeight={tHeight}
                getTableBodyProps={getTableBodyProps}
                page={page}
                prepareRow={prepareRow}
                totalSection={totalSection}
                title={title}
                viewAllModal={viewAllModal}
              />
              {footer && (
                <TableFooter
                  pagesCount={pageCount}
                  currentPage={pageIndex + 1}
                  setCurrentPage={gotoPage}
                  pageIndex={pageIndex}
                  pageOptions={pageOptions}
                  classes={classes}
                  title={title}
                  gridColumns={gridColumns}
                  columnData={columnData}
                  viewAllModal={viewAllModal}
                  filterOption={filterOption}
                  totalSection={totalSection}
                  pagination={pagination}
                  numberOfRows={numberOfRows}
                />
              )}
            </>
          ) : (
            <SpinnerBlock className={className} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonGrid;
