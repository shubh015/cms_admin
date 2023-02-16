import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getApplications } from "../../api/FormData";
import TableRow from "./TableRow";
const ordersTableData = {
  header: [
    { id: 1, title: "Name" },
    { id: 2, title: "Id" },
    { id: 3, title: "Date" },
    { id: 4, title: "Contact" },
    { id: 5, title: "Applied For" },
    { id: 6, title: "Designation" },
    { id: 7, title: "Experience" },
    { id: 8, title: "Action" },
  ],
  // row: [
  //   {
  //     id: "ONL/MAR23/89383",
  //     name: "Deepak",
  //     date: "13-MAR-2022",
  //     contact: "9696076398",
  //     category: "Non-Teaching",
  //     designation: "IT",
  //     experience: "45month",
  //   },
  //   {
  //     id: "ONL/MAR23/89383",
  //     name: "Aman",
  //     date: "13-MAR-2022",
  //     contact: "9696076398",
  //     category: "Non-Teaching",
  //     designation: "IT",
  //     experience: "45month",
  //   },
  //   {
  //     id: "ONL/MAR23/89383",
  //     name: "Ayush",
  //     date: "13-MAR-2022",
  //     contact: "9696076398",
  //     category: "Non-Teaching",
  //     designation: "IT",
  //     experience: "45month",
  //   },
  // ],
};

const FormData = ({ type }) => {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    (async () => {
      const res = await getApplications(token, type);
      console.log(res);
      setData(res.data.data);
    })();
  }, []);

  return (
    <div className="overflow-hidden w-[90%] bg-white mt-10 mx-auto overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-100 text-sm">
        <thead className="bg-gray-100">
          <tr className="font-medium text-left text-darken">
            <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-3 text-left">
              <input
                className="h-4 cursor-pointer w-4 rounded border-gray-200 text-primary focus:ring-primary"
                type="checkbox"
                id="SelectAll"
              />
            </th>
            {ordersTableData.header.map((each) => (
              <th
                key={each.id}
                className="whitespace-nowrap text-center px-4 text-blue-500 text-base py-3"
              >
                {each.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-muted">
          {data.map((item, ind) => {
            if (item.paymentConfirmation) {
              return <TableRow item={item} key={new Date().getTime() + ind} />;
            }

            return <></>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormData;
