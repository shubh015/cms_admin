import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableRow from "../TableRow";
import {
  Dialog,
  Button,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";

const header = {
  header: [
    { id: 1, title: "Name" },
    { id: 2, title: "Id" },
    { id: 3, title: "Date" },
    { id: 4, title: "Contact" },
    { id: 5, title: "Applied For" },
    { id: 6, title: "Designation" },
    { id: 7, title: "Experience" },
    { id: 8, title: "Payment" },
    { id: 9, title: "Action" },
  ],
};

const paymentHeader = {
  header: [
    { id: 1, title: "Sn." },
    { id: 2, title: "OrderId" },
    { id: 3, title: "Reference No" },
    { id: 4, title: "Status" },
    { id: 5, title: "Billing Name" },
    { id: 6, title: "Time" },
  ],
};

const SearchPage = () => {
  const data = useSelector((state) => state.search.search);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [paymentData, setPaymentData] = useState();

  const handleOpen = (paymentData) => {
    setOpen((prev) => !prev);
    setPaymentData(paymentData);
  };

  return (
    <>
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
              {header.header.map((each) => (
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
              {data.map((item, id) => {
                return (
                  <TableRow
                    item={item}
                    handleOpen={handleOpen}
                    id={id}
                    key={item._id}
                  />
                );
              })}
            </tbody>
          ) : (
            <tbody className="my-3 ml-1 text-md text-center w-full">
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
        </table>
        <Dialog
          size="xxl"
          className="!w-full !min-w-full !max-w-full"
          open={open}
          handler={handleOpen}
        >
          <DialogHeader>Payment Details</DialogHeader>
          <DialogBody divider className="overflow-x-hidden !p-0">
            <table className="min-w-full divide-y divide-gray-100 text-sm">
              <thead className="bg-gray-100 sticky top-0 left-0">
                <tr className="font-medium text-left text-darken">
                  {paymentHeader.header.map((each) => (
                    <th
                      key={each.id}
                      className="whitespace-nowrap text-center px-4 text-blue-500 text-base py-3"
                    >
                      {each.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(paymentData) &&
                  paymentData.map((item, index) => {
                    return (
                      <tr
                        key={item.Order_Status_Result.order_no}
                        className="table-fixed"
                      >
                        <td className="text-center py-3">{index + 1}</td>
                        <td className="text-center py-3">
                          {item.Order_Status_Result.order_no}
                        </td>
                        <td className="text-center py-3">
                          {item.Order_Status_Result.reference_no}
                        </td>
                        <td className="text-center py-3">
                          {item.Order_Status_Result.order_bank_response === "N"
                            ? "Cancle"
                            : "Successfull"}
                        </td>
                        <td className="text-center py-3">
                          {item.Order_Status_Result.order_bill_name}
                        </td>
                        <td className="text-center py-3">
                          {new Date(
                            item.Order_Status_Result.order_status_date_time
                          ).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="outlined"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
};

export default SearchPage;
