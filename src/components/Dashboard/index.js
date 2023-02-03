import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GoPlusSmall } from "react-icons/go";
import { useSelector } from "react-redux";
import { getDashboardData } from "../../api/Dashboard";
import DashboardCard from "../DashboardCard";

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getDashboardData(token);
      console.log(res);
      setCardData(res);
    })();
  }, []);

  return (
    <div className="dashboard_wrp h-[85%]">
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

      <div class="flex justify-center items-center h-3/4 gap-10 px-4">
        <DashboardCard
          to="/applicants"
          title="Applicants"
          value={cardData[0]?.data?.allAplications || 0}
        />
        <DashboardCard
          to="/shortlisted"
          title="Shortlisted"
          value={cardData[1]?.data?.shortlistedAplications || 0}
        />
        <DashboardCard to="/interviewed" title="Interviewed" value={97} />
      </div>
    </div>
  );
};

export default Dashboard;
