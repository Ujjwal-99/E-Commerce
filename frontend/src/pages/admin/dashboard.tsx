import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../../assets/admin/data.json";
import { BarChart, DoughnutChart } from "../../components/admin/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../../components/admin/DashboardTable";

const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full gap-8 h-screen bg-[rgb(247,247,247)]">
      {/*sidebar*/}
      <AdminSidebar />
      {/*main*/}
      <main className="w-full overflow-y-auto ">
        <div className="flex flex-row justify-between items-center h-16 gap-4 px-0 py-4 border-b-[1px] border-solid border-[rgba(0,0,0,0.37)]  w-full bg-inherit outline-none">
          <div className="flex flex-row items-center gap-4">
            <BsSearch className="text-xl opacity-70 " />
            <input type="text" placeholder="Search for data, users, docs" />
          </div>
          <div className="flex flex-row items-center gap-4 pe-6 rounded-[100%]">
            <FaRegBell className="" />
            <img src={userImg} className="w-8 h-8 " alt="" />
          </div>
        </div>
        <section className="flex flex-row flex-wrap items-stretch justify-between gap-8 py-8 ps-8 pe-8 ">
          <WidgetItem
            percent={40}
            amount={true}
            value={3400000}
            heading="Revenue"
            color="rgba(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            amount={false}
            value={400}
            heading="User"
            color="rgba(0,198,202)"
          />
          <WidgetItem
            percent={80}
            amount={false}
            value={23000}
            heading="Transactions"
            color="rgba(255,196,0)"
          />
          <WidgetItem
            percent={30}
            amount={false}
            value={1000}
            heading="Products"
            color="rgba(76,0,255)"
          />
        </section>
        <section className="flex flex-row gap-8 pt-8 pb-0 ps-0 pe-8 ">
          <div className="w-full px-4 py-12 bg-white shadow-xl rounded-xl">
            <h2 className="text-lg tracking-[3px] uppercase font-light text-center ms-4 me-0 mt-8 mb-1">
              Revenue & Transaction
            </h2>
            <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 900]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgb(53,162,235,0.8)"
              horizontal={false}
            />
          </div>
          <div className="flex flex-col justify-center w-full gap-0 pb-8 bg-white shadow-lg rounded-xl max-w-64">
            <h2 className="text-lg tracking-[3px] uppercase font-light text-center ms-6 me-0 mt-8 mb-0">
              Inventory
            </h2>
            <div className="pl-2 overflow-y-auto">
              {/* <CategoryItem
                heading="Laptops"
                value={70}
                color="hsl(69,100%,50%)"
              /> */}
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value},100%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="flex gap-8 pt-4 pr-8 pb-8 pl-0 h-[30rem] w-full overflow-x-auto ">
          <div className="bg-white mb-8 shadow-[0_12px_10px_rgba(0,0,0,0.218)] rounded-[10px] w-full max-w-80 p-4 relative  ">
            <h2 className="text-center mt-6 mr-0 mb-8 ml-0 tracking-[3px] uppercase font-light   ">
              Gender Ratio
            </h2>

            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />

            <p className="absolute top-[50%]  left-[45%]  bottom-[50%] text-[2rem] text-[rgba(0,0,0,0.634)] text-center translate-[(-50%,-50%)] ">
              <BiMaleFemale className="" />
            </p>
          </div>

          {/* Table */}
          <div className="shadow-[0px_10px_10px_rgba(0,0,0,0.093)] bg-white rounded-lg  w-full border-collapse mb-8">
            <Table data={data.transaction} />
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  amount?: boolean;
  color: string;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  amount,
  color,
}: WidgetItemProps) => (
  <article className="min-w-64 bg-white shadow-[0_0_10px_rgba(0,0,0,0.132)] p-8 flex flex-row justify-between items-stretch gap-0 rounded-xl">
    <div>
      <p className="text-sm opacity-70 ">{heading}</p>
      <h4 className="text-2xl font-semibold">{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="flex flex-row items-center gap-1 text-green-600">
          <HiTrendingUp />+ {percent}%
        </span>
      ) : (
        <span className="text-red-600">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>
    <div
      className="relative flex-none w-20 h-20 rounded-[50%]  bg-[aquamarine] grid place-items-center"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255) 0
      )`,
      }}
    >
      <span
        className="absolute w-16 flex justify-center items-center h-16 bg-white rounded-[100%]"
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ heading, value, color }: CategoryItemProps) => (
  <div className="flex flex-row items-center justify-between w-full gap-4 p-4">
    <h5 className="tracking-[1px] font-light ">{heading}</h5>
    <div className="ml-auto w-24 bg-[rgb(217,217,217)] rounded-[20px] h-2 flex-none">
      <div
        className="h-full rounded-[20px]"
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span className="text-sm font-bold">{value}%</span>
  </div>
);

export default Dashboard;
