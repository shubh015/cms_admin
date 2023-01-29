import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const value = 66;
  return (
    <div className="dashboard_wrp ">
      <div class="bg-gray-300 flex justify-center items-center h-screen">
        <p className="text-xl items-center h-screen font-bold text-black ">
          Dashboard
        </p>
        <div class="bg-blue-700 rounded-lg shadow-md">
          <div className="mx-auto my-4 w-[4rem] h-[4rem] text-white">
            <CircularProgressbar
              value={value}
              text={`${value}`}
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${value})`,
                textColor: "white",
                trailColor: "white",
                backgroundColor: "white",
                textSize: '24px',
              })}
            />
          </div>
          <h1 class="text-center text-white text-xl font-bold">Applications</h1>
          <div className="mr-16 p-10 text-white" >
            <h3 class="text-xs font-semibold flex">Teaching Applicants
            <p className=''></p></h3>
            <h3 class="text-xs font-semibold">Non-Teaching Applicants</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
