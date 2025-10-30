import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-stone-900 text-white flex flex-col items-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>
      <p className="text-stone-400 mb-10 text-center">
        Welcome to your CMS Admin Dashboard. Choose a section below:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl">
        {[
          { name: "Employee", path: "/dashboard/employee" },
          { name: "Expenses", path: "/dashboard/expenses" },
          { name: "Invoice", path: "/dashboard/invoice" },
          { name: "Records", path: "/dashboard/records" },
          { name: "Salary", path: "/dashboard/salary" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="bg-stone-800 hover:bg-stone-700 p-6 rounded-xl text-center text-lg font-semibold transition-all shadow-lg hover:shadow-stone-500/30"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
