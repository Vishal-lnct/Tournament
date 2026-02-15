import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./styles.css";

function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
