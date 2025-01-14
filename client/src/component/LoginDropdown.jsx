import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";

export const LoginDropdown = ({openDialog}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-black bg-yellow-400 px-4 py-2 rounded-md text-sm font-medium space-x-2"
      >
        <FaUserLarge className="text-black text-lg" />
        <button
        className="text-black text-xl font-medium"
        onClick={openDialog} // Trigger the dialog opening here
      >
        Login
      </button>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
          <div className="py-2">
          
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              New User? 
              <button className="text-blue-800 ml-12 font-bold text-xs">sign in</button>
            </a>

            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Account
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Orders
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Wishlist
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
