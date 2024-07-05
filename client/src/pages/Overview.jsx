import { BiExport } from "react-icons/bi";
import TaskSummaryCard from "../components/TaskSummaryCard";
import { GoStack } from "react-icons/go";
import { MdOutlineDoneAll } from "react-icons/md";

const Overview = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex flex-row  h-[50%] justify-between  ">
        <div className="w-[100%] md:w-[65%] lg:w-[65%] flex flex-col justify-between bg-white drop-shadow-md rounded-lg py-4 px-2">
          <div className="flex flex-row justify-between">
            <div className="">
              <p className='text-lg font-semibold'>Overview</p>
              <p className="text-gray-500 text-base">Tasks summary</p>
            </div>
            <button className=" px-4 py-2 text-sm font-medium flex flex-row items-center justify-between gap-4 rounded-full text-white bg-blue-400">
              Export{" "}
              <span>
                <BiExport className="text-xl" />
              </span>
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2 lg:flex-row justify-around">
            <TaskSummaryCard bgColor="bg-purple-400" icon={<GoStack/>} number={65} title='Total Tasks'/>
            <TaskSummaryCard bgColor="bg-green-300" icon={<MdOutlineDoneAll />} number={39} title='Completed'/>
            <TaskSummaryCard bgColor="bg-blue-300" icon={<GoStack/>} number={13} title='In Progress'/>
            <TaskSummaryCard bgColor="bg-red-300" icon={<GoStack/>} number={13} title='Todo'/>
            
          </div>
        </div>
        <div></div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Overview;
