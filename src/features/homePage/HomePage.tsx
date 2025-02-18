import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import TopNav from "../../components/TopNav";
import LineChart from "./components/LineChart";
import HeatMap from "./components/HeatMap";

function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex h-full w-full bg-[#f5f1f1]">
        <Nav isNavOpen={isNavOpen} />

        <main
          className={`flex-1 transition-all duration-300 ${
            isNavOpen ? "ml-0" : "ml-0"
          }`}
        >
          <TopNav toggleNav={toggleNav} />
          <div className="p-6">
            <div className="px-2">
              <p className="text-xs">
                <span className="text-gray-400">Home /</span>{" "}
                <span className="text-gray-600">Dashboard</span>
              </p>
              <h1 className="text-3xl font-[800]">Dashboard</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex">
                  <img
                    src="/images/perfomance_ads.png"
                    className="mr-2 rounded-full w-10 h-10"
                    alt="Royco Logo"
                  />{" "}
                  <div className="ml-4">
                    <h2 className="text-2xl font-extrabold">20</h2>
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
                    <h2 className="text-2xl font-bold">40</h2>
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
                    <h2 className="text-2xl font-bold">20</h2>
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
                    <h2 className="text-2xl font-bold">56</h2>
                    <p className="text-gray-400 text-xs">Active Advertisers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-6">
              <HeatMap />
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

export default HomePage;
