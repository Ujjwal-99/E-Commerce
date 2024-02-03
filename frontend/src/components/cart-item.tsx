import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { photo, productId, name, price, quantity, stock } = cartItem;
  return (
    <div className="flex flex-row items-center justify-start gap-12 p-8 ">
      <div className="flex">
        <img src={photo} className="aspect-square(10rem)" alt="" />
        <article className="flex flex-col items-start justify-center gap-1 ">
          <Link
            to={`/product/${productId}`}
            className="text-xl text-[rgb(46,46,46)] hover:[color:rgb(0,104,136)]"
          >
            {name}
          </Link>
          <span className="font-bold">{price}</span>
        </article>
      </div>

      <div className="flex flex-row items-center justify-around ml-auto ">
        <button className=" px-[14px] py-2 text-xl rounded-md hover:bg-[rgb(46,46,46)] hover:[color:white] shadow-[0_0_10px_rgba(0,0,0,0.384)] cursor-pointer  border-[1px]">
          -
        </button>
        <p className="p-2">{quantity}</p>
        <button className=" py-2 text-xl rounded-md px-3 shadow-[0_0_10px_rgba(0,0,0,0.384)] hover:bg-[rgb(46,46,46)] hover:[color:white]  cursor-pointer border-[1px]  ">
          +
        </button>

        <button className="ps-6 border-none bg-transparent cursor-pointer text-xl hover:[color:red]">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
