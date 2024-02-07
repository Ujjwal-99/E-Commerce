import AdminSidebar from "../../../components/admin/AdminSidebar";
import { BarChart } from "../../../components/admin/Charts";

const BarCharts = () => {
  return (
    <div className="flex flex-row w-full gap-8 h-screen bg-[rgb(247,247,247)]">
      {/*sidebar*/}
      <AdminSidebar />
      <main className="w-full p-16 overflow-y-auto bg-white">
        <h1 className="mt-0 mb-20 ml-8 mr-0 text-4xl font-bold">Bar Charts</h1>
        <section className="w-[80%] ">
          <BarChart
            data_1={[300, 144, 433, 655, 237, 755, 190]}
            data_2={[200, 444, 343, 556, 778, 455, 990]}
            title_1="Products"
            title_2="User"
            bgColor_1="hsl(260,50%,30%)"
            bgColor_2="hsl(360,90%,90%)"
            horizontal={false}
          />
          <h2 className="mx-0 my-8 text-2xl font-semibold text-center ">
            TOP SELLING PRODUCTS & TOP CUSTOMERS
          </h2>
        </section>
        <section className="w-[80%] ">
          <BarChart
            data_1={[300, 144, 433, 655, 237, 755, 190]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1="hsl(260,50%,30%)"
            bgColor_2=""
            horizontal={true}
          />
          <h2 className="mx-0 my-8 text-2xl font-semibold text-center uppercase trac ">
            Orders throughout the Year
          </h2>
        </section>
      </main>
    </div>
  );
};
export default BarCharts;
