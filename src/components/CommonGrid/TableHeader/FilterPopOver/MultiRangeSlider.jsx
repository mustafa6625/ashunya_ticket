import { useCallback, useEffect, useRef, useState } from "react";
import classes from "../../commonGrid.module.css";
import { Form } from "react-bootstrap";

const MultiRangeSlider = ({
  title,
  preGlobalFilteredRows,
  switchBtn,
  filterCol,
  handleSetFilterState,
  handleSetSwitch,
}) => {
  const principal = [
    ...preGlobalFilteredRows?.map((data) => data?.[filterCol.key] || 0),
  ];
  const min = Math.min.apply(Math, principal);
  const max = Math.max.apply(Math, principal);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className={switchBtn ? classes.container : undefined}>
      <div className={`mb-4 d-flex justify-content-between`}>
        <div>{title}</div>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={switchBtn}
          onChange={(e) => handleSetSwitch(e.target.checked, filterCol)}
        />
      </div>
      {switchBtn && (
        <div>
          {/* <div>Principal Amount</div> */}
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
              const value = Math.min(+event.target.value, maxVal - 1);
              setMinVal(value);
              event.target.value = value.toString();
              handleSetFilterState({ min: minVal, max: maxVal }, filterCol);
            }}
            className={`${classes.thumb} ${classes.thumbZindex3}`}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => {
              const value = Math.max(+event.target.value, minVal + 1);
              setMaxVal(value);
              event.target.value = value.toString();
              handleSetFilterState({ min: minVal, max: maxVal }, filterCol);
            }}
            className={`${classes.thumb} ${classes.thumbZindex4}`}
          />

          <div className={classes.slider}>
            <div className={classes.sliderTrack}></div>
            <div ref={range} className={classes.sliderRange}></div>
            <div className={classes.sliderLeftValue}>${minVal}</div>
            <div className={classes.sliderRightValue}>${maxVal}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MultiRangeSlider;
