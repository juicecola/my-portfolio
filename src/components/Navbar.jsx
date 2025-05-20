// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Your Name
        </Link>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 font-semibold' : ''}`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 font-semibold' : ''}`
            }
          >
            About
          </NavLink>
          {/* Optional: Contact Link */}
          {/* <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
