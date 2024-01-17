import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import TuneVariant from "mdi-react/TuneVariantIcon";
import classes from "../../commonGrid.module.css";
import MultiRangeSlider from "./MultiRangeSlider";
import MonthInput from "./MonthInput";
import DateInput from "./DateInput";

const FilterPopOver = ({
  preGlobalFilteredRows,
  setDataToPopulate,
  filterOption,
  switchBtn,
  setSwitchBtn,
  keys,
  handleApply,
}) => {
  const handleSetSwitch = (e, filterCol) => {
    setSwitchBtn((data) => ({
      ...data,
      [filterCol.index]: { ...data[filterCol.index], [filterCol.type]: e },
    }));
  };
  const handleSetFilterState = (e, filterCol) => {
    setSwitchBtn((data) => ({
      ...data,
      [filterCol.index]: { ...data[filterCol.index], value: e },
    }));
  };
  // reset Button
  const handleReset = () => {
    setDataToPopulate(preGlobalFilteredRows);
    setSwitchBtn(keys);
  };
  return (
    <>
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
                <div className="d-flex">Filter</div>
                <div
                  role="button"
                  onClick={handleReset}
                  className={`${classes.linkColor}`}
                >
                  Reset
                </div>
              </div>
            </Popover.Header>
            <Popover.Body className={classes.pOHeader}>
              {filterOption?.map((data, key) => {
                if (data.type === "range") {
                  return (
                    <div className="mb-5" key={key}>
                      <MultiRangeSlider
                        title={data?.name}
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        switchBtn={switchBtn?.[key]?.[data.type]}
                        handleSetSwitch={handleSetSwitch}
                        handleSetFilterState={handleSetFilterState}
                        filterCol={{ ...data, index: key }}
                      />
                    </div>
                  );
                } else if (data.type === "date") {
                  return (
                    <div className="mb-3" key={key}>
                      <DateInput
                        title={data?.name}
                        dateFilter={switchBtn?.[key]?.value}
                        switchBtn={switchBtn?.[key]?.[data.type]}
                        handleSetSwitch={handleSetSwitch}
                        handleSetFilterState={handleSetFilterState}
                        filterCol={{ ...data, index: key }}
                      />
                    </div>
                  );
                } else if (data.type === "month") {
                  return (
                    <div className="mb-5" key={key}>
                      <MonthInput
                        title={data?.name}
                        monthFilter={switchBtn?.[key]?.value}
                        switchBtn={switchBtn?.[key]?.[data.type]}
                        handleSetSwitch={handleSetSwitch}
                        handleSetFilterState={handleSetFilterState}
                        filterCol={{ ...data, index: key }}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              <Button
                onClick={() => handleApply(switchBtn)}
                variant="primary"
                className="w-100 text-white"
              >
                Apply
              </Button>
            </Popover.Body>
          </Popover>
        }
      >
        <Button disabled={!filterOption} variant="secondary">
          <TuneVariant />
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default FilterPopOver;
