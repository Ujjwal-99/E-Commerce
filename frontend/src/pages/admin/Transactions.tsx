import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="text-red-600">Processing</span>,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/>admin/transaction/sajknaskd"
      >
        Manage
      </Link>
    ),
  },
  {
    user: "Xavirors",
    amount: 6900,
    discount: 400,
    quantity: 6,
    status: <span className="text-green-600">shipped</span>,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/>admin/transaction/sajknaskd"
      >
        Manage
      </Link>
    ),
  },
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="text-purple-700-600">Processing</span>,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/>admin/transaction/sajknaskd"
      >
        Manage
      </Link>
    ),
  },
];

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,

      true
    ),
    []
  );

  return (
    <div className="flex flex-row w-full gap-8 h-screen bg-[rgb(247,247,247)]">
      {/*sidebar*/}
      <AdminSidebar />
      {/*main*/}
      <main className="w-full h-full overflow-auto bg-white rounded-xl">
        <h2 className="mt-6 mr-0 mb-0 ml-0 p-4 tracking-[3px] font-light:font-bold uppercase">
          Product
        </h2>
        {Table()}
      </main>
    </div>
  );
};

export default Transactions;
