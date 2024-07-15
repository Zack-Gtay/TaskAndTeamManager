import { BiExport } from "react-icons/bi";
import TaskSummaryCard from "../components/TaskSummaryCard";
import { GoStack } from "react-icons/go";
import { MdOutlineDoneAll } from "react-icons/md";
import { RiProgress4Line } from "react-icons/ri";
import { RiTodoFill } from "react-icons/ri";
import TaskPriorityDistribution from "../components/TaskPriorityDistribution";

const Overview = () => {
  const tasksSummary = [
    {
      bgColor: "bg-gradient-to-r from-green-200 to-green-400",
      icon: <GoStack />,
      number: 65,
      title: "Total Tasks",
    },
    {
      bgColor: "bg-gradient-to-r from-blue-200 to-blue-400",
      icon: <MdOutlineDoneAll />,
      number: 39,
      title: "Completed",
    },
    {
      bgColor: "bg-gradient-to-r from-purple-200 to-purple-400",
      icon: <RiProgress4Line />,
      number: 13,
      title: "In Progress",
    },
    {
      bgColor: "bg-gradient-to-r from-orange-200 to-orange-400",
      icon: <RiTodoFill />,
      number: 13,
      title: "Todo",
    },
  ];
  return (
    <div className="flex flex-col  h-screen   overflow-scroll no-scrollbar">
      <div className="flex flex-col md:flex-row lg:flex-row w-full  gap-2 justify-between  ">
        <div className="w-[100%] md:w-[70%] lg:w-[70%] flex flex-col justify-between bg-white drop-shadow-md rounded-lg py-4 px-2">
          <div className="flex flex-row justify-between mb-4">
            <div className="">
              <p className="text-lg font-semibold">Overview</p>
              <p className="text-gray-500 text-base mb-6">Tasks summary</p>
            </div>
            <button className=" w-[100px] h-[40px] p-4 text-sm font-medium flex flex-row items-center justify-between gap-3 rounded-full text-black border">
              Export{" "}
              <span>
                <BiExport className="text-base" />
              </span>
            </button>
          </div>
          <div className="w-full md:h-[60%] lg:h-[60%] flex flex-col md:flex-row gap-1 lg:flex-row ">
            {tasksSummary.map((taskSummary, key) => (
              <TaskSummaryCard
                key={key}
                bgColor={taskSummary.bgColor}
                icon={taskSummary.icon}
                number={taskSummary.number}
                title={taskSummary.title}
              />
            ))}
          </div>
        </div>
        <div className=" bg-white drop-shadow-md rounded-lg py-4 px-2 ">
          <div className="flex flex-col justify-between  ">
            <div className="">
              <p className="text-lg font-semibold">
                Task Priority Distribution
              </p>
            </div>
            <div className="mt-5  ">
              <TaskPriorityDistribution />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col drop-shadow-md rounded-lg py-4 px-2 my-2  mb-6">
        <div className=""></div>
      </div>
    </div>
  );
};

export default Overview;
