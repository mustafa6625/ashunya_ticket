import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { SpinnerBlock, calculateDaysOld } from "../Utils/CustomComponent";
import TabComp from "./tabComponent";
import DaysOldComp from "./DaysOldComp";
import PopupWrapper from "../PopupWrapper";
import CreateTicket from "./createTicket";
import axios from "axios";
import { Doughnut, Bar } from "react-chartjs-2";
import CommonGrid from "../components/CommonGrid";
import { IncidentIdCustomCell } from "../Utils/CustomComponent";

import urls from "../Utils/urls";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ArcElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ArcElement);

const gridColumns_ticket = [
  {
    field: "id",
    title: "Incident Id",
    style: { width: "5%", wordBreak: "break-all" },
    Cell: ({ row }) => <IncidentIdCustomCell props={row} />,
  },
  {
    field: "created",
    title: "Age",
    style: { width: "5%", wordBreak: "break-all" },
    // Cell: ({ value }) => {
    //   const daysOld = calculateDaysOld(value);
    //   if (daysOld < 1) {
    //     return <Dot color="green" />;
    //   } else if (daysOld > 1 && daysOld < 8) {
    //     return <Dot color="yellow" />;
    //   } else {
    //     return <Dot color="red" />;
    //   }
    // },
  },
  {
    field: "assignee",
    title: "Assignee",
    style: { width: "10%", wordBreak: "break-all" },
    // Cell: ({ value }) => {
    //   if (!value) {
    //     return "Unassigned";
    //   } else {
    //     return value;
    //   }
    // },
  },
  {
    field: "product_name",
    title: "Product Name",
    style: { width: "10%", wordBreak: "break-all" },
  },
  {
    field: "severity_name",
    title: "Severity Name",
    style: { width: "10%", wordBreak: "break-all" },
  },
  {
    field: "status",
    title: "Status",
    style: { width: "10%", wordBreak: "break-all" },
  },
  {
    field: "subject",
    title: "Subject",
    style: { width: "10%", wordBreak: "break-all" },
  },
];
const Tickets = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [allTickets, setAllTickets] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);
  const [tabsData, setTabsData] = useState(null);
  const [barChartData, setBarChartData] = useState({});
  const today = new Date().toISOString().split("T")[0];

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  localStorage.setItem("apex_userid", 20885);
  const userId = localStorage.getItem("apex_userid");
  useEffect(() => {
    if (allTickets) {
      const oneDayOld = allTickets.filter(
        (ticket) => calculateDaysOld(ticket.created) <= 1
      );

      const twoDaysToOneWeek = allTickets.filter(
        (ticket) =>
          calculateDaysOld(ticket.created) > 1 &&
          calculateDaysOld(ticket.created) <= 7
      );

      const overOneWeek = allTickets.filter(
        (ticket) => calculateDaysOld(ticket.created) > 7
      );

      const newBarChartData = {
        labels: ["1 Day Old", "2 Days - 1 Week", "Over 1 week old"],
        datasets: [
          {
            data: [
              oneDayOld.length,
              twoDaysToOneWeek.length,
              overOneWeek.length,
            ],
            backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
            borderColor: ["#36A2EB", "#FFCE56", "#FF6384"],
            borderWidth: 1,
          },
        ],
      };

      setBarChartData(newBarChartData);
    }
  }, [allTickets]);

  useEffect(() => {
    axios
      .get(urls.ticketing.getAllTickets(userId), {
        headers: {
          Authorization: "Basic UkVTVEFQSUxPQU5MSU5ROjg4V2VIZWxwVSQjQA==",
        },
      })
      .then((res) => {
        setAllTickets(res.data.items);
        const newTabsData = [
          {
            length: res.data.items?.filter((ticket) =>
              ticket.created.includes(today)
            ).length,
            ticketStatus: "Tickets Created Today",
            color: "#333",
          },
          {
            length: res.data.items?.filter(
              (ticket) => ticket.assigned_to_group_id === null
            ).length,
            ticketStatus: "Unassigned Tickets",
            color: "#60a5fa",
          },
          {
            length: res.data.items?.filter((ticket) =>
              ticket.status.includes("Open")
            ).length,
            ticketStatus: "Open Tickets",
            color: "#60a5fa",
          },
        ];
        setTabsData(newTabsData);
      });
  }, [refreshTable, userId]);

  const prepareChartData = () => {
    if (!allTickets) return null;

    const urgencyLevels = ["Low", "Medium", "High"];
    const data = urgencyLevels.map((level) => {
      const ticketsWithLevel = allTickets.filter(
        (ticket) =>
          ticket.status_name.includes("Pending") && ticket.urgency_name === level
      );
      return ticketsWithLevel.length;
    });
    return {
      labels: urgencyLevels,
      datasets: [
        {
          data,
          backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        },
      ],
    };
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;

      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize - 1 + "rem sans-serif";
      ctx.textBaseline = "middle";

      var text = `Total ${allTickets.length}`,
        textWidth = ctx.measureText(text).width,
        textX = (width - textWidth) / 2,
        textY = height / 2 + 4;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return (
    <div style={{ overflowY: "scroll" }}>
      <section
        className=" rounded"
        style={{ background: "#eeeeee", minHeight: "100vh" }}
      >
        <div className="d-flex justify-content-between mt-4 bg-white pb-4">
          <h2 className="text-xl p-4 rounded-top font-weight-bold text-dark">
            All Tickets
          </h2>
          <Button
            className="text-white me-5 mt-5"
            onClick={() => {
              setShowPopup(true);
            }}
          >
            Create Ticket
          </Button>
          {showPopup && (
            <PopupWrapper
              title={
                <h2 className="p-4 font-weight-bold text-dark">
                  Create Ticket
                </h2>
              }
              Component={
                <CreateTicket
                  close={() => setShowPopup(false)}
                  refreshTable={() => setRefreshTable(!refreshTable)}
                />
              }
              toShow={showPopup}
              closeEventHandler={() => {
                setShowPopup(false);
              }}
            />
          )}
        </div>
        <div className="d-flex px-5">
          <div className="mt-5 mb-3 me-4 col-8">
            {tabsData ? <TabComp tabsData={tabsData} /> : <SpinnerBlock />}
          </div>
          <div className="mt-5 mb-3 col-4">
            {tabsData ? <DaysOldComp /> : ""}
          </div>
        </div>
        <div className="d-flex">
          <div className="p-4 col-sm-9">
            {allTickets ? (
              <CommonGrid
                className={"col-sm-12"}
                title={"Tickets"}
                gridColumns={gridColumns_ticket}
                columnData={allTickets}
              />
            ) : (
              <SpinnerBlock />
            )}
          </div>
          <div className="p-4 col-sm-3 d-flex">
            <div className="bg-white rounded flex-grow-1">
              <h4 className="p-4">Open Tickets: Severity Level</h4>
              <div
                className="p-4 mb-5"
                style={{ width: "290px", height: "290px", margin: "auto" }}
              >
                {allTickets ? (
                  <Doughnut
                    key={refreshTable}
                    data={prepareChartData()}
                    plugins={[textCenter]}
                    options={{
                      cutout: "80%",
                      elements: {
                        arc: {
                          borderWidth: 0,
                          innerRadius: "80%",
                        },
                      },
                      hover: {
                        mode: "nearest",
                        intersect: true,
                      },
                      hoverOffset: 5,
                    }}
                  />
                ) : (
                  <SpinnerBlock />
                )}
              </div>
              <div className="mt-5 p-4 pt-5 me-4 d-flex flex-column justify-content-center align-content-end">
                <h4 className="p-4">Ticket Aging</h4>
                {barChartData.labels ? (
                  <Bar
                    key={refreshTable}
                    data={barChartData}
                    options={options}
                  />
                ) : (
                  <SpinnerBlock />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
