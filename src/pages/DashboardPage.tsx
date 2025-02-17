// import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header";
import TotalSalesChart from "../components/Dashboard/TotalSalesChart";
import LatestSalesTable from "../components/Dashboard/LatestSalesTable";
import EmployeeComparison from "../components/Dashboard/EmployeeComparison";

const DashboardPage = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 bg-white">
      <Header />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <TotalSalesChart />
      </div>

      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <LatestSalesTable />
        </div>
        <div className="sm:col-span-1 lg:col-span-1">
          <EmployeeComparison />
        </div>
      </div>
    </main>
  </div>
);

export default DashboardPage;

