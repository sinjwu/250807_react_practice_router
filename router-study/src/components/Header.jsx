import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-200 flex justify-between items-center px-20">
      <h1>logo</h1>
      <nav className="flex gap-4">
        <Link className="bg-teal-300 px-4 py-2 rounded" to="/">
          Home
        </Link>
        <Link className="bg-blue-300 px-4 py-2 rounded" to="/about">
          About
        </Link>
        <Link className="bg-amber-300 px-4 py-2 rounded" to="/users">
          Users
        </Link>
      </nav>
    </header>
  );
};
export default Header;
