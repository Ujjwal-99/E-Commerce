import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: DataType[] = [
  {
    avatar: (
      <img
        src={img}
        style={{
          borderRadius: "50%",
          width: "5rem",
          height: "5rem",
        }}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button className="text-2xl text-red-700">
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        src={img2}
        style={{
          borderRadius: "50%",
          width: "5rem",
          height: "5rem",
        }}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button className="text-2xl text-red-700">
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
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

export default Customers;
