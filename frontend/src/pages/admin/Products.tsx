import { Column } from "react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: DataType[] = [
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
  {
    photo: <img src={img} className="w-16 h-10" alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sajknaskd"
      >
        Manage
      </Link>
    ),
  },

  {
    photo: <img src={img2} className="w-16 h-10" alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: (
      <Link
        className="px-4 py-2 text-blue-700 bg-blue-300 rounded-full"
        to="/admin/product/sdaskdnkasjdn"
      >
        Manage
      </Link>
    ),
  },
];

const Products = () => {
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
    <div className="flex flex-row  overflow-auto  w-full gap-8 h-screen bg-[rgb(247,247,247)]">
      {/*sidebar*/}
      <AdminSidebar />
      {/*main*/}
      <main className="w-full h-full overflow-auto bg-white rounded-xl">
        <h2 className="mt-6 mr-0 mb-0 ml-0 p-4 tracking-[3px] font-light:font-bold uppercase">
          Product
        </h2>
        {Table()}
      </main>
      <Link
        to="/admin/product/new"
        className="fixed flex flex-row items-center justify-center w-10 h-10 right-8 top-8 mt-10 gap-0 rounded-[50%] text-white bg-[rgb(201,9,9)] hover:opacity-80"
      >
        <FaPlus className="tex" />
      </Link>
    </div>
  );
};

export default Products;
