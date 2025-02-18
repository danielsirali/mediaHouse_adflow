// import { useState } from "react";
import Nav from "../../components/Nav";
import TopNav from "../../components/TopNav";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function AuditLogs() {
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
      <div className="flex h-screen bg-[#f5f1f1]">
        <Nav isNavOpen={isNavOpen} />
        <main className="flex-1">
          <TopNav toggleNav={toggleNav} />
          <div className="p-6">
            <section className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-sm text-gray-400"> Home /</span>{" "}
                  <span className="text-gray-800 text-sm">Audit Logs</span>
                </p>
                <h2 className="text-3xl mt-4 font-bold">Audit Logs</h2>
              </div>
              <div className="flex space-x-2">
                <button className="bg-transparent border border-red-500 text-red-500 px-4 py-1 text-xs rounded-md flex items-center">
                  <i className="bx bx-export mr-2"></i>
                  Export
                </button>
                <button className="bg-red-200 text-red-500 px-4 py-1 text-xs rounded-md flex items-center">
                  <i className="bx bx-trash mr-2"></i>
                  Delete Results
                </button>
              </div>
            </section>

            <section className="bg-white p-2 rounded-lg">
              <div className="flex flex-col space-y-2 justify-start">
                <button className="text-black px-6 text-left text-xs py-1 rounded-md">
                  <span className=" text-sm">Period: </span> Oct 1, 2021 - Oct
                  31, 2021
                </button>
                <button className="text-gray-800 px-6 text-left text-xs py-1 rounded-md">
                  <span className=" text-sm">Timezone: </span> UTC+03:00
                </button>
                <button className="text-gray-800 px-6 text-left text-xs py-1 rounded-md">
                  <span className=" text-sm">Run By: </span>Alexis (Nov 1, 2021)
                </button>
              </div>
            </section>

            <div className="mt-6 px-2 ">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-md font-semibold">5 Results</h3>
                </div>

                <div className="flex space-x-2">
                  <div className="relative">
                    <select className="border border-red-500 px-3 py-1 text-xs text-red-500 rounded-md pl-10 appearance-none">
                      <option>Last 1 Month</option>
                      <option>Last 3 Months</option>
                      <option>Last 6 Months</option>
                      <option>Last 1 Year</option>
                    </select>
                    <i className="bx bx-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500"></i>
                  </div>
                  <button className="bg-red-200 text-red-500 px-4 py-1 text-xs rounded-md flex items-center">
                    <i className="bx bx-filter-alt mr-2"></i>
                    Filter
                  </button>
                </div>
              </div>

              <table className="w-full border border-gray-500 rounded-lg overflow-hidden custom-table-spacing">
                <thead>
                  <tr className="bg-red-100 text-gray-800 text-sm">
                    <th className="p-3 text-left">Audit Date and Time</th>
                    <th className="p-3 text-left">Audit Initiator</th>
                    <th className="p-3 text-left">Audit Resource</th>
                    <th className="p-3 text-left">Action</th>
                    <th className="p-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody className="text-xs space-y-4 gap-y-4">
                  <tr className="bg-gray-200 mb-4 rounded-lg">
                    <td className="p-3">Oct 24, 2021, 11:24:25 AM</td>
                    <td className="p-3">Alexis (alexisde@gmail.com)</td>
                    <td className="p-3">Users</td>
                    <td className="p-3">Login</td>
                    <td className="p-3">Action Login on resource users</td>
                  </tr>
                  <tr className="bg-gray-200 rounded-lg">
                    <td className="p-3">Oct 24, 2021, 11:24:26 AM</td>
                    <td className="p-3">Alexis (alexisde@gmail.com)</td>
                    <td className="p-3">Users</td>
                    <td className="p-3">Login</td>
                    <td className="p-3">Action Login on resource users</td>
                  </tr>
                  <tr className="bg-gray-200 rounded-lg">
                    <td className="p-3">Oct 24, 2021, 11:24:27 AM</td>
                    <td className="p-3">Alexis (alexisde@gmail.com)</td>
                    <td className="p-3">Users</td>
                    <td className="p-3">Login</td>
                    <td className="p-3">Action Login on resource users</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end text-xs items-center mt-4">
                <p>
                  Page <span className="font-semibold mr-2">1</span>
                </p>
                <select className="border border-gray-300 px-3 py-1 mr-2 rounded-md">
                  <option>1</option>
                </select>
                of 10
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AuditLogs;
