// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";
function ExpensesChart() {
  return (
    <div>
      <div className="flex justify-around w-60 h-16 bg-[hsl(10,79%,65%)] m-4 rounded-lg text-white p-3">
        <div>
          <p>My balance</p>
          <p className="text-[18px] font-semibold">$921.48</p>
        </div>
        <div className="flex my-3">
            <div className="w-4 h-4 rounded-lg bg-black"></div>
            <div className="-ml-1.5 w-4 h-4 rounded-lg border-white border"></div>
        </div>
      </div>
    </div>
    // <BarChart
    //   style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    //   responsive
    //   data={data}
    //   margin={{
    //     top: 5,
    //     right: 0,
    //     left: 0,
    //     bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis width="auto" />
    //   <Tooltip />
    //   <Legend />
    //   <Bar dataKey="pv" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
    //   <Bar dataKey="uv" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
    //   <RechartsDevtools />
    // </BarChart>
  );
}

export default ExpensesChart;
