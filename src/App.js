import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="dashboard_wrp flex">
      <Sidebar />
      <div className="flex-1 bg-[#edf0ff]">
        <Header />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="admin" element={<>Admin</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
