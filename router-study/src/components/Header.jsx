import { Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
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
      {user ? (
        <button onClick={() => setUser("")}>Hello, {user}</button>
      ) : (
        <button onClick={() => setUser("sinjwu")}>Login</button>
      )}
    </header>
  );
};
export default Header;
