import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <button
        className="h-10 w-10  bg-[rgb(46,46,46)] text-white flex items-center justify-center flex-row  fixed top-8 left-8 border rounded-[100%] border-none outline-none cursor-pointer  shadow-[0_0_10px_rgba(0,0,0,0.384)] "
        onClick={() => navigate("/cart")}
      >
        <BiArrowBack className="hover:-translate-x-1 transition-all duration-[0.3s]" />
      </button>

      <form
        action=""
        className="max-w-[450px] w-full flex flex-col justify-center items-stretch gap-8 p-8 "
      >
        <h1 className="tracking-[2px] uppercase font-light m-8 text-3xl text-justify ">
          Shipping Info
        </h1>
        <input
          className="w-full p-4 border border-solid border-[rgba(31,31,31,0.351)] text-[1.05rem] rounded-md outline-none bg-inherit"
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          className="w-full p-4 border border-solid border-[rgba(31,31,31,0.351)] text-[1.05rem] rounded-md outline-none bg-inherit"
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          className="w-full p-4 border border-solid border-[rgba(31,31,31,0.351)] text-[1.05rem] rounded-md outline-none bg-inherit"
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />
        <select
          className="w-full p-4 border border-solid border-[rgba(31,31,31,0.351)] text-[1.05rem] rounded-md outline-none bg-inherit"
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Choose Country</option>
          <option value="India">India</option>
        </select>
        <input
          className="w-full p-4 border border-solid border-[rgba(31,31,31,0.351)] text-[1.05rem] rounded-md outline-none bg-inherit"
          required
          type="number"
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />
        <button
          className="py-4 px-2 bg-[rgb(0,104,136)] text-white rounded-md text-[1.05rem] uppercase tracking-[2px] hover:opacity-[0.8] border-none outline-none cursor-pointer"
          type="submit"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Shipping;
