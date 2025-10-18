import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [salaryOpen, setSalaryOpen] = useState(false);
  const [expensesOpen, setExpensesOpen] = useState(false);
  const [recordsOpen, setRecordsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* === MENU BUTTON (Mobile) === */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-5 left-5 z-50 bg-white shadow-md px-3 py-2 rounded text-xl"
      >
        ☰
      </button>

      {/* === SIDEBAR === */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        <h2 className="text-2xl font-semibold text-indigo-900 text-center py-6 border-b border-gray-200">
          DASHBOARD
        </h2>

        <nav className="overflow-y-auto h-[calc(100vh-100px)] p-4 space-y-3">
          {/* ===== MENU GROUPS ===== */}
          {[
            {
              title: "Invoice",
              open: invoiceOpen,
              toggle: () => setInvoiceOpen(!invoiceOpen),
              links: [
                { path: "/dashboard/invoice/add", label: "Add Invoice" },
                { path: "/dashboard/invoice/list", label: "List of Invoices" },
              ],
            },
            {
              title: "Employees",
              open: employeeOpen,
              toggle: () => setEmployeeOpen(!employeeOpen),
              links: [
                { path: "/dashboard/employee/add", label: "Add Employee" },
                { path: "/dashboard/employee/list", label: "List of Employees" },
              ],
            },
            {
              title: "Salary of Employees",
              open: salaryOpen,
              toggle: () => setSalaryOpen(!salaryOpen),
              links: [
                { path: "/dashboard/salary/add", label: "Add Salary" },
                { path: "/dashboard/salary/list", label: "List of Salaries" },
              ],
            },
            {
              title: "Expenses",
              open: expensesOpen,
              toggle: () => setExpensesOpen(!expensesOpen),
              links: [
                { path: "/dashboard/expenses/add", label: "Add Expenses" },
                { path: "/dashboard/expenses/list", label: "List of Expenses" },
              ],
            },
            {
              title: "Records",
              open: recordsOpen,
              toggle: () => setRecordsOpen(!recordsOpen),
              links: [
                { path: "/dashboard/records/add", label: "Add Records" },
                { path: "/dashboard/records/view", label: "View Records" },
              ],
            },
          ].map((menu, i) => (
            <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={menu.toggle}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-800 transition-all"
              >
                {menu.title}
                <span
                  className={`transform text-sm transition-transform ${
                    menu.open ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Nested Links */}
              <ul
                className={`bg-indigo-50 overflow-hidden transition-all duration-300 ${
                  menu.open ? "max-h-40" : "max-h-0"
                }`}
              >
                {menu.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="block pl-12 pr-6 py-3 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-800 transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* === MAIN CONTENT === */}
      <main
        className={`flex-1 transition-all duration-300 bg-gray-100 p-8 md:ml-72 ${
          isSidebarOpen ? "blur-0" : ""
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
