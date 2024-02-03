import { Link, Location, useLocation } from "react-router-dom";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-[25%] bg-white p-4 z-10 overflow-y-auto shadow-xl">
      <h2 className="font-sans text-xl font-bold ">Logo.</h2>
      <DivOne location={location} />
      <DivTwo location={location} />
      <DivThree location={location} />
    </aside>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div className="mx-8 my-4 ">
    <h5 className="tracking-[2px] font-light text-base uppercase opacity-80 mx-2 my-0 ">
      {" "}
      Dashboard
    </h5>
    <ul className="flex flex-col gap-2 list-none ">
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/products"
        text="Product"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/customers"
        text="Customer"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/transactions"
        text="Transaction"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);

const DivThree = ({ location }: { location: Location }) => (
  <div className="mx-8 my-4 ">
    <h5 className="tracking-[2px] font-light text-base uppercase opacity-80 mx-2 my-0 ">
      {" "}
      Apps
    </h5>
    <ul className="flex flex-col gap-2 list-none ">
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        Icon={RiCoupon3Fill}
        location={location}
      />
      <Li
        url="/admin/app/toss"
        text="Toss"
        Icon={FaGamepad}
        location={location}
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div className="mx-8 my-4 ">
    <h5 className="tracking-[2px] font-light text-base uppercase opacity-80 mx-2 my-0 ">
      Charts
    </h5>
    <ul className="flex flex-col gap-2 list-none ">
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={FaChartBar}
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={FaChartPie}
        location={location}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={FaChartLine}
        location={location}
      />
    </ul>
  </div>
);
interface LiProps {
  url: string;
  text: string;
  Icon: IconType;
  location: Location;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
    className="px-2 py-4 rounded-xl"
  >
    <Link
      className="flex flex-row text-[rgba(0,0,0,0.825)] items-center  gap-4"
      style={{
        color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
      }}
      to={url}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
