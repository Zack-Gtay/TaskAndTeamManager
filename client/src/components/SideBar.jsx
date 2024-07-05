import { NavLink } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import subscribePremium from "../assets/subscribePremium.jpg";
const SideBar = ({ isOpen, onClose }) => {
  const navigation = [
    { name: "Overview", link: "/overview" },
    { name: "Tasks", link: "/tasks" },
    { name: "Completed", link: "/completed" },
    { name: "In Progress", link: "/in-progress" },
    { name: "Todos", link: "/todos" },
    { name: "Team", link: "/team" },
    { name: "Trash", link: "/trash" },
  ];

  return (
    <aside
      className={`bg-white shadow-lg h-full fixed top-0 left-0 z-50  ${
        isOpen ? "translate-x-0 w-[40%]" : "w-[20%]"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 text-lg font-bold flex flex-row items-center justify-between text-purple-700 ">
        <div className='flex flex-row'>
        <p>Project</p>
        <span className="text-purple-500 m-0 p-0">Pulse</span>
        </div>
        <IoCloseCircleOutline
          className="text-purple-500 md:hidden hover:cursor-pointer"
          size={24}
          onClick={onClose}
        />
      </div>
      <nav className="mt-4 px-6">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              `block px-4 py-2 mt-2 text-sm font-medium ${
                isActive ? "text-white bg-purple-500" : "text-gray-700"
              } rounded-lg hover:bg-purple-600 hover:text-white`
            }
            onClick={onClose}
          >
            {item.name}
          </NavLink>
        ))}
        <div
          style={{
            backgroundImage: `url(${subscribePremium})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full opacity-90 h-[200px] rounded-2xl mt-6 p-2 flex flex-row justify-center items-center"
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
