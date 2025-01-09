import React from "react";

const Foot = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* First Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Flipkart Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Flipkart Wholesale
              </a>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policy</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Flipkart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Foot;
