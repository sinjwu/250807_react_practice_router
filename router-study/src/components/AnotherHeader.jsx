import { Link } from "react-router-dom";

const AnotherHeader = () => {
  return (
    <header className="bg-cyan-300 flex justify-between items-center px-20">
      <h1>AnotherHeader</h1>
      <nav className="flex gap-5">
        <Link className="bg-purple-300 px-4 py-2 rounded" to="/">
          Home
        </Link>
        <Link className="bg-yellow-300 px-4 py-2 rounded" to="/about">
          About
        </Link>
        <Link className="bg-orange-300 px-4 py-2 rounded" to="/users">
          Users
        </Link>
      </nav>
    </header>
  );
};
export default AnotherHeader;
