import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getApplications } from "../../api/FormData";
import TableRow from "./TableRow";
import { BiPlay } from "react-icons/bi";
import Pagination from "react-js-pagination";
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
};

const FormData = ({ type }) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await getApplications(token, type, pageNumber, pageSize);
      setIsLoading(false);

      if (res?.status === 200) {
        setData(res.data.data);
        setCount(res.data.total_count);
      }
    })();
  }, [pageNumber, pageSize, token, type]);

  return (
    <div className="overflow-hidden w-[90%] bg-white mt-10 mx-auto overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-100 text-sm">
        <thead>
          <tr className="text-left text-darken">
            <th className="sticky inset-y-0 left-0 px-4 py-3 text-left">
              <input
                className="h-4 cursor-pointer w-4 rounded border-gray-200 text-primary focus:ring-primary"
                type="checkbox"
                id="SelectAll"
              />
            </th>
            {ordersTableData.header.map((each) => (
              <th
                key={each.id}
                className="whitespace-nowrap text-center text-blue-500 py-3"
              >
                {each.title}
              </th>
            ))}
          </tr>
        </thead>
        {!isLoading ? (
          <tbody className="divide-y divide-gray-200 text-muted">
            {data.map((item) => {
              return <TableRow item={item} key={item._id} />;
            })}
          </tbody>
        ) : (
          <tbody className="my-3 ml-1 text-md text-center w-full">
            Loading...
          </tbody>
        )}
      </table>
      <div className="flex justify-between item p-2 w-full">
        <p className="text-sm text-gray-400">
          Showing {pageNumber * pageSize - (pageSize - data.length)} out of
          &nbsp;
          {count}
        </p>
        <Pagination
          activePage={pageNumber}
          itemsCountPerPage={pageSize}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          prevPageText={<BiPlay />}
          nextPageText={<BiPlay />}
          innerClass="flex gap-2"
          itemClass="border border-slate-300 flex items-center justify-center h-8 w-8 rounded-full"
          itemClassNext="bg-transparent text-gray-600 border-0 fill-slate-300"
          itemClassPrev="bg-transparent text-gray-600 border-0 rotate-180"
          activeClass="bg-violet-500 text-white border-0 shadow-md"
          hideFirstLastPages
          onChange={(page) => handlePageChange(page)}
        />
      </div>
    </div>
  );
};

export default FormData;
