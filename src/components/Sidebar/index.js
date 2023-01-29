import React from "react";
import { Link } from "react-router-dom";
import { RiDashboardFill, RiAdminFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="flex">
      <div
        className={` w-60 flex flex-col h-screen p-3 bg-[#4241ff] shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Logo</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 text-white space-x-3 rounded-md"
                >
                  <RiDashboardFill className="text-2xl text-white" />
                  <span className="text-white text-lg">Dashboard</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/admin"
                  className="flex items-center p-2 text-white space-x-3 rounded-md"
                >
                  <RiAdminFill className="text-2xl text-white" />
                  <span className="text-white text-lg">Admin</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
