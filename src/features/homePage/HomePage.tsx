// import { useState } from "react";
// import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import LineChart from "./components/LineChart";

function HomePage() {
  return (
    <>
      <div className="flex h-full bg-gray-100">
        <Nav />

        <main className="flex-1">
          <div className="flex justify-end bg-white p-4 rounded-md">
            <div className="text-xs">
              <div className="flex items-center">
                <i className="fas fa-bell text-gray-500 text-lg"></i>
                <div className="ml-4 flex items-center">
                  <img
                    src="/images/icon_notification.png"
                    className="w-4 h-4 ml-2 mr-4"
                    alt="Notification Icon"
                  />
                  <img
                    src="/images/dashboard_user.png"
                    className="w-10 h-10 rounded-full"
                    alt="User Profile"
                  />
                  <div className="ml-2">
                    <p className="font-semibold flex items-center">
                      Admin Admin
                    </p>
                    <p className="text-gray-500 text-xs">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="p-4">
              <p className="text-xs">
                <span className="text-gray-400">Home /</span>{" "}
                <span className="text-gray-600">Dashboard</span>
              </p>
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex">
                  <img
                    src="/images/perfomance_ads.png"
                    className="mr-2 rounded-full w-10 h-10"
                    alt="Royco Logo"
                  />{" "}
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">20</h2>
                    <p className="text-gray-400 text-xs">Top Performing Ads</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex">
                  <img
                    src="/images/available_slots.png"
                    className="mr-2 rounded-full w-10 h-10"
                    alt="Royco Logo"
                  />{" "}
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">20</h2>
                    <p className="text-gray-400 text-xs">Available Slots</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex">
                  <img
                    src="/images/pending_bookings.png"
                    className="mr-2 rounded-full w-10 h-10"
                    alt="Royco Logo"
                  />{" "}
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">20</h2>
                    <p className="text-gray-400 text-xs">Pending Bookings</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex">
                  <img
                    src="/images/active_advertisers.png"
                    className="mr-2 rounded-full w-10 h-10"
                    alt="Royco Logo"
                  />{" "}
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">20</h2>
                    <p className="text-gray-400 text-xs">Active Advertisers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8 mt-6">
              <div className="bg-white w-1/3 shadow-lg rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Total Number of ads per hour
                </h2>

                <div className="grid grid-cols-8 gap-2 space-x-2">
                  <div></div>

                  <div className="text-sm text-gray-500 text-center">Sun</div>
                  <div className="text-sm text-gray-500 text-center">Mon</div>
                  <div className="text-sm text-gray-500 text-center">Tue</div>
                  <div className="text-sm text-gray-500 text-center">Wed</div>
                  <div className="text-sm text-gray-500 text-center">Thu</div>
                  <div className="text-sm text-gray-500 text-center">Fri</div>
                  <div className="text-sm text-gray-500 text-center">Sat</div>

                  <div className="text-sm text-gray-500">11AM</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

                  <div className="text-sm text-gray-500">10AM</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

                  <div className="text-sm text-gray-500">9AM</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

                  <div className="text-sm text-gray-500">8AM</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-red-600 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

                  <div className="text-sm text-gray-500">7AM</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-md"></div>
                  <div className="w-8 h-8 bg-red-700 rounded-md"></div>
                  <div className="w-8 h-8 bg-red-600 rounded-md"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

                  <div className="text-sm text-gray-500">6AM</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-red-600 rounded-md relative">
                    <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-xs font-bold">
                      50
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-pink-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

                  <div className="text-sm text-gray-500">5AM</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                </div>
              </div>
              <LineChart />
            </div>
            <div className="bg-white p-4 shadow-md rounded-md mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-md font-semibold">Recent Bookings</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <button className="bg-red-200 text-red-400 px-4 py-2 rounded-md text-sm">
                    <i className="bx bx-export text-red-400 mr-2"></i>
                    Export
                  </button>
                </div>
              </div>
              <table className="w-full p-8 rounded-full border border-gray-200 rounded-full">
                <thead>
                  <tr className="bg-red-100 text-sm">
                    <th className="px-4 text-left">
                      <p className="font-normal text-gray-800">Advertiser Name</p>
                    </th>
                    <th className="p-2 text-left">
                      <p className="font-normal text-gray-800">Slot Time</p>
                    </th>
                    <th className="p-2 text-left">
                      <p className="font-normal text-gray-800">Payment Status</p>
                    </th>
                    <th className="p-2 text-left">
                      <p className="font-normal text-gray-800">Booking Status</p>
                    </th>
                    <th className="p-2 text-left">
                      <p className="font-normal text-gray-800">Actions</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-xs">
                    <td className="p-2 flex items-center font-semibold text-sm">
                      <img
                        src="/images/royco.png"
                        className="mr-2 w-8 h-8 rounded-full"
                        alt="Royco Logo"
                      />{" "}
                      Royco
                    </td>
                    <td className="p-2">
                      <span className="rounded-full text-xs px-2 py-1 bg-red-100 text-red-400">
                        {" "}
                        6:00am - 9:00am
                      </span>
                      <span className="rounded-full text-xs px-2 py-1 bg-red-100 text-red-400">
                        {" "}
                        10:00am - 11:00am
                      </span>
                    </td>
                    <td className="p-2 text-green-500">Paid</td>
                    <td className="p-2">Confirmed</td>
                    <td className="p-2">
                      <button className="text-gray-500">
                        <i className="bx bx-show rounded-full p-2 bg-red-50"></i>
                      </button>
                      <button className="text-gray-500 ml-2">
                        <i className="bx bx-edit rounded-full p-2 bg-red-50"></i>
                      </button>
                    </td>
                  </tr>
                  <tr className="text-xs">
                    <td className="p-2 flex items-center font-semibold text-sm">
                      <img
                        src="/images/royco.png"
                        className="mr-2 w-8 h-8 rounded-full"
                        alt="Royco Logo"
                      />{" "}
                      Royco
                    </td>
                    <td className="p-2">
                      <span className="rounded-full text-xs p-2 bg-red-100 text-red-400">
                        {" "}
                        6:00am - 9:00am
                      </span>
                      <span className="rounded-full text-xs p-2 bg-red-100 text-red-400">
                        {" "}
                        10:00am - 11:00am
                      </span>
                    </td>
                    <td className="p-2 text-green-500 ">Paid</td>
                    <td className="p-2">Confirmed</td>
                    <td className="p-2">
                      <button className="text-gray-500">
                        <i className="bx bx-show rounded-full p-2 bg-red-50"></i>
                      </button>
                      <button className="text-gray-500 ml-2">
                        <i className="bx bx-edit rounded-full p-2 bg-red-50"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;
