import { Bar } from "react-chartjs-2";
import { Chart, ChartOptions, registerables } from 'chart.js';
import { useRef, useEffect } from "react";

Chart.register(...registerables);

const HorizontalChart = () => {
  const chartRef = useRef<Chart<"bar", number[], string> | null>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const datasets = chart.data.datasets;

      datasets.forEach((dataset: any, index: number) => {
        const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
        gradient.addColorStop(0, `rgba(242, 5, 25, 0)`);
        gradient.addColorStop(1, `rgba(242, 5, 25, ${(index + 1) / datasets.length})`);
        dataset.backgroundColor = gradient;
      });

      chart.update();
    }
  }, []);

  const data = {
    labels: ["Coca Cola", "Royco", "Safaricom", "Sportpesa"],
    datasets: [
      {
        label: "Payments",
        data: [500, 300, 450, 350],
        borderColor: "#F2051900",
        borderWidth: 20,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          },
          stepSize: 100,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) { 
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.x !== null) {
              label += "KES " + context.parsed.x.toLocaleString();
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white h-auto p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold">Top Paying Advertisers</h2>
      <div className="w-full h-full bg-white mt-4" style={{ height: "400px" }}>
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default HorizontalChart;
