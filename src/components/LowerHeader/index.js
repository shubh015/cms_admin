import React, { useState } from "react";
import { GoPlusSmall } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getSearchResults } from "../../api/Search";
import { setSearch } from "../../redux/features/SearchSlice";
import { FcInfo } from "react-icons/fc";
import toast from "react-hot-toast";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { Select, Option } from "@material-tailwind/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const LowerHeader = ({ heading }) => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const setDateRange = (date) => {
    setStartDate(date[0]);
    setEndDate(date[1]);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(type, query);
    if (!type || !query)
      return toast("Please fill all the fields!", { icon: <FcInfo /> });

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

  const handleSearchByDateRange = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate)
      return toast("Please fill all the fields!", { icon: <FcInfo /> });

    const res = await getSearchResults(token, { startDate, endDate }, "date");
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
      <h1 className="text-3xl font-bold capitalize">{heading}</h1>
      <div className="flex gap-4">
        <form onSubmit={handleSearch}>
          <div className="flex justify-center items-center gap-5">
            <div className="flex-0">
              <Select
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                value={type}
                label="Search By"
                onChange={(val) => setType(val)}
              >
                <Option value="name">Name</Option>
                <Option value="id">Id</Option>
                <Option value="mobile">Mobile</Option>
                <Option value="date">Date</Option>
              </Select>
            </div>
            {type !== "date" ? (
              <div className="rounded-full flex flex-1 justify-center items-center overflow-hidden">
                <input
                  className="h-full outline-0 p-2"
                  type="text"
                  placeholder={`Enter ${type.toLocaleUpperCase()}`}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-600 h-full p-2 text-white hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center rounded-full overflow-hidden">
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  className="p-2 outline-none"
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select Date Range"
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                />
                <button
                  onClick={handleSearchByDateRange}
                  className="bg-blue-600 h-full p-2 text-white hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            )}
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
