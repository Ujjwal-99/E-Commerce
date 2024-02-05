import AdminSidebar from "../../../components/admin/AdminSidebar";

const PieCharts = () => {
  return (
    <div className="flex flex-row w-full gap-8 h-screen bg-[rgb(247,247,247)]">
      {/*sidebar*/}
      <AdminSidebar />
      <main></main>
    </div>
  );
};

export default PieCharts;
