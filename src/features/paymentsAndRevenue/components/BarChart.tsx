import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";

const PaymentsChart = () => {
  const data = {
    labels: [
      "Jan",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Paid",
        data: [
          203000, 180000, 205000, 220000, 225000, 210000, 215000, 230000,
          250000, 260000,
        ],
        backgroundColor: "#F20519",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          },
          stepSize: 100000,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += "KES " + context.parsed.y.toLocaleString();
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="h-auto ">
      <h2 className="text-lg font-semibold">Paid vs Pending Payments</h2>
      <div className="w-full h-full bg-white mt-4" style={{ height: "400px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PaymentsChart;
