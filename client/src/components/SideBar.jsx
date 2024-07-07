import { NavLink } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import subscribePremium from "../assets/subscribePremium.jpg";
import {
  IoHomeOutline,
  IoListOutline,
  IoCheckmarkDoneOutline,
  IoTimeOutline,
  IoPeopleOutline,
  IoTrashOutline,
} from "react-icons/io5";

const SideBar = ({ isOpen, onClose }) => {
  const navigation = [
    { name: "Overview", icon: IoHomeOutline, link: "/overview" },
    { name: "Tasks", icon: IoListOutline, link: "/tasks" },
    { name: "Completed", icon: IoCheckmarkDoneOutline, link: "/completed" },
    { name: "In Progress", icon: IoTimeOutline, link: "/in-progress" },
    { name: "Todos", icon: IoListOutline, link: "/todos" },
    { name: "Team", icon: IoPeopleOutline, link: "/team" },
    { name: "Trash", icon: IoTrashOutline, link: "/trash" },
  ];

  return (
    <aside
      className={`bg-white shadow-lg h-full fixed top-0 left-0 z-50  ${
        isOpen ? "translate-x-0 w-[40%]" : "w-[20%]"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 text-lg font-bold flex flex-row items-center justify-between text-purple-700 ">
        <div className="flex flex-row">
          <p>Project</p>
          <span className="text-purple-500 m-0 p-0">Pulse</span>
        </div>
        <IoCloseCircleOutline
          className="text-purple-500 md:hidden hover:cursor-pointer"
          size={24}
          onClick={onClose}
        />
      </div>
      <nav className="mt-4 px-2 lg:px-6 md:px-6 ">
        {navigation.map((item) => (
          <div key={item.name} className="flex flex-row items-center">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                ` w-full px-2 md:px-4 lg:px-4 py-3 mt-2 text-sm flex flex-row items-center gap-2 font-medium ${
                  isActive ? "text-white bg-purple-500" : "text-gray-500"
                } rounded-lg hover:bg-purple-600 hover:text-white`
              }
              onClick={onClose}
            >
              <item.icon
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-gray-500"} `
                }
              />

              <p>{item.name}</p>
            </NavLink>
          </div>
        ))}
        <div
          style={{
            backgroundImage: `url(${subscribePremium})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full opacity-90 h-[150px] rounded-2xl mt-8 p-2 flex flex-row justify-center items-center"
        >
          <h1 className="text-center text-white font-semibold">
            Subscribe to Premium to access additional features.
          </h1>
        </div>
      </nav>
    </aside>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideBar;
