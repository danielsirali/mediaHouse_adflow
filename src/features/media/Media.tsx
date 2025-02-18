import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import TopNav from "../../components/TopNav";
// import { useParams } from "react-router-dom";

function Media() {
  // const { name } = useParams<{ name: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [currentFilter, setCurrentFilter] = useState("All");
  const [mediaItems] = useState([
    {
      type: "TV",
      name: "Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "Radio",
      name: "Radio Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "Newspaper",
      name: "The Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "TV",
      name: "Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "Podcast",
      name: "Radio Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "Billboard",
      name: "The Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "TV",
      name: "Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "Podcast",
      name: "Radio Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
    {
      type: "Billboard",
      name: "The Citizen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornare semper urna pretium dui aliquam tempor et quam. Ridiculus pharetra pretium eu a tincidunt...",
      imageUrl: "/images/citizen_logo.png",
    },
  ]);
  const filteredMediaItems = mediaItems.filter((item) => {
    return currentFilter === "All" || item.type === currentFilter;
  });

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
            <option>Television</option>
            <option>Radio</option>
            <option>NewsPaper</option>
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
      <div className="flex h-screen bg-[#f5f1f1]">
        <Nav isNavOpen={isNavOpen} />
        <main className="flex-1 w-1/2">
          <TopNav toggleNav={toggleNav} />
          <div className="p-6">
            <section className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-sm text-gray-400"> Home /</span>{" "}
                  <span className="text-gray-800 text-sm">Media</span>
                </p>
                <h2 className="text-3xl mt-4 font-bold">Media</h2>
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
                {[
                  "All",
                  "TV",
                  "Radio",
                  "Newspaper",
                  "Podcast",
                  "Billboard",
                ].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setCurrentFilter(filter)}
                    className={`px-6 text-xs py-1 w-60 rounded-md ${
                      currentFilter === filter
                        ? "bg-red-200 text-[#F20519]"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
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
              {filteredMediaItems.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 cursor-pointer rounded-lg border border-gray-200 shadow-lg hover:shadow-red-100"
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`absolute top-6 w-auto text-center right-10 bg-red-50 text-red-400 text-xs px-2 py-0.5 text-sm rounded-full transform translate-x-1/2 -translate-y-1/2`}
                    >
                      {item.type}
                    </span>
                    <div className="mt-4 text-center">
                      <img
                        src={item.imageUrl}
                        alt="Media Logo"
                        className="mt-1 mx-auto"
                      />

                      <h4 className="mt-4 font-semibold">{item.name}</h4>
                      <p className="text-gray-600 text-xs mt-2 text-center">
                        {item.description}
                      </p>
                      <button className="bg-red-200 text-red-400 text-xs w-full mt-4 py-1 rounded-md">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
      {isModalOpen && <Modal />}
    </>
  );
}

export default Media;
