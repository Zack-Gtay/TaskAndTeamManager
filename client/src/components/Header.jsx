import { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Logo from "../assets/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 to-blue-300 text-white flex justify-between items-center pr-12 pl-4  z-50 relative h-[80px]">
      <div className="">
        <Link to="/">
          <img src={Logo} className="w-[38%] p-4" />
        </Link>
      </div>
      <nav className="hidden md:flex lg:flex lg:flex-row lg:justify-center lg:items-center space-x-4 ">
        <Link to="/" className="hover:text-black">
          Pricing
        </Link>
        <Popover className="">
          <PopoverButton className="block  text-white focus:outline-none">
            Solutions
          </PopoverButton>
          <PopoverPanel className="absolute z-50 mt-2 w-56 rounded-lg bg-gray-800 text-white">
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">
                  Create your own project planning Tasks and Teams
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">
                  Start integrating products and tools
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>

        <Link to="/log-in" className="hover:text-black">
          Log In
        </Link>
        <Link to="/sign-up" className="hover:text-black">
          Sign Up
        </Link>
        <Link to="/" className="hover:text-black">
          Support
        </Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 mt-10">
          <Link
            to="/"
            className="text-white text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Popover className="w-full text-center">
            <PopoverButton className="   hover:text-blue-400  text-white focus:outline-none">
              Solutions
            </PopoverButton>
            <PopoverPanel className="absolute left-0 right-0 z-50 mt-2 rounded-lg bg-gray-800 text-white">
              <div className="p-3">
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold text-white">Insights</p>
                  <p className="text-white/50">
                    Measure actions your users take
                  </p>
                </a>
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold text-white">Automations</p>
                  <p className="text-white/50">
                    Create your own project planning Tasks and Teams
                  </p>
                </a>
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold text-white">Reports</p>
                  <p className="text-white/50">Keep track of your growth</p>
                </a>
              </div>
              <div className="p-3">
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold text-white">Documentation</p>
                  <p className="text-white/50">
                    Start integrating products and tools
                  </p>
                </a>
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            to="/log-in"
            className="text-white text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            Log In
          </Link>
          <Link
            to="/sign-up"
            className="text-white text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
          <Link
            to="/"
            className="text-white text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
