import { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { OrderItemType, OrderType } from "../../../types";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/product-card";

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
  const { order, setOrder } = useState<OrderType>({
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

  return (
    <div>
      (
      <div className="">
        <AdminSidebar />
        <main className="">
          <section>
            <h2>Order Items</h2>
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
        </main>
      </div>
      );
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemsType) => (
  <div className="flex flex-row items-center gap-4">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity}={quantity * price}
    </span>
  </div>
);

export default TransactionManagement;
