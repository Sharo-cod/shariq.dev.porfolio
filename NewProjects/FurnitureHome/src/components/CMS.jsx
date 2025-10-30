import React, { useState } from "react";

export default function CMS() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔹 Simple demo authentication
    if (email === "admin@example.com" && password === "admin123") {
      alert("✅ Logged in successfully!");
    } else {
      alert("❌ Invalid email or password.");
    }
  };

  return (
    <section className="min-h-screen bg-stone-900 flex items-center justify-center px-6">
      <div className="bg-stone-800 p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-2">CMS Login</h1>
        <p className="text-stone-400 mb-8">Sign in to your admin dashboard</p>

        <form onSubmit={handleLogin} className="space-y-5 text-left">
          <div>
            <label className="block mb-2 text-gray-300 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-stone-700 text-white focus:ring-2 focus:ring-stone-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-stone-700 text-white focus:ring-2 focus:ring-stone-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-stone-700 hover:bg-stone-600 text-white rounded-full font-semibold transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-stone-500 text-sm mt-8">
          © {new Date().getFullYear()} CMS Portal Of Home Furniture
        </p>
      </div>
    </section>
  );
}
