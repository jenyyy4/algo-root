import { useAuth } from "../App";
import { auth } from "../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
    localStorage.removeItem("user");
  };

  const deleteUserAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await auth.currentUser.delete();
        setUser(null);
        localStorage.removeItem("user");
      } catch (error) {
        alert("Error deleting account: " + error.message);
      }
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/dashboard" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-800">Algo Root</h1>
      </Link>

      <div className="relative">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
          <span className="text-gray-700">{user?.email}</span>
          <img
            src="avatar.png"
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Logout
            </button>
            <button
              onClick={deleteUserAccount}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Delete Account
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
