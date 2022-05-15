// react-imports
import React from "react";
// react-chartjs imports
import { Bar } from "react-chartjs-2";
// chart.js imports
import { Chart, registerables } from "chart.js";
// chartjs dependencies
Chart.register(...registerables);

const BarChart = ({
  // props
  ageData,
  balanceValue,
}) => {
  const chartData = {
    labels: ageData,
    datasets: [
      {
        label: "Balance",
        data: balanceValue,
        backgroundColor: ["rgba(75, 192, 192, 0.3)"],
        borderColor: ["rgba(75,192,192,1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={chartData}
        width={600}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
