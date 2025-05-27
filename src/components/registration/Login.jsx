import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center">Welcome Back!</h2>
        <p className="text-gray-600 mb-6 text-center">Login to JuiceDelight</p>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-orange-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full border border-orange-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-orange-500" />
              Remember me
            </label>
            <a href="#" className="text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
