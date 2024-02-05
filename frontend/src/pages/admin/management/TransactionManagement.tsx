import { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar.tsx";
import { OrderItemType, OrderType } from "../../../types.ts";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "hhhhhh",
    quantity: 4,
    price: 2000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Ujjwal",
    address: "d-8kkghh",
    city: "new delhi",
    country: "India",
    state: "delhi",
    pinCode: 11335,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "ddgrfhh",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
    _id,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Shipped" ? "Delivered" : "Shipped",
    }));
  };

  return (
    <div>
      <div className=" flex bg-[rgb(247,247,247)]">
        <AdminSidebar />
        <main className="flex flex-row items-center justify-center gap-8 p-8 m-auto ">
          <section className="overflow-y-auto w-full h-[85vh] max-w-[1200px] shadow-[0px_5px_5px_rgba(0,0,0,0.216)] bg-white p-8 relative flex flex-col gap-4 rounded-md">
            <h2 className="uppercase text-xl font-semibold tracking-[2px] text-center">
              Order Items
            </h2>

            {order.orderItems.map((i) => (
              <ProductCard
                name={i.name}
                photo={i.photo}
                _id={i._id}
                quantity={i.quantity}
                price={i.price}
              />
            ))}
          </section>
          <article className="h-[85vh] p-8 pl-4 w-full max-w-md bg-white rounded-md shadow-[5px_5px_10px_rgba(0,0,0,0.216)]">
            <h1 className="text-center uppercase text-2xl font-semibold tracking-[2px]">
              Order Info
            </h1>
            <h5 className="mt-8 mb-0 ml-2 mr-0 text-lg font-bold ">
              User Info
            </h5>
            <p className="m-2">Name: {name}</p>
            <p className="m-2">
              Address: {`${address}, ${city}, ${country}, ${pinCode}`}
            </p>
            <h5 className="mt-8 mb-0 ml-2 mr-0 text-lg font-bold ">
              Amount Info
            </h5>
            <p className="m-2">Subtotal: {subtotal}</p>
            <p className="m-2">Shipping Charges: {shippingCharges}</p>
            <p className="m-2">Tax: {tax}</p>
            <p className="m-2">Discount: {discount}</p>
            <p className="m-2">Total: {total}</p>
            <h5 className="mt-8 mb-0 ml-2 mr-0 text-lg font-bold ">
              Status Info
            </h5>
            <p className="m-2">
              Status:{" "}
              <span
                className={
                  status === "Delivered"
                    ? "text-purple-600 font-semibold"
                    : status === "Shipped"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {status}
              </span>
            </p>
            <button
              className="p-4 border-none bg-[rgb(5,107,224)] mt-8 hover:opacity-80 rounded-md text-white w-full text-lg cursor-pointer"
              onClick={updateHandler}
            >
              Process Status
            </button>
          </article>
        </main>
      </div>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="flex flex-row items-center w-full gap-4 ">
    <img
      className="object-cover w-16 h-16 rounded-md "
      src={photo}
      alt={name}
    />
    <Link className="" to={`/product/${_id}`}>
      {name}
    </Link>
    <span className="ml-auto ">
      ${price} X {quantity} = {quantity * price}
    </span>
  </div>
);

export default TransactionManagement;
