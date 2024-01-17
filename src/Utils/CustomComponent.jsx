import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const Dot = ({ size = "12px", color }) => {
  const dotStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: color,
    display: "inline-block",
  };

  return <div style={dotStyle}></div>;
};

export default function LoadingSpinner({}) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export const SpinnerBlock = ({ height = "40vh", className = "" }) => {
  return (
    <div
      className={`${
        height === "40vh" ? "rounded col-sm-6" : "col-sm-12"
      } ${className}`}
    >
      <div className="m-2 bg-white p-3 rounded" style={{ height: height }}>
        <div className="d-flex align-items-center justify-content-between my-3">
          <span className="mb-2"></span>
        </div>
        <LoadingSpinner />
      </div>
    </div>
  );
};

export const calculateDaysOld = (dateString) => {
  const dateObject = new Date(dateString);
  const currentDate = new Date();
  const dateDifference = currentDate - dateObject;
  const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  return days;
};

export const commonToast = {
  closeOnClick: true,
  autoClose: 3000,
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
};

function trimStringTo5Characters(inputString) {
  if (inputString.length <= 5) {
    return inputString;
  } else {
    return inputString.substring(0, 5);
  }
}

export const IncidentIdCustomCell = (props) => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      // className={classes.buttonLinkClick}
      className="link"
      onClick={() => {
        // console.log(props.props.values.id);
        navigate("/support/" + props.props.values.id);
      }}
    >
      {trimStringTo5Characters(props.props.values.id)}
    </div>
  );
};
export const removeBrTags = (value, replaceWith) => {
  return value.replace(/<br\s*\/?>/gi, replaceWith);
};

export const LiHandleButton = ({ activeTab, handleBtnClick, label, value }) => {
  return (
    <li className="nav-item col ">
      <button
        className={
          activeTab === value
            ? "btn h-100 text-primary w-100 d-flex justify-content-center rounded-0"
            : "btn h-100 w-100 d-flex justify-content-center rounded-0"
        }
        style={{
          borderBottomColor: activeTab === value ? "#ef8860" : "",
        }}
        aria-current="page"
        href="#"
        onClick={() => handleBtnClick(value)}
      >
        {label}
      </button>
    </li>
  );
};