import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "sdhfdshfjhf";

const ProductCard = ({
  handler,
  price,
  photo,
  productId,
  name,
  stock,
}: ProductProps) => {
  return (
    <div className="w-fit relative p-6 rounded-lg shadow-md group border-[1px]">
      <img src={photo} className="" alt={name} />
      <p className="mt-4 ">{name}</p>
      <span className="font-semibold ">₹{price}</span>
      <div className="absolute rounded-lg top-0 left-0 group-hover:flex hidden flex-row items-center justify-center bg-[color:#0000006b] right-0 bottom-0 ">
        <button
          className="flex flex-row items-center justify-center aspect-square   border rounded-full cursor-pointer text-l text-white bg-[color:rgb(0,104,136)] hover:[rotate:90deg] transition-all p-2"
          onClick={() => handler()}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
