import React from "react";
export const LoginDialog = ({ closeDialog, isDialogOpen }) => {
  return (
    <>
      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[50rem] h-3/4 flex">
           
            {/* Left Section */}
           
            <div className="w-2/5 bg-blue-500 text-white p-6 rounded-l-lg flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-4">Login</h2>
              <p className="text-lg mb-36">
                Get access to your Orders, Wishlist, and Recommendations.
              </p>
              <div className="flex justify-center mb-4 ">
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                  alt="Login Illustration"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>

            {/* Right Section */}
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
                  <span className="text-blue-500 cursor-pointer">
                    Create an account
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
