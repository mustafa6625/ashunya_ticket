import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tickets from "./TicketSection";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, Routes, Route, Link } from "react-router-dom";
import SingleTicketInfo from "./TicketSection/SingleTicketInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tickets />} />
        <Route path="/support/:incidentId" element={<SingleTicketInfo />} />
      </Routes>
    </div>
  );
}

export default App;
