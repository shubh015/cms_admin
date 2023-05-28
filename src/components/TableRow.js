import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { candidateShortlist } from "../api/Dashboard";
import { setForm } from "../redux/features/ApplicationFormSlice";
// import PreviewForm from "../PreviewForm";
import { IoCallOutline } from "react-icons/io5";
import { GoMail, GoKebabHorizontal } from "react-icons/go";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
} from "@material-tailwind/react";

const TableRow = ({ item, id, handleOpen }) => {
  const [isSelected, setIsSelected] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleApplication = (item) => {
    dispatch(setForm(item));
  };

  const handleShortlist = async (id) => {
    const res = await candidateShortlist(id, token);
    console.log(res);
    if (res?.status === 200) {
      toast.success(res.data.msg);
      navigate("/shortlisted");
    }
  };

  return (
    <tr
      className={`table-fixed ${
        isSelected ? "border-l-2 !border-l-blue-600" : ""
      }`}
    >
      <td className="left-0 bg-white px-4 py-3">
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
      <td className="text-center py-3 text-deep-purple-500 font-medium">
        {item?.registrationNum}
      </td>
      <td className="text-center py-3 text-gray-400">
        {new Date(item.createdAt).toISOString().slice(0, 10)}
      </td>
      {/* {item.personal_details.mobile} */}
      <td className="text-center py-3 ">
        <div className="flex w-full items-center justify-center gap-2">
          <a
            className="w-8 h-8 flex items-center justify-center rounded-full bg-deep-purple-100"
            href={`tel:${item.personal_details.mobile}`}
          >
            <IoCallOutline className="text-deep-purple-700 text-lg" />
          </a>
          <a
            className="w-8 h-8 flex items-center justify-center rounded-full bg-deep-purple-100"
            href={`mailto:${item.personal_details.email}`}
          >
            <GoMail className="text-deep-purple-700 text-lg" />
          </a>
        </div>
      </td>
      <td className="text-center py-3 capitalize">{item.category}</td>
      <td className="text-center py-3 ">{item.designation || "Teacher"}</td>
      <td className="text-center py-3 ">{item.total_experience} Months</td>
      {user.role !== "admin" && (
        <td className="text-center py-3 ">
          {item.paymentConfirmation ? (
            <Tooltip
              content="Click to show"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <button onClick={() => handleOpen(item.paymentData)}>
                Confirmed
              </button>
            </Tooltip>
          ) : (
            "Pending"
          )}
        </td>
      )}

      {user.role === "helpdesk" && (
        <td className="text-center py-3 ">{`${item.address.current.city} ${item.address.current.pincode}`}</td>
      )}
      <td className="text-center py-3">
        <Menu placement="left">
          <MenuHandler>
            <button className="w-full h-full">
              <GoKebabHorizontal className="inline text-gray-500" />
            </button>
          </MenuHandler>
          <MenuList>
            {!item.isShortlisted && user.role === "admin" ? (
              <MenuItem
                disabled={!item.paymentConfirmation}
                onClick={() => handleShortlist(item._id)}
              >
                Shortlist
              </MenuItem>
            ) : (
              <></>
            )}
            <MenuItem>
              <Link
                className="w-full h-full block"
                onClick={() => handleApplication(item)}
                to="/previewForm"
              >
                Preview
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </td>
    </tr>
  );
};

export default TableRow;
