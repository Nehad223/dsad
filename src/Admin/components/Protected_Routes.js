// src/Admin/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = sessionStorage.getItem("role");

  if (!role) return <Navigate to="/admin" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/admin" />;

  return children;
};

export default ProtectedRoute;


