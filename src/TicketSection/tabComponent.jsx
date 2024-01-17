const TabComp = ({ tabsData }) => {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-end align-content-center" style={{gap: "20px"}}>
          {tabsData.map((data) => (
            <div className="card shadow-sm text-center border-0 flex-grow-1" key={data.ticketStatus}>
              <div className="card-body" style={{ padding: "36px" }}>
                {/* <div className="p-4 rounded-circle mx-auto mb-5 d-flex justify-content-center align-content-center" style={{ width: "60px", height: "60px", backgroundColor:`${data.color ? data.color : "#ef8860" }` }}>
                  <p className="text-white my-auto h4 fw-bold">{data.length ? data.length : 0}</p>
                </div> */}
                <p className="text-dark my-auto mb-4 h1 fw-bold">{data.length ? data.length : 0}</p>
                <h5 className="card-title">{data.ticketStatus}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TabComp;
  