import React, { useState, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import LoginDropdown from "./LoginDropdown";
import { LoginDialog } from "./login/LoginDialog";
import { DataContext } from "./context/DataProvider";

export const Nav = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { acc } = useContext(DataContext);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const openLoginPage = () => {
    console.log("Login button clicked");
    openDialog();
  };
  return (
    <>
      <nav className="bg-blue-300 px-4 py-2 flex items-center justify-between flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/logoflipkart.svg"
            alt="Flipkart Logo"
            className="h-12"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 my-2 md:my-0 flex flex-row items-center">
          <input
            type="text"
            placeholder="Search for products, brands, and more"
            className="w-full md:w-4/5 px-4 py-2 rounded-md text-sm focus:outline-none"
          />
          <CiSearch className="text-lg m-3 h-6 w-6" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-16">
          {acc ? (
            <h1>{acc}</h1>
          ) : (
            <>
              <span
                onClick={openLoginPage}
                className="absolute top-4 flex items-center text-black w-30 bg-yellow-400 px-1 py-1  rounded-md text-xl font-medium"
              >
                Login
              </span>
            </>
          )}
          {/* <button
            onClick={openLoginPage}
            className="absolute top-4 flex items-center text-black w-30 bg-yellow-400 px-1 py-1  rounded-md text-xl font-medium"
          >
            Login
          </button> */}
          <LoginDropdown openDialog={openDialog} />

          <a
            href="#"
            className="text-black text-xl font-medium hidden sm:block"
          >
            Become a Seller
          </a>
          <a
            href="#"
            className="text-black text-xl font-medium hidden sm:block"
          >
            More
          </a>

          <div className="relative">
            <a
              href="#"
              className="text-black text-sm font-medium flex items-center space-x-1"
            >
              <button className="text-xl">Cart</button>
              <FaCartShopping className="text-xl" />
            </a>
          </div>
        </div>
      </nav>
      {/* -------------------------------------Dialog box for login----------------------------------------------------- */}

      <LoginDialog closeDialog={closeDialog} isDialogOpen={isDialogOpen} />
    </>
  );
};
