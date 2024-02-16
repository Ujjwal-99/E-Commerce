import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  { Header: "ID", accessor: "_id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "rygdhkkkhff",
      amount: 457398,
      quantity: 23,
      discount: 5666,
      status: <span className="text-red-600">Processing</span>,
      action: <Link to={`/order/rygdhkkkhff`}>View</Link>,
    },
  ]);

  const Table = TableHOC<DataType>(column, rows, true)();
  return (
    <div className="max-w-[1367px] w-full m-auto overflow-auto">
      <h1 className="tracking-[3px] font-light uppercase mx-0 my-4 text-left text-3xl">
        My Orders
      </h1>
      <div className="shadow-2xl">
        <h2 className="gap-4 text-xl font-medium text-center uppercase ">
          Orders
        </h2>
        {Table}
      </div>
    </div>
  );
};

export default Orders;
