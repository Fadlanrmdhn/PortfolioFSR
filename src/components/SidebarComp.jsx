import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <div className="text-start">
        <button
          onClick={() => setOpen(true)}
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          <IoIosMenu />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        ></div>
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 bg-black/80 backdrop-blur-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white font-bold text-lg">SkyProject ⚡</h1>
          <button onClick={() => setOpen(false)} className="text-white">
            ✕
          </button>
        </div>

        {/* MENU */}
        <ul className="space-y-3 text-white">
          <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>

          {/* DROPDOWN */}
          <li>
            <button
              onClick={() => setDropdown(!dropdown)}
              className="w-full flex justify-between items-center hover:text-purple-400"
            >
              E-commerce
              <span>{dropdown ? "▲" : "▼"}</span>
            </button>

            {dropdown && (
              <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-300">
                <li className="hover:text-white">Products</li>
                <li className="hover:text-white">Billing</li>
                <li className="hover:text-white">Invoice</li>
              </ul>
            )}
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">Kanban</li>
          <li className="hover:text-pink-400 cursor-pointer">Inbox</li>
          <li className="hover:text-green-400 cursor-pointer">Users</li>
          <li className="hover:text-yellow-400 cursor-pointer">Products</li>
          <li className="hover:text-red-400 cursor-pointer">Sign In</li>
        </ul>
      </div>
    </>
  );
}