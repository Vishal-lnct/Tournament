import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./styles.css";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
