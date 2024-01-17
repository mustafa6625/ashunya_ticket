import { Button, Form } from "react-bootstrap";

const MonthInput = ({
  monthFilter,
  switchBtn,
  title,
  handleSetFilterState,
  handleSetSwitch,
  filterCol,
}) => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>Month Filter - {title}</div>
        <div>
          {" "}
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={switchBtn}
            onChange={(e) => handleSetSwitch(e.target.checked, filterCol)}
          />
        </div>
      </div>
      {switchBtn && (
        <div className="d-flex justify-content-around">
          {[3, 6, 12]?.map((data, index) => (
            <Button
              key={index}
              variant={data === monthFilter ? "primary" : "secondary"}
              className="w-25 border"
              onClick={() => handleSetFilterState(data, filterCol)}
            >
              {data}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
export default MonthInput;
