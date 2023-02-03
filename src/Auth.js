import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

const Auth = () => {
  const token = useSelector((state) => state.auth.token);
  if (token) return <Navigate to="/" />;
  return (
    <div>
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Auth;
