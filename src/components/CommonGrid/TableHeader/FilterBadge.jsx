import CloseCircleIcon from "mdi-react/CloseCircleIcon";
import moment from "moment";
import React from "react";
import { Badge } from "react-bootstrap";

const FilterOption = ({ output, handleClose }) => {
  return (
    <div className={`d-flex align-items-center`}>
      {output?.map((data, index) => (
        <div key={index}>
          {data.value !== "" && data.apply ? (
            <div className="mb-4" style={{ paddingLeft: "10px" }}>
              {data.type === "month" ? (
                <BadgeBtn handleClose={() => handleClose(index)}>
                  {data.name} - {data.value} Months
                </BadgeBtn>
              ) : data.type === "date" ? (
                <BadgeBtn handleClose={() => handleClose(index)}>
                  {data.name} -{" "}
                  {moment(data.value, "YYYY-MM-DD").format("MM-DD-YYYY")}
                </BadgeBtn>
              ) : (
                <BadgeBtn handleClose={() => handleClose(index)}>
                  {data.name} - {data.value}
                </BadgeBtn>
              )}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FilterOption;
const BadgeBtn = ({ children, handleClose }) => {
  return (
    <Badge
      bg="grey"
      pill
      className="text-darkgrey fw-normal d-flex justify-content-center align-items-center"
    >
      <p className="m-0 p-0 d-inline" style={{ fontSize: "14px" }}>
        {children}
      </p>
      <span role="button" className="ms-3">
        <CloseCircleIcon size={22}  onClick={handleClose} />
      </span>
    </Badge>
  );
};
