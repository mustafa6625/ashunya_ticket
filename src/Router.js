// router.js
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import SingleTicketInfo from "./TicketSection/SingleTicketInfo";
import Tickets from "./TicketSection";

export const createRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Tickets />,
    },
    {
        path: "/support/:incidentId",
        element: <SingleTicketInfo />,
    },
  ]);

  return router;
};
