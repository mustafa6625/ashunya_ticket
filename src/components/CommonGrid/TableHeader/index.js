import React, { useState } from "react";
import SearchIcon from "mdi-react/MagnifyIcon";
import { useAsyncDebounce } from "react-table";
import moment from "moment";
import classes from "../commonGrid.module.css";
import Button from "react-bootstrap/Button";
import FilterPopOver from "./FilterPopOver";
import ColumnHidePopOver from "./ColumnHidePopOver";
import SearchSection from "./SearchSection";
import DownloadExcel from "./DownloadExcel";
import FilterBadge from "./FilterBadge";
// import FormBox from "../../FormBox/FormBox";

const TableHeader = ({
  setGlobalFilter,
  state,
  title,
  preGlobalFilteredRows,
  setDataToPopulate,
  headerGroups,
  rows,
  filterOption,
  allColumns,
  hideColumn,
  gridColumns = null,
  columnData = null,
  viewAllModal,
  totalSection,
  totalSectionArr,
  bulkUpdate,
}) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState(state?.globalFilter);
  const keys = filterOption?.reduce(
    (a, v, index) => ({
      ...a,
      [index]: {
        [v.type]: false,
        value: "",
        key: v.key,
        name: v.name,
        type: v.type,
        apply: false,
      },
    }),
    {}
  );
  const [switchBtn, setSwitchBtn] = useState(keys);
  const output = switchBtn ? Object?.values(switchBtn) : [];

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  const handleClose = () => {
    setSearchActive(false);
    setSearchValue("");
    onChange("");
  };

  // Apply Button
  const handleApply = (switchBtnState) => {
    let arr = [...preGlobalFilteredRows];
    filterOption.forEach((data, index) => {
      const value = switchBtnState?.[index]?.value;
      if (data.type === "date" && value !== "") {
        arr = arr?.filter(
          (item) =>
            moment(item?.[data?.key], "MM-DD-YYYY").format("YYYY-MM-DD") ===
            value
        );
        setSwitchBtn((data) => ({
          ...data,
          [index]: { ...data[index], apply: true },
        }));
      } else if (data.type === "month" && value !== "") {
        const MonthsAgo = new Date();
        MonthsAgo.setMonth(MonthsAgo.getMonth() - value);
        arr = arr?.filter((item) => {
          const objDate = new Date(
            moment(item?.[data?.key], "MM-DD-YYYY").format("YYYY-MM-DD")
          );
          return objDate >= MonthsAgo;
        });
        setSwitchBtn((data) => ({
          ...data,
          [index]: { ...data[index], apply: true },
        }));
      } else if (data.type === "range" && value !== "") {
        const filterRange = (arr, a, b) =>
          arr?.filter(
            (item) => a <= item?.[data?.key] && item?.[data?.key] <= b
          );
        const finalOutPut = filterRange(arr, value?.min, value?.max);
        if (value?.min !== 0) {
          arr = finalOutPut;
        }
        setSwitchBtn((data) => ({
          ...data,
          [index]: { ...data[index], apply: true },
        }));
      }
    });
    setDataToPopulate(arr);
  };
  const handleCrossBtn = async (index) => {
    setSwitchBtn((data) => ({
      ...data,
      [index]: { ...keys[index] },
    }));

    handleApply({
      ...switchBtn,
      [index]: { ...keys[index] },
    });
  };
  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center ${classes.paddingAndHeight}`}
      >
        {searchActive ? (
          <>
            <SearchSection
              classes={classes}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChange={onChange}
              handleClose={handleClose}
            />
          </>
        ) : (
          <>
            <h2 className={classes.h2}>{title}</h2>
            {bulkUpdate && (
              <div className="d-flex justify-content-center align-items-center">
                {/* <FormBox
                  options={bulkUpdate.options}
                  register={bulkUpdate.register}
                  watch={bulkUpdate.watch}
                  setValue={bulkUpdate.setValue}
                />
                {bulkUpdate.comp}
                */}
              </div>
            )}
            <div
              className="d-flex justify-content-between align-items-center pointer top-btn"
              role="button"
            >
              <Button variant="secondary">
                <SearchIcon onClick={() => setSearchActive(true)} />
              </Button>
              <DownloadExcel
                title={title}
                headerGroups={headerGroups}
                rows={rows}
                gridColumns={gridColumns}
                columnData={columnData}
                viewAllModal={viewAllModal}
                filterOption={filterOption}
                totalSection={totalSection}
                totalSectionArr={totalSectionArr}
              />
              {filterOption && (
                <FilterPopOver
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  setDataToPopulate={setDataToPopulate}
                  filterOption={filterOption}
                  switchBtn={switchBtn}
                  setSwitchBtn={setSwitchBtn}
                  keys={keys}
                  handleApply={handleApply}
                />
              )}
              {hideColumn && <ColumnHidePopOver allColumns={allColumns} />}
            </div>
          </>
        )}
      </div>
      {output?.length ? (
        <FilterBadge output={output} handleClose={handleCrossBtn} />
      ) : null}
    </>
  );
};

export default TableHeader;
