// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-ink-900/90 backdrop-blur border-b border-ink-700 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-mono text-lg text-slate-100 hover:text-brand-secondary transition-colors flex items-center gap-2"
        >
          <span className="text-brand-secondary">~</span>
          <span>munyi</span>
          <span className="text-slate-500">--data-engineer</span>
        </Link>
        <div className="space-x-6 font-mono text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-slate-400 hover:text-brand-secondary transition-colors ${isActive ? 'text-brand-secondary' : ''}`
            }
          >
            ./work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-slate-400 hover:text-brand-secondary transition-colors ${isActive ? 'text-brand-secondary' : ''}`
            }
          >
            ./about
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
