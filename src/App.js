import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import FormData from "./components/FormData";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);

  if (!token) return <Navigate to="/auth" />;

  return (
    <div className="dashboard_wrp flex font-[Poppins]">
      <Sidebar />
      <div className="flex-1 overflow-hidden bg-[#edf0ff]">
        <Header />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="applicants" element={<FormData type="applicants" />} />
          <Route path="shortlisted" element={<FormData type="shortlisted" />} />
          <Route path="admin" element={<>Admin</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
