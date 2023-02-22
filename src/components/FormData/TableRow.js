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
      <td className="whitespace-nowrap px-4 py-5 flex gap-2 items-center justify-start">
        <img
          src={item.personal_details.image}
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        {`${item.personal_details.first_name} ${item.personal_details.middle_name} ${item.personal_details.last_name}`}
      </td>
      <td className="whitespace-nowrap px-4 py-3 ">{item?.registrationNum}</td>
      <td className="whitespace-nowrap px-4 py-3 ">
        {new Date(item.updatedAt).toISOString().slice(0, 10)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 ">
        {item.personal_details.mobile}
      </td>
      <td className="whitespace-nowrap px-4 py-3 capitalize">
        {item.category}
      </td>
      <td className="whitespace-nowrap px-4 py-3 ">
        {item.designation || "Teacher"}
      </td>
      <td className="whitespace-nowrap px-4 py-3 ">{item.total_experience}</td>
      <td className="whitespace-nowrap px-4 py-3 ">
        <div>
          {!item.isShortlisted ? (
            <button onClick={() => handleShortlist(item._id)} className="">
              <AiOutlineCheck className="h-5 w-5" />
            </button>
          ) : (
            <></>
          )}
          <Link onClick={() => handleApplication(item)} to="/previewForm">
            <AiOutlineDownload className="h-5 w-5" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
