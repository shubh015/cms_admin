import React from "react";
import { GoPlusSmall } from "react-icons/go";
import DashboardCard from "../DashboardCard";

const Dashboard = () => {
  return (
    <div className="dashboard_wrp h-full">
      <div className="header flex justify-between items-center mt-6 px-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          <input className="outline-0 p-2 rounded-full" type="text" />
          <button className="bg-blue-600 px-1 flex gap-1 items-center text-sm rounded-md text-white">
            <GoPlusSmall />
            Add New Applicant
          </button>
        </div>
      </div>

      <div class="flex justify-center items-center h-3/4 gap-4 px-4">
        <DashboardCard title="Applicants" value={66} />
        <DashboardCard title="Shortlisted" value={20} />
        <DashboardCard title="Interviewed" value={97} />
      </div>
    </div>
  );
};

export default Dashboard;
