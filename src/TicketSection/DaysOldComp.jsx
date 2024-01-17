import { Dot } from "../Utils/CustomComponent";

const DaysOldComp = ({ tabsData }) => {
    return (
      <div className="container" style={{height: "100%"}}>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-start align-content-center"
          style={{ gap: "20px", height: "100%" }}
        >
          <div
            className="card shadow-sm text-center border-0 flex-row" style={{height: "100%", width: "100%"}}
          >
            <div className="card-body d-flex flex-column justify-content-center" style={{ padding: "36px" }}>
              <div>
              <Dot color="green" size="16px"/>
              </div>
              <p className="card-title mt-3 fw-bold">1 Day old</p>
            </div>
            <div className="card-body d-flex flex-column justify-content-center" style={{ padding: "36px" }}>
              <div>
              <Dot color="yellow" size="16px"/>
              </div>
              <p className="card-title mt-3 fw-bold">2 Days - 1 Week</p>
            </div>
            <div className="card-body d-flex flex-column justify-content-center" style={{ padding: "36px" }}>
              <div>
              <Dot color="red" size="16px"/>
              </div>
              <p className="card-title mt-3 fw-bold">Over 1 week old</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DaysOldComp;