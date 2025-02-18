import { Line } from 'react-chartjs-2';
import { useRef, useEffect } from 'react';
import "chart.js/auto";
import { Chart, ChartOptions, ChartData } from 'chart.js';

const PaymentsChart = () => {
  const chartRef = useRef<Chart<"line", number[], string> | null>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "#F20519");
      gradient.addColorStop(1, "#F2051900");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data: ChartData<"line", number[], string> = {
    labels: [
      "Jan", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Paid",
        data: [
          203000, 180000, 205000, 220000, 225000, 210000, 215000, 230000,
          250000, 260000,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "", // This will be set in useEffect
        fill: true,
        tension: 0.4,
      },
      {
        label: "Pending",
        data: [
          222000, 190000, 205000, 180000, 215000, 218000, 210000, 230000,
          195000, 270000,
        ],
        borderColor: "#FED253",
        backgroundColor: "rgba(255, 205, 86, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
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
              label += context.parsed.y.toLocaleString();
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white h-auto p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold">Paid vs Pending Payments</h2>
      <div className="w-full h-full bg-white mt-4" style={{ height: "300px" }}>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default PaymentsChart;
