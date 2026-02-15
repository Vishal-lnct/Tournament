import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";


import MainLayout from "./MainLayout";
import DashboardLayout from "./DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Dashboard Routes */}
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Overview />} />
</Route>

    </Routes>
  );
}

export default AppRoutes;
