import { NavLink } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";

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
      <div className="p-4 text-lg font-extrabold text-black flex justify-between items-center">
        ProjectPulse
        <IoCloseCircleOutline
          className="text-blue-400 md:hidden"
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
                isActive ? "text-white bg-blue-500" : "text-gray-700"
              } rounded-lg hover:bg-blue-500 hover:text-white`
            }
            onClick={onClose}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideBar;
