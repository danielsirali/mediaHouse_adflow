import { NavLink } from "react-router-dom";
import { useState } from "react";   

interface TopNavProps {
  toggleNav: () => void;
}

function TopNav({ toggleNav }: TopNavProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Function to close the modal if clicked outside
  // const closeModal = (e) => {
  //   if (e.target.id === "modal-overlay") {
  //     setIsModalOpen(false);
  //   }
  // };

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLDivElement).id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  const UserModal = () => (
    <div
      id="modal-overlay"
      className="absolute right-0 w-40 bg-transparent bg-opacity-50"
      onClick={closeModal}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <NavLink
          to="/profile"
          className="flex items-center text-sm p-2 hover:bg-gray-100 rounded"
        >
          <i className="bx bx-user-circle text-xl mr-2"></i>
          Profile
        </NavLink>
        <NavLink
          to="/logout"
          className="flex items-center text-sm p-2 hover:bg-gray-100 rounded"
        >
          <i className="bx bx-log-out text-xl mr-2"></i>
          Log Out
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-between items-center bg-white p-4 rounded-md w-full">
        <div className="flex items-center space-x-4">
          <i className="bx bx-arrow-back text-xl"></i>
          <i
            className="bx bx-menu text-xl cursor-pointer"
            onClick={toggleNav}
          ></i>
        </div>
        <div className="flex-grow text-xs flex justify-end">
          <div className="flex items-center">
            <i className="fas fa-bell text-gray-500 text-lg"></i>
            <div className="ml-4 flex items-center">
              <img
                src="/images/icon_notification.png"
                className="w-4 h-4 ml-2 mr-4"
                alt="Notification Icon"
              />
              <div className="flex cursor-pointer" onClick={toggleModal}>
                <img
                  src="/images/dashboard_user.png"
                  className="w-10 h-10 rounded-full"
                  alt="User Profile"
                />
                <div className="ml-2 mt-1">
                  <p className="font-semibold flex items-center">Admin Admin</p>
                  <p className="text-gray-500 text-xs">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <UserModal />}
    </>
  );
}

export default TopNav;
