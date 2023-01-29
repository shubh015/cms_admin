import {
  faBars,
  faBell,
  faPrint,
  faSearch,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import indiaFlag from "../../asset/images/icons/india-flag.png";
// import { menDummyImg } from "../ECommercePageComponents";
import { removeToken } from "../../redux/features/authSlice";

const TopBar = ({ hideSideBar, setHideSideBar }) => {
  const [showProfile, setShowProfile] = useState(false);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <div
      className={` ${
        hideSideBar ? "pl-6" : "pl-[264px]"
      } duration-500 flex fixed  z-10 w-full pr-6 h-[50px] bg-gray-100 border-b items-center justify-between`}
    >
      <div>
        <FontAwesomeIcon
          onClick={() => setHideSideBar(!hideSideBar)}
          className="cursor-pointer"
          icon={faBars}
        />
      </div>
      <div className="flex items-center gap-10 text-gray-500">
        <div className="flex items-center gap-4 text-xl">
          {/* <img
            src={indiaFlag}
            className="cursor-pointer hover:text-darken duration-300 h-9 "
            alt=""
          /> */}
          <FontAwesomeIcon
            className="cursor-pointer hover:text-darken duration-300"
            icon={faSearch}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-darken duration-300"
            icon={faPrint}
          />
          <div className="relative cursor-pointer">
            <FontAwesomeIcon className=" mr-2" icon={faBell} />
            <span className="w-[15px] h-[15px] inline-flex  items-center justify-center absolute  -top-1.5 -right-1 text-[10px] font-medium  rounded-full text-light bg-indigo-600 pt-[1px]">
              4
            </span>
          </div>
        </div>
        <div
          onClick={() => setShowProfile(!showProfile)}
          className="flex items-center gap-3 relative cursor-pointer"
        >
          <div className="text-right">
            <h5 className="text-darken font-semibold font-sans-pro">
              Brian Hughes
            </h5>
            <p className="text-sm -mt-1 text-gray-600">Admin</p>
          </div>
          {/* <img
            src={menDummyImg}
            className="h-7 object-cover  w-7 ring-2 ring-offset-1 ring-primary rounded-full"
            alt=""
          /> */}
          <div
            className={`${
              showProfile ? "h-[75px]   opacity-100" : "h-0 opacity-0 "
            } duration-300 w-44 top-12 bg-white  text-sm border absolute p-[2px] rounded-lg shadow-lg right-0 overflow-hidden`}
          >
            {/* <Link className="px-2 py-1.5 hover:bg-gray-200 duration-300 rounded-md  flex items-center gap-3">
              <FontAwesomeIcon className="w-4" icon={faUser} /> Profile
            </Link> */}
            <hr className="my-[2px]" />
            {/* <button
              onClick={() => {
                dispatch(removeToken());
                navigate("/login");
              }}
              className="px-2 py-1.5 hover:bg-gray-200 duration-300 rounded-md  flex items-center gap-3"
            >
              <FontAwesomeIcon className="w-4" icon={faSignOut} /> Sign Out
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
