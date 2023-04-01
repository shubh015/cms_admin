import React, { useState } from "react";
import { GoPlusSmall } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getSearchResults } from "../../api/Search";
import { setSearch } from "../../redux/features/SearchSlice";
import { FcInfo } from "react-icons/fc";
import toast from "react-hot-toast";
import { RiArrowDropDownLine } from "react-icons/ri";

const LowerHeader = ({ heading }) => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("name");
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await getSearchResults(token, query, type);

    if (res?.status === 200) {
      navigate("/search");
      dispatch(setSearch(res.data.result));
    }
    if (res?.response.status === 404) {
      toast("No Results Found!", {
        icon: <FcInfo />,
      });
    }
  };

  return (
    <div className="header flex justify-between items-center mt-6 px-2">
      <h1 className="text-3xl font-bold">{heading}</h1>
      <div className="flex gap-4">
        <form onSubmit={handleSearch}>
          <div>
            <input
              className="outline-0 p-2 rounded-full"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* <button
              type="button"
              id="dropdownMenuButton3"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <RiArrowDropDownLine />
            </button> */}

            {/* <ul
              className="absolute z-[1000] ml-[-43px] mt-1 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton3"
              data-te-dropdown-menu-ref
            >
              <li>By Name</li>
              <li>By Id</li>
            </ul> */}
          </div>
        </form>
        {user?.role === "admin" && (
          <button className="bg-blue-600 px-1 flex gap-1 items-center text-sm rounded-md text-white">
            <GoPlusSmall />
            Add New Applicant
          </button>
        )}
      </div>
    </div>
  );
};

export default LowerHeader;
