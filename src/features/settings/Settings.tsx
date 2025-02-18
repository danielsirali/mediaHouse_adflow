import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import TopNav from "../../components/TopNav";

function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

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
    <div className="flex h-screen bg-[#f5f1f1]">
      <Nav isNavOpen={isNavOpen} />
      <main className="flex-1">
        <TopNav toggleNav={toggleNav} />
        <div className="p-6">
          <section className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-500">
                <span className="text-sm text-gray-400"> Home /</span>{" "}
                <span className="text-gray-800 text-sm">Settings</span>
              </p>
              <h2 className="text-3xl mt-4 font-[800]">Settings</h2>
            </div>
          </section>

          <div className="">
            <div className="flex">
              <div className="w-1/6 bg-transparent py-4 rounded-lg">
                <ul className="text-sm border-l border-red-200">
                  <li
                    className={`cursor-pointer py-2 px-4 border-l-4 ${
                      activeTab === "general"
                        ? "border-red-500 text-red-500 font-semibold"
                        : "border-transparent hover:text-red-500 hover:border-red-500"
                    }`}
                    onClick={() => changeTab("general")}
                  >
                    General Settings
                  </li>
                  <li
                    className={`cursor-pointer py-2 px-4 border-l-4 ${
                      activeTab === "roles"
                        ? "border-red-500 text-red-500 font-semibold"
                        : "border-transparent hover:text-red-500 hover:border-red-500"
                    }`}
                    onClick={() => changeTab("roles")}
                  >
                    User Roles
                  </li>
                  <li
                    className={`cursor-pointer py-2 px-4 border-l-4 ${
                      activeTab === "payment"
                        ? "border-red-500 text-red-500 font-semibold"
                        : "border-transparent hover:text-red-500 hover:border-red-500"
                    }`}
                    onClick={() => changeTab("payment")}
                  >
                    Payment
                  </li>
                  <li
                    className={`cursor-pointer py-2 px-4 border-l-4 ${
                      activeTab === "account"
                        ? "border-red-500 text-red-500 font-semibold"
                        : "border-transparent hover:text-red-500 hover:border-red-500"
                    }`}
                    onClick={() => changeTab("account")}
                  >
                    Account
                  </li>
                </ul>
              </div>

              <div className="w-5/6 p-6">
                <div
                  id="general"
                  className={`tab-content ${
                    activeTab === "general" ? "" : "hidden"
                  }`}
                >
                  <h2 className="text-xl font-bold">General Settings</h2>
                  <p className="text-gray-500 text-sm mb-4">
                    View and Edit General Settings
                  </p>
                  <div className="grid grid-cols-2 p-6 text-sm  gap-4 bg-white rounded-lg">
                    <div>
                      <label className="block mb-1">Media House Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Physical Address</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Telephone</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Country</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">City</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Location</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Currency</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 p-2 rounded text-black"
                      />
                    </div>
                    <button className="mt-4 bg-red-200 justify-end w-40 text-sm text-red-500 px-4 py-2 rounded-lg">
                      Save Changes
                    </button>
                  </div>
                </div>

                <div
                  id="roles"
                  className={`tab-content ${
                    activeTab === "roles" ? "" : "hidden"
                  }`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-xl font-bold">User Roles</h2>
                      <p className="text-gray-500 text-sm mb-4">
                        Manage User Roles
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-red-200 text-red-500 px-4 py-1 h-8 text-xs rounded-md flex items-center">
                        <i className="bx bx-plus mr-2"></i>
                        Add Role
                      </button>
                    </div>
                  </div>

                  <div className=" mx-auto bg-white p-6 rounded-lg">
                    <div className="overflow-x-auto">
                      <table className="min-w-full border text-sm border-gray-300">
                        <thead>
                          <tr className="bg-red-100 text-left text-gray-700">
                            <th className="py-3 px-4 border-b border-gray-300">
                              Name
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300">
                              Role
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300">
                              Role Description
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300">
                              Created By
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600">
                          <tr className="bg-white">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                          <tr className="bg-gray-100">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                          <tr className="bg-gray-100">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                          <tr className="bg-gray-100">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                          <tr className="bg-gray-100">
                            <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                              Alexis Musyoki
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              Project Manger
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              -
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300">
                              System
                            </td>
                            <td className="py-3 px-4 border-b border-gray-300 text-center">
                              <i className="fas fa-edit cursor-pointer text-gray-600 hover:text-gray-800"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div
                  id="payment"
                  className={`tab-content ${
                    activeTab === "payment" ? "" : "hidden"
                  }`}
                >
                  <h2 className="text-xl font-bold">Payment</h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Manage Payment Settings
                  </p>
                  <p className="text-sm">
                    Here you can update your payment details and billing
                    information.
                  </p>
                </div>

                <div
                  id="account"
                  className={`tab-content ${
                    activeTab === "account" ? "" : "hidden"
                  }`}
                >
                  <h2 className="text-xl font-bold">Account</h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Manage Account Settings
                  </p>
                  <p className="text-sm">
                    Here you can update your personal account details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
