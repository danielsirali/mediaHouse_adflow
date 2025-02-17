// import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <aside className="w-64 bg-white max-h-screen shadow-md flex flex-col">
        <div className="p-6 flex items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            <img
              src="/images/adflow_logo.png"
              className="w-30"
              alt="User Profile"
            />
          </h2>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold p-3 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/images/element_plus.png"
                          : "/images/inactive_dash.png"
                      }
                      className="w-6 mr-4"
                      alt="Media Icon"
                    />
                    Dashboard
                  </>
                )}
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/media"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold p-3 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive ? "/images/tv_active.png" : "/images/tv.png"
                      }
                      className="w-6 mr-4"
                      alt="Media Icon"
                    />
                    Media
                  </>
                )}
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/bookings"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold p-3 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/images/calendar_red.png"
                          : "/images/calendar.png"
                      }
                      className="w-6 mr-4"
                      alt="Media Icon"
                    />
                    Bookings
                  </>
                )}
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/payments-and-revenue"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold p-3 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/images/dollar_circle.png"
                          : "/images/dollar_circle.png"
                      }
                      className="w-6 mr-4"
                      alt="Media Icon"
                    />
                    Payments and Revenue
                  </>
                )}
              </NavLink>
            </li>
            <li className="border-b">
              <NavLink
                to="/audit-logs"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold p-3 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive ? "/images/layers.png" : "/images/layers.png"
                      }
                      className="w-6 mr-4"
                      alt="Media Icon"
                    />
                    Audit Logs
                  </>
                )}
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold p-3 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? "/images/gear.png" : "/images/gear.png"}
                      className="w-6 mr-4"
                      alt="Media Icon"
                    />
                    Settings
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
export default Nav;
