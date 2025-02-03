import React, { useState } from "react";
export const Profile = ({ acc,onLogout  }) => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div>
        <h1 className="text-lg font-semibold text-white px-4 py-2 bg-blue-600 rounded-lg shadow-md">
          {acc}
        </h1>
      </div>
      <div className="relative">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={() => setShowMenu(!showMenu)}
      >
        Profile ▼
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
          <ul className="text-black">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Settings
            </li>
            <li
              className="px-4 py-2 text-red-600 hover:bg-gray-200 cursor-pointer"
              onClick={onLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
      
    </>
  );
};
