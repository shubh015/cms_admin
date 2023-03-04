import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { candidateShortlist } from "../../api/Dashboard";
import { setForm } from "../../redux/features/ApplicationFormSlice";
import PreviewForm from "../PreviewForm";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";

const TableRow = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const handleApplication = (item) => {
    dispatch(setForm(item));
  };

  const handleShortlist = async (id) => {
    const res = await candidateShortlist(id, token);
    console.log(res);
    if (res?.status === 200) {
      toast.success(res.data.msg);
    }
  };

  return (
    <tr
      className={`table-fixed ${
        isSelected ? "border-l-2 border-blue-600 z-20" : ""
      }`}
    >
      <td className="sticky inset-y-0 left-0 bg-white px-4 py-3">
        <input
          className="h-4 w-4 cursor-pointer rounded border-gray-200 text-primary focus:ring-primary"
          type="checkbox"
          value={item.id}
          onClick={() => setIsSelected(!isSelected)}
        />
      </td>
      <td className="text-center py-5 flex gap-2 items-center justify-start">
        <img
          src={item.personal_details.image}
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        {`${item.personal_details.first_name} ${item.personal_details.middle_name} ${item.personal_details.last_name}`}
      </td>
      <td className="text-center py-3 text-violet-500 font-medium">
        {item?.registrationNum}
      </td>
      <td className="text-center py-3 text-gray-400">
        {new Date(item.updatedAt).toISOString().slice(0, 10)}
      </td>
      {/* {item.personal_details.mobile} */}
      <td className="text-center py-3 ">
        <div className="flex w-full items-center justify-center gap-2">
          <a
            className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-200"
            href={`tel:${item.personal_details.mobile}`}
          >
            <IoCallOutline className="text-violet-700 text-lg" />
          </a>
          <a
            className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-200"
            href={`mailto:${item.personal_details.email}`}
          >
            <GoMail className="text-violet-700 text-lg" />
          </a>
        </div>
      </td>
      <td className="text-center py-3 capitalize">{item.category}</td>
      <td className="text-center py-3 ">{item.designation || "Teacher"}</td>
      <td className="text-center py-3 ">{item.total_experience} month</td>
      <td className="text-center py-3 ">
        <div className="flex gap-2">
          <button className="">
            <AiOutlineCheck className="h-5 w-5" />
          </button>
          <Link onClick={() => handleApplication(item)} to="/previewForm">
            <AiOutlineDownload className="h-5 w-5" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
