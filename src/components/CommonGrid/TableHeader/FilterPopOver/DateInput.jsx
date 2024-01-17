import moment from "moment";
import { Form } from "react-bootstrap";

const DateInput = ({
  title,
  dateFilter,
  switchBtn,
  handleSetFilterState,
  handleSetSwitch,
  filterCol,
}) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Form.Group>
            <div className={"d-flex justify-content-between mb-4"}>
              <div>{title}</div>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={switchBtn}
                onChange={(e) => handleSetSwitch(e.target.checked, filterCol)}
              />
            </div>
            {switchBtn && (
              <Form.Control
                value={dateFilter}
                onChange={(e) => {
                  const output = moment(new Date(e.target.value)).format(
                    "YYYY-MM-DD"
                  );
                  handleSetFilterState(output, filterCol);
                }}
                disabled={!switchBtn}
                type="date"
                placeholder=""
              />
            )}
          </Form.Group>
        </div>
      </div>
    </div>
  );
};
export default DateInput;
