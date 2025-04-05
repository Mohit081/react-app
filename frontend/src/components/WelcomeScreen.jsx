import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg mb-4 hover:bg-purple-700"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg font-semibold text-lg hover:bg-purple-50"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
