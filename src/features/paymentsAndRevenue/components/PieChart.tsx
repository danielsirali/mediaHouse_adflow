import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";

const RevenueChart = () => {
  const data = {
    labels: ["Revenue Increase", "Revenue Stable", "Revenue Decrease"],
    datasets: [
      {
        label: "Revenue Distribution",
        data: [60, 30, 10], // Example data
        backgroundColor: [
          "#F2D8A7",
          "#918264",
          "#91B7D9",
        ],
        hoverOffset: 4,
      },
    ],
  };

const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "right",
        },
    },
};

  return (
    <div className=" h-auto p-4 rounded-md">
      <h2 className="text-lg font-semibold">
        Payment Volume by Ad Slot Category
      </h2>
      <div className="w-full h-full bg-white mt-4" style={{ height: "300px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
