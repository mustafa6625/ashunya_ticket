import React, { useEffect } from "react";
import DownloadIcon from "mdi-react/TrayArrowDownIcon";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import generateExcel from "zipcelx";
import PdfGenerator from "./DownloadPdf";
import { useState } from "react";
import classes from "../commonGrid.module.css";

const DownloadExcel = ({ title, headerGroups, rows, totalSectionArr }) => {
  const [rowVal, setRowVal] = useState([]);
  const [col, setCol] = useState([]);
  function getExcel() {
    const config = {
      filename: title || "LoanLinq",
      sheet: {
        data: [],
      },
    };

    const dataSet = config.sheet.data;

    // review with one level nested config
    // HEADERS
    headerGroups?.forEach((headerGroup) => {
      const headerRow = [];
      if (headerGroup.headers) {
        headerGroup.headers.forEach((column) => {
          headerRow.push(...getHeader(column));
        });
      }
      col.push(headerRow?.map((data) => data.value));
      dataSet.push(headerRow);
    });

    // FILTERED ROWS
    if (rows.length > 0) {
      rows.forEach((row) => {
        const dataRow = [];

        Object.values(row.values).forEach((value) =>
          dataRow.push({
            value,
            type: typeof value === "number" ? "number" : "string",
          })
        );
        rowVal.push(dataRow?.map((data) => data.value));
        dataSet.push(dataRow);
      });
    } else {
      dataSet.push([
        {
          value: "No data",
          type: "string",
        },
      ]);
    }

    return generateExcel(config);
  }
  useEffect(() => {
    function getExcel() {
      // review with one level nested config
      // HEADERS
      const localCol = [];
      const localrow = [];
      headerGroups?.forEach((headerGroup) => {
        const headerRow = [];
        if (headerGroup.headers) {
          headerGroup.headers.forEach((column) => {
            headerRow.push(...getHeader(column));
          });
        }
        localCol.push(headerRow?.map((data) => data.value));
      });

      // FILTERED ROWS
      if (rows.length > 0) {
        rows?.forEach((row) => {
          const dataRow = [];

          Object.values(row.values).forEach((value) =>
            dataRow.push({
              value,
              type: typeof value === "number" ? "number" : "string",
            })
          );
          localrow.push(dataRow?.map((data) => data.value));
        });
        setCol(localCol);
        setRowVal(localrow);
      }
    }
    getExcel();
  }, [headerGroups, rows]);

  return (
    <OverlayTrigger
      placement={"bottom"}
      rootClose={true}
      trigger="click"
      overlay={
        <Popover
          className="w-5 border-0 shadow-lg rounded"
          style={{ zIndex: "1080" }}
        >
          <Popover.Header className={classes.pOHeader}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">Download</div>
            </div>
          </Popover.Header>
          <Popover.Body className={classes.pOHeader}>
            <p
              role="button"
              className="linkClick cursor-pointer text-decoration-underline"
              onClick={getExcel}
            >
              Download Excel
            </p>
            {rowVal?.length > 0 && (
              <PdfGenerator
                title={title}
                col={col[0]}
                row={rowVal}
                totalSectionArr={totalSectionArr}
              />
            )}
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="secondary">
        <DownloadIcon />
      </Button>
    </OverlayTrigger>
  );
};

export default DownloadExcel;
function getHeader(column) {
  if (column.totalVisibleHeaderCount === 1) {
    return [
      {
        value: column.Header,
        type: "string",
      },
    ];
  } else {
    const span = [...Array(column.totalVisibleHeaderCount - 1)]?.map((x) => ({
      value: "",
      type: "string",
    }));
    return [
      {
        value: column.Header,
        type: "string",
      },
      ...span,
    ];
  }
}
