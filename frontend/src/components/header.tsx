import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import img from "../assets/krease.jpg";

const user = { _id: "asdjfkla", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const logoutHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" max-w-[95%] mx-auto flex justify-end  flex-row gap-4 items-center select-none">
      <img
        src={img}
        className="h-10 mr-auto outline-none w-28 border-hidden "
        alt=""
      />
      <Link
        className="flex hover:text-cyan-500 "
        onClick={() => setIsOpen(false)}
        to={"/"}
      >
        Home{" "}
      </Link>
      <Link
        className="hover:text-cyan-500"
        onClick={() => setIsOpen(false)}
        to={"/search"}
      >
        <FaSearch />
      </Link>
      <Link
        className="hover:text-cyan-500"
        onClick={() => setIsOpen(false)}
        to={"/cart"}
      >
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <div className="relative flex items-center justify-end">
          <button
            className="bg-transparent cursor-pointer broder-none text-l hover:[color:rgb(0,104,136)]:"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaUser />
          </button>
          <dialog
            className={`${
              isOpen ? "flex" : "hidden"
            } items-center  border-solid border-[color:#ccc] rounded-md border p-3 border-[width:100px] absolute -left-24 top-[130%]`}
          >
            <div className="flex flex-col items-center justify-center gap-1 p-3 divide-y-2">
              {user.role === "admin" && (
                <Link className="hover:text-cyan-500" to="/admin/dashboard">
                  Admin
                </Link>
              )}
              <Link
                className="hover:text-cyan-500"
                onClick={() => setIsOpen(false)}
                to="/orders"
              >
                Orders
              </Link>
              <button
                onClick={logoutHandler}
                className="bg-transparent cursor-pointer broder-none text-l hover:[color:rgb(0,104,136)]"
              >
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </div>
      ) : (
        <Link className="hover:text-cyan-500" to="/login">
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
