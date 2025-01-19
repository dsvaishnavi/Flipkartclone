import React from "react";
import { FaUserLarge } from "react-icons/fa6";

export const LoginDropdown = ({ openDialog }) => {
  return (
    <div className="relative group inline-block text-left">
      {/* Dropdown Button */}
      <button className="flex items-center text-black bg-yellow-400 px-4 py-2 rounded-md text-sm font-medium space-x-2">
        <FaUserLarge className="text-black text-lg" />
      </button>
      {}

      {/* Dropdown Content */}
      <div className="absolute right-0 hidden group-hover:block mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            New User?
            <button className="text-blue-800 ml-12 font-bold text-xs">
              Sign In
            </button>
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
    </div>
  );
};

export default LoginDropdown;
