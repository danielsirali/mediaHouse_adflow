import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartOptions } from 'chart.js';

const RevenueChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Revenue Increase',
                data: [5, 6, 7, 8, 5, 6, 7, 8, 7, 8, 6, 5],
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                tension: 0.3 
            },
            {
                label: 'Revenue Stable',
                data: [3, 2, 3, 4, 3, 4, 5, 4, 4, 5, 3, 4],
                borderColor: 'rgb(255, 205, 86)',
                fill: false,
                tension: 0.3
            },
            {
                label: 'Revenue Decrease',
                data: [1, 3, 2, 1, 2, 3, 2, 1, 2, 1, 2, 3],
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                tension: 0.3
            }
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1 
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom', 
            },
        },
    };

    return (
        <div className="bg-white w-2/3 h-auto p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold">Revenue Summary</h2>
            <div className="w-full h-full bg-white mt-4" style={{ height: '300px' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default RevenueChart;