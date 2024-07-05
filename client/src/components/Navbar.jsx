import { Popover } from "@headlessui/react";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import LanguageDropdown from "./LanguageDropdown";
import { useState } from "react";

const Navbar = (props) => {
  const [theLanguage, setTheLanguage] = useState("en");

  const onLanguageSelected = (option) => {
    setTheLanguage(option);
  };
  return (
    <header className="flex flex-row gap-4 items-center justify-between px-4 py-4 bg-white shadow-lg">
      <IoReorderThreeSharp
        className="text-gray-600 md:hidden"
        size={24}
        onClick={props.onToggleSidebar}
      />
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex flex-row items-center justify-between gap-4  w-[80%]">
        <div className="bg-gray-200 w-[60%] lg:w-[40%] flex flex-row items-center gap-2 p-2 rounded-full">
          <IoIosSearch
            style={{ fill: "gray" }}
            className="hover:cursor-pointer"
            size={24}
          />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none bg-transparent w-full"
          />
        </div>

        <div className="flex flex-row items-center justify-end gap-8 w-[20%]">
          <LanguageDropdown
            onSelect={onLanguageSelected}
            currentLanguage={theLanguage}
          />
          <Popover className="relative">
            <Popover.Button>
              <FaRegBell className="w-6 h-6 text-gray-600" />
            </Popover.Button>
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <div className="p-4">No new notifications</div>
            </Popover.Panel>
          </Popover>
          <Popover className="relative">
            <Popover.Button>
              <FaRegUser className="w-6 h-6 text-gray-600" />
            </Popover.Button>
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <div className="p-4">Profile settings</div>
            </Popover.Panel>
          </Popover>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
