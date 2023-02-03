import React from "react";
import { useState } from "react";

const TableRow = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);

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
      <td className="whitespace-nowrap px-4 py-3 ">Delete</td>
    </tr>
  );
};

export default TableRow;
