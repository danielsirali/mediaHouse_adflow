import { useState } from "react";
import Nav from "../../components/Nav";
// import { useParams } from "react-router-dom";

function Media() {
  // const { name } = useParams<{ name: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

  return (
    <>
      <div className="flex h-full bg-gray-100">
        <Nav />
        <main className="flex-1 w-1/2">
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
            <section className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-sm text-gray-400"> Home /</span>{" "}
                  <span className="text-gray-800 text-sm">Media</span>
                </p>
                <h2 className="text-xl mt-4 font-bold">Media</h2>
              </div>
              <button
                onClick={toggleModal}
                className="bg-red-200 text-[#F20519] mt-4 px-4 py-1 rounded-md flex text-xs items-center"
              >
                <i className="bx bx-plus text-[#F20519] mr-2"></i>
                Add Media
              </button>
            </section>

            <section className="bg-white p-2 rounded-lg">
              <div className="flex justify-between space-x-4">
                <button className="bg-red-200 text-[#F20519] px-6 text-xs py-1 w-60 rounded-md">
                  All
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 text-xs py-1 w-60 rounded-md">
                  TV
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 text-xs py-1 w-60 rounded-md">
                  Radio
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 text-xs py-1 w-60 rounded-md">
                  Newspaper
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 text-xs py-1 w-60 rounded-md">
                  Podcast
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 text-xs py-1 w-60 rounded-md">
                  Billboard
                </button>
              </div>
            </section>

            <section className="flex justify-between items-center mt-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800">All</h3>
                <h3 className="text-xs text-gray-400">View your media</h3>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 bg-gray-200 rounded-md text-sm"
                />
                <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </section>

            <section className="grid lg:grid-cols-5 md:grid-cols-4 gap-6 mt-6 bg-white p-4">
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    Radio
                  </span>
                  <h4 className="mt-4 font-semibold">Radio Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Inooro</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    Paper
                  </span>
                  <h4 className="mt-4 font-semibold">The Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Ramogi</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
              <div className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <img
                      src="/images/citizen_logo.png"
                      alt="Media Logo"
                      className="mt-1"
                    />
                  </div>
                  <span className="absolute top-6 w-12 text-center right-6 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2">
                    TV
                  </span>
                  <h4 className="mt-4 font-semibold">Citizen</h4>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur. Ornare semper urna
                  pretium dui aliquam tempor et quam. Ridiculus pharetra pretium
                  eu a tincidunt...
                </p>
                <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                  View
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
      {isModalOpen && <Modal />}
    </>
  );
}

export default Media;
