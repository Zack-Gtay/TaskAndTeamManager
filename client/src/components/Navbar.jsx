import { Popover } from "@headlessui/react";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import LanguageDropdown from "./LanguageDropdown";
import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";

const Navbar = (props) => {
  const [theLanguage, setTheLanguage] = useState("en");

  const onLanguageSelected = (option) => {
    setTheLanguage(option);
  };
  return (
    <header className="flex flex-row gap-1 items-center justify-between px-4 py-2 bg-white shadow-lg">
      <IoReorderThreeSharp
        className="text-5xl text-gray-600 md:hidden lg:hidden hover:cursor-pointer"
        onClick={props.onToggleSidebar}
      />
      <div className="text-2xl font-semibold ">Dashboard</div>
      <div className="flex flex-row items-center justify-between gap-4  w-[80%]">
        <div className="bg-gray-100 w-0 invisible md:visible lg:visible lg:w-[60%] flex flex-row items-center gap-2 p-2 rounded-full">
          <IoIosSearch
            className="hover:cursor-pointer text-purple-700"
            size={24}
          />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none bg-transparent w-full text-sm"
          />
        </div>

        <div className="flex flex-row items-center justify-end gap-1 lg:gap-4 md:gap-4 w-0 md:w-full lg:w-full">
          <Popover className="relative">
            <Popover.Button>
              <FaRegBell className="w-8 h-8 rounded-3xl text-orange-500 bg-orange-200 p-2" />
            </Popover.Button>
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <div className="p-4">No new notifications</div>
            </Popover.Panel>
          </Popover>
          <div className="invisible lg:visible md:visible w-[20%] ">
            <LanguageDropdown
              onSelect={onLanguageSelected}
              currentLanguage={theLanguage}
            />
          </div>
          <Popover className="">
            <Popover.Button className="flex flex-row items-center gap-3 rounded-xl border p-2 min-w-[130px]">
              <FaRegUser className="w-4 h-4  text-gray-900" />
              <div className="flex flex-row items-center text-gray-900 justify-between  w-full">
                <div className="flex flex-col items-start w-full">
                  <p className="text-xs font-bold">Zakaria...</p>
                  <p className="text-xs font-semibold">Admin</p>
                </div>
                <IoIosArrowDown className="text-gray-900 text-2xl" />
              </div>
            </Popover.Button>
            <Popover.Panel className="before:outline-none before:border-transparent after:outline-none after:border-transparent absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <div className="p-4 bg-transparent">Profile settings</div>
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
