import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cardItems = [
  {
    productId: "asdfsf",
    photo:
      "https://rukminim2.flixcart.com/image/128/128/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=70&crop=false",
    name: "Mackbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="px-8 py-16 flex-row flex justify-between items-stretch gap-16 h-[calc(100vh-4rem)] ">
      <main className="w-[70%] overflow-y-auto ">
        {cardItems.length > 0 ? (
          cardItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1 className="">No Items Added</h1>
        )}
      </main>
      <aside className="flex flex-col items-stretch justify-center w-[30%] gap-6 p-16">
        <p className="text-[1.1rem] ">Subtotal:₹{subtotal}</p>
        <p className="text-[1.1rem] ">Shipping Charges:₹{shippingCharges}</p>
        <p className="text-[1.1rem] ">Tax:₹{tax}</p>
        <p className="text-[1.1rem] ">
          Discount: <em className="text-red-600">- ₹{discount}</em>
        </p>
        <p className="text-[1.1rem] ">
          <b>Total:₹{total}</b>
        </p>
        <input
          className="p-4 border border-[rgba(0,0,0,0.28)] rounded-md outline-none  mt-8 border-solid"
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="flex flex-row items-center justify-center gap-1 -mt-4 text-green-500">
              ₹{discount} off using the{" "}
              <code className="self-end font-black">{couponCode}</code>
            </span>
          ) : (
            <span className="flex flex-row items-center justify-center gap-1 -mt-4 text-red-600">
              Invalid Coupon
              <VscError />
            </span>
          ))}
        {cardItems.length > 0 && (
          <Link
            className="bg-[rgb(0,104,136)] p-4 text-white flex flex-row justify-center items-center uppercase tracking-[2px] rounded-md hover:[opacity:0.8]"
            to="/shipping"
          >
            Checkout
          </Link>
        )}
      </aside>
    </div>
  );
};

export default Cart;
