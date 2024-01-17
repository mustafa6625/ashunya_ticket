import { useState, useEffect } from "react";
import { LiHandleButton } from "../Utils/CustomComponent";
import { SpinnerBlock } from "../Utils/CustomComponent";
import axios from "axios";
import { useParams } from "react-router-dom";
import urls from "../Utils/urls";
import PopupWrapper from "../PopupWrapper";
import { toast } from "react-toastify";
import { commonToast } from "../Utils/CustomComponent";
// import Attachment from "./Attachments";

const SingleTicketInfo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPopup1, setShowPopup1] = useState(false);
  const [ticketDetails, setTicketDetails] = useState(null);
  const [allUpdates, setAllUpdates] = useState(null);
  const [allAttachments, setAllAttachments] = useState(null);
  const [refreshData, setRefreshData] = useState(false);
  const [note, setNote] = useState("");
  const userDetails = JSON.parse(localStorage.getItem("accessed_user"));
  let { incidentId } = useParams();
  const handleBtnClick = (value) => {
    const func = () => setActiveTab(value);
    func();
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(urls.support.getIncidentDetails(incidentId), {
        headers: {
          Authorization: "Basic UkVTVEFQSUxPQU5MSU5ROjg4V2VIZWxwVSQjQA==",
        },
      });
      setTicketDetails(res.data.items[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetcUpdatesData = async () => {
      const res = await axios.get(urls.support.getUpdates(incidentId), {
        headers: {
          Authorization: "Basic UkVTVEFQSUxPQU5MSU5ROjg4V2VIZWxwVSQjQA==",
        },
      });
      setAllUpdates(res.data.items);
    };
    const fetchAttachmentsData = async () => {
      const res = await axios.get(urls.support.getAttachments(incidentId));
      setAllAttachments(res.data.objects);
    };
    fetcUpdatesData();
    fetchAttachmentsData();
  }, [refreshData]);

  const handleUpdateSubmit = () => {
    const id = toast.loading("Creating an Update");
    const data = {
      note: note,
      created_by: userDetails.email,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Basic UkVTVEFQSUxPQU5MSU5ROjg4V2VIZWxwVSQjQA==",
      maxBodyLength: Infinity,
    };
    axios
      .post(urls.support.postUpdate(incidentId), data, { headers })
      .then((response) => {
        setShowPopup1(false);
        toast.update(id, {
          render: "Update Added",
          type: "success",
          isLoading: false,
          ...commonToast,
        });
        setRefreshData((prevRefreshData) => !prevRefreshData);
      })
      .catch((error) => {
        console.error(error);
        toast.update(id, {
          render: "SOME ERROR OCCURED",
          type: "error",
          isLoading: false,
          ...commonToast,
        });
      });
  };

  return (
    <section
      className=" rounded"
      style={{ background: "#eeeeee", minHeight: "100vh" }}
    >
      <div className="mt-5 mb-4 rounded-lg mx-auto px-4">
        <div className="d-flex justify-content-between">
          <h2 className="text-xl bg-light p-4 rounded-top font-weight-bold text-dark">
            Ticket Information
          </h2>
        </div>
        <div className="d-flex bg-white rounded p-3 px-4">
          <div className="p-5 col-6 rounded">
            {ticketDetails ? (
              <dl>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Subject
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.subject ? ticketDetails.subject : "-"}
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ticketDetails.description
                          ? ticketDetails.description
                          : "-",
                      }}
                    ></span>
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Product
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.product_name
                      ? ticketDetails.product_name
                      : "-"}
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Customer
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.customer ? ticketDetails.customer : "-"}
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">Status</dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.status ? ticketDetails.status : "-"}
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Severity
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.serverity_name
                      ? ticketDetails.serverity_name
                      : "-"}
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Resolution Urgency
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.urgency_name
                      ? ticketDetails.urgency_name
                      : "-"}
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Assignee
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.assignee ? ticketDetails.assignee : "-"}
                  </dd>
                </div>
                <div className="border-bottom py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Date Closed
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.date_closed
                      ? ticketDetails.date_closed
                      : "-"}
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm font-weight-bold text-dark">
                    Date Created
                  </dt>
                  <dd className="mt-1 text-sm text-dark">
                    {ticketDetails.created ? ticketDetails.created : "-"}
                  </dd>
                </div>
              </dl>
            ) : (
              <SpinnerBlock />
            )}
          </div>
          <div className="col-6">
            <div
              className="p-3 bg-white my-2"
              style={{ margin: "0 12px 0 16px" }}
            >
              <ul className="nav nav-tabs row col-sm-4">
                {tabButtons?.map((data, index) => (
                  <LiHandleButton
                    key={index}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    label={data.label}
                    value={index}
                    handleBtnClick={handleBtnClick}
                  />
                ))}
              </ul>
            </div>
            {activeTab === 0 && (
              <div className="p-4">
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary mb-5 mx-3 text-white"
                    onClick={() => {
                      setShowPopup1(true);
                    }}
                  >
                    Add an Update
                  </button>
                  {showPopup1 && (
                    <PopupWrapper
                      title={
                        <h2 className="p-4 font-weight-bold text-dark">
                          Add an Update
                        </h2>
                      }
                      Component={
                        <div className="">
                          <label
                            htmlFor="update"
                            className="form-label fw-bold"
                          >
                            Update
                          </label>
                          <input
                            id="update"
                            name="update"
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                              setNote(e.target.value);
                            }}
                          />
                          <div className="d-flex justify-content-end mt-5">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => setShowPopup1(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary text-white"
                              onClick={handleUpdateSubmit}
                              disabled={!note}
                            >
                              Add an Update
                            </button>
                          </div>
                        </div>
                      }
                      toShow={showPopup1}
                      closeEventHandler={() => {
                        setShowPopup1(false);
                      }}
                    />
                  )}
                </div>

                {allUpdates ? (
                  allUpdates?.map((data, index) => {
                    return (
                      <div
                        className="mb-4 d-flex shadow-sm rounded p-3 mb-5"
                        key={index}
                        style={{ gap: "12px" }}
                      >
                        <div
                          className="d-flex justify-content-center align-items-center rounded-circle text-white"
                          style={{
                            height: "2.5rem",
                            width: "2.5rem",
                            backgroundColor: "#94a3b8",
                          }}
                        >
                          <p className="m-0 fw-bold">{data.user_icon}</p>
                        </div>
                        <div className="flex-grow-1">
                          <p
                            className="p-1"
                            dangerouslySetInnerHTML={{
                              __html: data.comment_text,
                            }}
                          />
                          <div>
                            <span className="font-weight-light">
                              {data.user_name}
                            </span>
                            <span className="mx-1 font-weight-light">-</span>
                            <span className="font-weight-light">
                              {data.comment_date}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <SpinnerBlock />
                )}
              </div>
            )}
            {/* {activeTab === 1 && (
              <Attachment
                allAttachments={allAttachments}
                incidentId={incidentId}
                setRefreshData={setRefreshData}
              />
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleTicketInfo;
let tabButtons = [
  {
    label: <p className="p-0 m-0">Updates</p>,
  },
  {
    label: <p className="p-0 m-0">Attachments</p>,
  },
];
