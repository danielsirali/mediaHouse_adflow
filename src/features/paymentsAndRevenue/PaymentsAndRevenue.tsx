import { useState, useEffect } from "react";
import PieChart from "./components/PieChart";
import Nav from "../../components/Nav";
// import { useParams } from "react-router-dom";
import LineChart from "./components/LineChart";
import TopNav from "../../components/TopNav";
import BarChart from "./components/BarChart";
import HorizontalChart from "./components/HorizontalChart";
import "./table.css";

function PaymentsAndRevenue() {
  // const { name } = useParams<{ name: string }>();
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
      <div className="flex h-full bg-[#f5f1f1]">
        <Nav isNavOpen={isNavOpen} />

        <main className="flex-1">
          <TopNav toggleNav={toggleNav} />
          <div className="p-6">
            <div className="px-2">
              <p className="text-xs">
                <span className="text-gray-400">Home /</span>{" "}
                <span className="text-gray-600">Payment</span>
              </p>
              <h1 className="text-3xl font-bold mt-4">Payment</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
              <div className="bg-white md:w-1/2 shadow-lg rounded-lg">
                <PieChart />
              </div>
              <div className="md:w-1/2">
                <LineChart />
              </div>
            </div>

            <div className="flex gap-8 mt-6">
              <div className="bg-white md:w-1/2 sm:w-full shadow-lg rounded-lg p-6">
                <BarChart />
              </div>
              <div className="md:w-1/2 sm:w-full">
                <HorizontalChart />
              </div>
            </div>
            <div className="bg-white p-4 rounded-md mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-md font-semibold">Recent Payments</h2>
                <button className=" text-red-500 font-bold py-2 px-4 text-sm rounded">
                  See more {" >"}
                </button>
              </div>
              <table className="w-full text-sm border border-gray-200 text-left text-gray-500">
                <thead className="text-xs text-black bg-red-100">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Advertiser Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount Paid
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date Paid
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Download Invoice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-bold text-black whitespace-nowrap"
                    >
                      Coca Cola
                    </th>
                    <td className="px-6 py-4 text-black">MQWSX1HJ</td>
                    <td className="px-6 py-4">Kes 60,000</td>
                    <td className="px-6 py-4">Jan 13, 2025</td>
                    <td className="px-6 py-4 ">
                      <img
                        src="/images/file_download.png"
                        className="w-6 h-6"
                        alt="Download Icon"
                      />
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <th
                      scope="row"
                      className="px-6 py-4 font-bold text-black whitespace-nowrap"
                    >
                      Coca Cola
                    </th>
                    <td className="px-6 py-4 text-black">MQWSX1HJ</td>
                    <td className="px-6 py-4">Kes 60,000</td>
                    <td className="px-6 py-4">Jan 13, 2025</td>
                    <td className="px-6 py-4 ">
                      <img
                        src="/images/file_download.png"
                        className="w-6 h-6"
                        alt="Download Icon"
                      />
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
