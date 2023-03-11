import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GoPlusSmall } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { getDashboardData } from "../../api/Dashboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchSlice from "../../redux/features/SearchSlice";
import DashboardCard from "../DashboardCard";
import LowerHeader from "../LowerHeader";

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [cardData, setCardData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      const res = await getDashboardData(token);
      console.log(res);
      setCardData(res);
    })();
  }, []);

  return (
    <div className="dashboard_wrp h-full">
      <LowerHeader heading={"Dashboard"} />
      <div class="flex justify-center items-center h-3/4 gap-10 p-4">
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
        <DashboardCard to="/interviewed" title="Interviewed" value={0} />
      </div>
    </div>
  );
};

export default Dashboard;
