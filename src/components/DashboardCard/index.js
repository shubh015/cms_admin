import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardCard = ({ value, title }) => {
  return (
    <div class="card rounded-lg flex flex-col items-center justify-between hover:bg-blue-500 hover:text-white shadow-md bg-white w-64 h-[60%]">
      <div className="mx-auto flex-1 flex items-center flex-col justify-center gap-3">
        <CircularProgressbar
          value={value}
          className="w-[6rem] h-[6rem]"
          text={`${value}`}
          styles={buildStyles({
            pathColor: ``,
            textColor: "black",
            trailColor: "white",
            backgroundColor: "white",
            textSize: "24px",
          })}
          strokeWidth={10}
        />
        <h1 class="text-center text-xl font-bold">{title}</h1>
      </div>
      <div className="bg-gray-200 w-full py-6 px-4">
        <div class="text-xs font-semibold flex justify-between">
          <p>Teaching Applicants</p>
          <p>50</p>
        </div>
        <div class="text-xs font-semibold flex justify-between">
          <p>Non-Teaching Applicants</p>
          <p>50</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
