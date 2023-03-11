import React from "react";
import { Link } from "react-router-dom";
import { RiDashboardFill, RiAdminFill, RiLogoutBoxLine } from "react-icons/ri";
import logo from "../../assets/image/logo.png";
import { useDispatch } from "react-redux";
import { removeToken } from "../../redux/features/AuthSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeToken());
  };

  return (
    <div className="flex fixed top-0 left-0 z-10 h-full">
      <div
        className={` w-60 flex flex-col p-3 bg-[#4241ff] shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <img
              className="w-100"
              style={{ height: "2.5rem" }}
              src={logo}
              alt="cms"
            />
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
              <li className="rounded-sm">
                <span
                  onClick={handleLogout}
                  className="flex items-center p-2 cursor-pointer text-white space-x-3 rounded-md"
                >
                  <RiLogoutBoxLine className="text-2xl text-white" />
                  <span className="text-white text-lg">Logout</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
