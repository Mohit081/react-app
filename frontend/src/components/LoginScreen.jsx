import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "User", email });
    navigate("/account-settings");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Sign in to your PopX account
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
