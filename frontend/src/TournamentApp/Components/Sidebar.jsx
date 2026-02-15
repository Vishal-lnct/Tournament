import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <Link to="/dashboard">Overview</Link>
    </div>
  );
}

export default Sidebar;
