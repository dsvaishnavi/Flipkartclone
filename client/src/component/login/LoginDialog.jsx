import React from "react";
import { useState } from "react";

const logininitialvalue = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "sign up",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started",
  },
};

export const LoginDialog = ({ closeDialog, isDialogOpen }) => {
  const [account, setAccount] = useState(logininitialvalue.login);
  

  const handlesignup = () => {
    setAccount(logininitialvalue.signup);
  };

  const handleLogin = () => {
    setAccount(logininitialvalue.login);
  };
  

  return (
    <>
      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[50rem] h-3/4 flex">
            {/* Left Section */}

            <div className="w-2/5 bg-blue-500 text-white p-6 rounded-l-lg flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-4">{account.heading}</h2>
              <p className="text-lg mb-36">{account.subheading}</p>
              <div className="flex justify-center mb-4 ">
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                  alt="Login Illustration"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>

            {/* Right Section */}
            {account.view === "login" ? (
              <div className="w-3/5 p-6">
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Email/Mobile number"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="text-xs ">
                    By continuing, you agree to Flipkart's{" "}
                    <span className="text-blue-600"> Terms of Use </span> and{" "}
                    <span className="text-blue-600">Privacy Policy </span>.
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-orange-500 text-white py-2 mb-3"
                  >
                    Request OTP
                  </button>
                  <span
                    onClick={closeDialog}
                    className="cursor-pointer text-gray-500 ml-48 "
                  >
                    close
                  </span>
                </form>

                <div className="text-center mt-72 border-t pt-4">
                  <p className="text-gray-600 text-sm">
                    New to Flipkart?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handlesignup(0)}
                    >
                      Create an account
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-3/5 p-6">
                <form className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium"
                    >
                      Username
                    </label>
                    <input
                      type="username"
                      id="username"
                      placeholder="Enter your username"
                      className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-gray-700 font-medium"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-gray-700 font-medium"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2  rounded-lg font-medium hover:bg-orange-600"
                  >
                    Sign Up
                  </button>
                  <p className="text-center text-gray-600 text-sm ">
                    By continuing, you agree to Flipkart's{" "}
                    <span className="text-blue-500 cursor-pointer">
                      Terms of Use
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-500 cursor-pointer">
                      Privacy Policy
                    </span>
                    .
                  </p>
                  <span
                    className="text-gray-500 text-xm pb-4 cursor-pointer text-center " onClick={handleLogin}
                  >
                    Already have an account!
                  </span>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
