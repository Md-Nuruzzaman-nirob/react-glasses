/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivetRoute = ({ children }) => {
  //

  const { user, loading } = useAuthContext();

  //   shortcut
  //   if (!user) {
  //     return <Navigate to={"/login"} />;
  //   }
  console.log(loading);

  if (loading) return <h3 className=" text-6xl">Loading</h3>;

  if (!user?.email) {
    return <Navigate to={"/login"} />;
  }

  //
  return children;
};

export default PrivetRoute;
