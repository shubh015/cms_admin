import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import FormData from "./components/FormData";
import PreviewForm from "./components/PreviewForm";
import { useSelector } from "react-redux";
import SearchPage from "./components/SearchPage";

function App() {
  const token = useSelector((state) => state.auth.token);

  if (!token) return <Navigate to="/auth" />;

  return (
    <div className="dashboard_wrp h-screen flex font-[Poppins]">
      <Sidebar />
      <div className="flex-1 ml-60 bg-[#edf0ff]">
        <Header />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="applicants" element={<FormData type="applicants" />} />
          <Route path="previewForm" element={<PreviewForm />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="shortlisted" element={<FormData type="shortlisted" />} />
          <Route path="admin" element={<>Admin</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
