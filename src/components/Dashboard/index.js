import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDashboardData, getUserData } from "../../api/Dashboard";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../DashboardCard";
import LowerHeader from "../LowerHeader";
import { setUser } from "../../redux/features/AuthSlice";

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [cardData, setCardData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const user = await getUserData(token);
      if (user.status === 200) {
        dispatch(setUser(user.data.user));
      }
      const res = await getDashboardData(token);

      console.log(res);
      setCardData(res);
    })();
  }, []);

  return (
    <div className="dashboard_wrp h-full">
      <div class="flex justify-center items-center h-3/4 gap-10 px-4 pt-32">
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
