// import { useState } from "react";
import PieChart from "./components/PieChart";
import Nav from "../../components/Nav";
// import { useParams } from "react-router-dom";
import LineChart from "./components/LineChart";

function PaymentsAndRevenue() {
  // const { name } = useParams<{ name: string }>();
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
                <span className="text-gray-600">Payment</span>
              </p>
              <h1 className="text-2xl font-bold">Payment</h1>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-between">
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Total</p>
                    <h2 className="text-xl font-bold text-red-400">
                      Kes 200000
                    </h2>
                  </div>
                  <img
                    src="/images/group-4.png"
                    className="mr-2 rounded-full w-20 h-14"
                    alt="Royco Logo"
                  />{" "}
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-between">
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Paid Payment</p>
                    <h2 className="text-xl font-bold text-red-400">
                      Kes 850000
                    </h2>
                  </div>
                  <img
                    src="/images/group-4.png"
                    className="mr-2 rounded-full w-20 h-14"
                    alt="Royco Logo"
                  />{" "}
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-between">
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Pending Payment</p>
                    <h2 className="text-xl font-bold text-red-400">320 Ads</h2>
                  </div>
                  <img
                    src="/images/group-4.png"
                    className="mr-2 rounded-full w-20 h-14"
                    alt="Royco Logo"
                  />{" "}
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-between">
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">
                      Average Booking Price
                    </p>
                    <h2 className="text-xl font-bold text-red-400">
                      Kes 135000
                    </h2>
                  </div>
                  <img
                    src="/images/group-4.png"
                    className="mr-2 rounded-full w-20 h-14"
                    alt="Royco Logo"
                  />{" "}
                </div>
              </div>
            </div>

            <div className="flex gap-8 mt-6">
              <div className="bg-white w-1/2 shadow-lg rounded-lg p-6">

                <PieChart />
              </div>
              <div className="w-1/2">
                <LineChart />
              </div>
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
                      <p className="font-normal text-gray-800">
                        Advertiser Name
                      </p>
                    </th>
                    <th className="p-2 text-left">
                      <p className="font-normal text-gray-800">Slot Time</p>
                    </th>
                    <th className="p-2 text-left">
                      <p className="font-normal text-gray-800">
                        Payment Status
                      </p>
                    </th>
                    <th className="p-2 text-left">
                      <p className="font-normal text-gray-800">
                        Booking Status
                      </p>
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

export default PaymentsAndRevenue;
