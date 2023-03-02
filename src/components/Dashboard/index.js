import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GoPlusSmall } from "react-icons/go";
import { useSelector,  useDispatch } from "react-redux";
import { getDashboardData } from "../../api/Dashboard";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import SearchSlice from "../../redux/features/SearchSlice";
import DashboardCard from "../DashboardCard";

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [cardData, setCardData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const res = await getDashboardData(token);
      console.log(res);
      setCardData(res);
    })();
  }, []);

  const fetchData = async (title) => {
    const response = await axios.get('');
     console.log(response);
     dispatch(SearchSlice(response.data));
     navigate('/search')
     
   };
  const handleSearch = (e) => {
    e.preventDefault();
   
  }

  return (
    <div className="dashboard_wrp h-[85%]">
      <div className="header flex justify-between items-center mt-6 px-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          <input className="outline-0 p-2 rounded-full" type="text" onClick={handleSearch} onChange={(e) => (e.target.value)}/>
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
