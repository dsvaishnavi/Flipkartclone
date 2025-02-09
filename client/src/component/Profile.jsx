import { useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export const Profile = ({ acc, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-semibold text-white px-4 py-2 bg-blue-500 rounded-lg shadow-md"
      >
        {acc} ▼
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden border">
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            <CgProfile className="inline-block mr-2"/>
            Profile
          </button>
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            <FaPowerOff className="inline-block mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
