import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import TopNav from "../../components/TopNav";
// import { useParams } from "react-router-dom";


function Bookings() {
  // const { name } = useParams<{ name: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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


  const Modal = () => (
    <div
      className="fixed inset-0 z-40 bg-black flex items-center justify-center bg-transparent bg-opacity-50"
      onClick={toggleModal}
    >
      <div
        className="bg-white w-[550px] rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Add Media</h2>
          <button className="text-gray-500 hover:text-black">&times;</button>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center mt-2">
            <svg
              className="w-10 h-10 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            <p className="text-sm text-gray-600">
              Drop or drag an Image or{" "}
              <span className="text-red-500 font-medium cursor-pointer">
                browse
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              File must be JPEG, JPG or PNG and up to 17MB
            </p>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Station Name
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Station Type
          </label>
          <select className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300">
            <option>Select a type</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300"
            placeholder="Enter a description..."
            rows={3}
          ></textarea>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={toggleModal}
            className="px-4 py-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-100"
          >
            Cancel
          </button>
          <button className="px-4 py-1 bg-red-300 text-white rounded-lg cursor-not-allowed">
            Add
          </button>
        </div>
      </div>
    </div>
  );

  const [currentFilter, setCurrentFilter] = useState("All");
  const [bookings] = useState([
    {
      advertiserName: "Coca Cola",
      slotTime: "Jan 10, 7:00AM",
      adDuration: "30 Sec",
      bookingStatus: "Confirmed",
      paymentStatus: "Paid",
    },
    {
      advertiserName: "Coca Cola",
      slotTime: "Jan 10, 7:00AM",
      adDuration: "30 Sec",
      bookingStatus: "Rejected",
      paymentStatus: "Unpaid",
    },
    {
      advertiserName: "Coca Cola",
      slotTime: "Jan 10, 7:00AM",
      adDuration: "30 Sec",
      bookingStatus: "Pending",
      paymentStatus: "Paid",
    },
    // Add more bookings as needed
  ]);
  const filteredBookings = bookings.filter((booking) => {
    if (currentFilter === "All") return true;
    return booking.bookingStatus === currentFilter;
  });

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
                  <span className="text-gray-800 text-sm">Bookings</span>
                </p>
                <h2 className="text-3xl mt-4 font-bold">Bookings</h2>
              </div>
            </section>

            <section className="bg-white p-2 rounded-lg">
              <div className="flex justify-between space-x-4">
                {["All", "Pending", "Confirmed", "Rejected"].map((filter) => {
                  const isActive = currentFilter === filter;
                  const bgColor = isActive ? "bg-red-200" : "bg-gray-200";
                  const textColor = isActive ? "text-red-500" : "text-gray-800";

                  return (
                    <button
                      key={filter}
                      onClick={() => setCurrentFilter(filter)}
                      className={`${bgColor} ${textColor} px-6 text-xs py-1 w-full rounded-md`}
                    >
                      {filter} Requests
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="mt-6 bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-md font-semibold">All Requests</h3>
                  <h3 className="text-xs font-semibold">
                    View all your media requests
                  </h3>
                </div>

                <div className="flex space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="border border-gray-300 px-3 py-1 rounded-md pl-10"
                    />
                    <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <button className="bg-red-200 text-red-500 px-4 py-1 text-xs rounded-md flex items-center">
                    <i className="bx bx-export mr-2"></i>
                    Export
                  </button>
                </div>
              </div>

              <table className="w-full border border-gray-500 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-red-100 text-gray-800 text-sm">
                    <th className="p-3 text-left">Advertiser Name</th>
                    <th className="p-3 text-left">Slot Time and date</th>
                    <th className="p-3 text-left">Ad Duration</th>
                    <th className="p-3 text-left">Booking Status</th>
                    <th className="p-3 text-left">Payment Status</th>
                    <th className="p-3 text-left">Actions</th>
                    <th className="p-3 text-left"></th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {filteredBookings.map((booking, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3 flex items-center space-x-2">
                        <img
                          src="/images/coca_cola.png"
                          alt="Coca Cola logo"
                          className="w-6 h-6"
                        />
                        <span>{booking.advertiserName}</span>
                      </td>
                      <td className="p-3">{booking.slotTime}</td>
                      <td className="p-3">{booking.adDuration}</td>
                      <td
                        className={`p-3 text-${
                          booking.bookingStatus === "Confirmed"
                            ? "green"
                            : booking.bookingStatus === "Rejected"
                            ? "red"
                            : "yellow"
                        }-500`}
                      >
                        {booking.bookingStatus}
                      </td>
                      <td className="p-3 text-green-500">
                        {booking.paymentStatus}
                      </td>
                      <td className="p-3">
                        <i className="bx bx-dots-vertical-rounded text-2xl cursor-pointer"></i>
                      </td>
                    </tr>
                  ))}
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
      {isModalOpen && <Modal />}
    </>
  );
}

export default Bookings;
