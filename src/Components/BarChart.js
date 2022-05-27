// react-imports
import React from "react";

// css
import "../App.css";

// react-chartjs imports
import { Bar } from "react-chartjs-2";

// chart.js imports
import { Chart, registerables } from "chart.js";

// chartjs dependencies
Chart.register(...registerables);

const BarChart = ({ ageData, balanceValue }) => {
  const chartData = {
    labels: ageData,
    datasets: [
      {
        label: "Balance",
        data: balanceValue,
        backgroundColor: ["rgba(40, 147, 235, 0.3)"],
        borderColor: ["rgba(40, 147, 235,1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        width={600}
        height={400}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                pointStyle: "rect",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
