import React, { useContext } from "react";
import { AuthContext } from "../../components/firebase/Authprovider";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../../pages/loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Loading></Loading>;
  if (user) return children;
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
