// import { useState } from "react";
import { NavLink } from "react-router-dom";

interface NavProps {
  isNavOpen: boolean;
}

function Nav({ isNavOpen }: NavProps) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-60 min-h-full transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 border-r-1 border-gray-200 lg:translate-x-0 lg:static bg-white text-gray-800`}
      >
        <div className="p-6 flex items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            <img
              src="/images/adflow_logo.png"
              className="w-30"
              alt="User Profile"
            />
          </h2>
        </div>

        <nav className="flex-1 p-4 ">
          <ul className="space-y-2">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold px-3 py-2 flex rounded-lg"
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
            <li>
              <NavLink
                to="/media"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold px-3 py-2 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive ? "/images/tv_active.png" : "/images/tv.png"
                      }
                      className={`mr-4 ${isActive ? "w-5 h-5 ml-1" : "w-6 h-6"}`} 
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
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold px-3 py-2 flex rounded-lg"
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
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold px-3 py-2 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/images/dollar_active.png"
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
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold px-3 py-2 mb-2 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/images/audit_active.png"
                          : "/images/layers.png"
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
                    ? "text-[#F20519] text-sm bg-red-200 font-semibold px-3 py-2 flex rounded-lg"
                    : "text-black text-sm font-semibold p-3 flex rounded-lg"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/images/gear_active.png"
                          : "/images/gear.png"
                      }
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
