import { Column } from "react-table";
import TableHOC from "./TableHOC";

const columns: Column<Datatype>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

interface Datatype {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const DashboardTable = ({ data = [] }: { data: Datatype[] }) => {
  return TableHOC<Datatype>(
    columns,
    data,

    false
  )();
};

export default DashboardTable;
