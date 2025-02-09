import React, { useState } from "react";
import { User, LogOut, Heart, ShoppingBag, Settings } from "lucide-react";

export const LoginDropdown = ({ openDialog }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-medium space-x-2 
                 border border-yellow-500 hover:bg-yellow-500 transition"
      >
        <User className="text-black" size={20} />
        <span>Login</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
          <div className="py-2">
            {/* Sign In */}
            <div className="px-4 py-2 text-xm text-gray-700 flex justify-between items-center">
              <span>New User?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openDialog();
                }}
                className="text-blue-600 font-bold text-xm hover:underline"
              >
                Sign In
              </button>
            </div>

            {/* Menu Items */}
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <Settings size={16} className="mr-2" />
              My Account
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <ShoppingBag size={16} className="mr-2" />
              Orders
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <Heart size={16} className="mr-2" />
              Wishlist
            </button>

            
            
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
