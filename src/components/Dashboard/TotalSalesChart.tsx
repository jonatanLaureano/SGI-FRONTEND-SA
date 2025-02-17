// import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "0", sales: 1500 },
  { month: "1", sales: 2000 },
  { month: "2", sales: 3000 },
  { month: "3", sales: 1200 },
  { month: "4", sales: 1800 },
  { month: "5", sales: 700 },
  { month: "6", sales: 2500 },
  { month: "7", sales: 1900 },
  { month: "8", sales: 2200 },
  { month: "9", sales: 2800 },
  { month: "10", sales: 2300 },
  { month: "11", sales: 800 },
];

const TotalSalesChart = () => {
  return (
    <div className="p-0 bg-white rounded shadow border border-black ">
      <div className="flex justify-between items-center bg-AzulSidebar text-white p-4 rounded-t">
        
      <div className="flex items-center space-x-4">
        <h3 className="font-bold">Total de ventas (S/)</h3>
        <span className="text-green-400 font-bold rounded px-2 bg-green-400 bg-opacity-20">+7%</span>
      </div>
        
        <div className="flex items-center">

          <select className="bg-white-800 border-none text-black rounded">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <div className="p-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" dot={{ r: 5, stroke: 'pink', fill: 'white' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSalesChart;
