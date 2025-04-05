import React from "react";
import { useUser } from "../context/UserContext";
import { FaCamera } from "react-icons/fa";

const AccountSettings = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900">
          Account Settings
        </h2>

        <div className="mt-4 flex items-center gap-4">
          <div className="relative w-16 h-16">
            <img
              src="https://via.placeholder.com/64"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full text-white cursor-pointer">
              <FaCamera size={12} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Welcome , {user?.name || "USER"}
            </h3>
            <p className="text-gray-600">
              Email: {user?.email || "unknown@example.com"}
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
