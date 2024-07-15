import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
// import { Chart as ChartJS } from "chart.js";

Chart.register(...registerables);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    colors: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
      border: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      grid: {
        display: true,
      },
      border: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
  },
};

const graphData = [65, 234, 431];

const priority = ["High", "Medium", "Low"];
const labels = graphData.map((_, index) => priority[index % 12]);
export const data = {
  labels,
  datasets: [
    {
      backgroundColor: "#6495ED",
      data: graphData,
      barPercentage: 0.4,
      borderRadius: 2,
      borderSkipped: false,
    },
  ],
};
const TaskPriorityDistribution = () => {
  const graphStyle = {
    borderRadius: "0.375rem",
    padding: "1rem",
  };
  return (
    <div style={graphStyle} className="w-full ">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TaskPriorityDistribution;
