/*import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      Home
      <Link className="bg-blue-300 px-4 py-2 rounded" to="/about">
        About 페이지로 이동
      </Link>
      <a className="bg-pink-200 px-4 py-2 rounded" href="/about">
        About 페이지로 이동(A)
      </a>
    </div>
  );
};
export default Home; */

/*import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      Home
      <Link className="bg-teal-100 px-4 py-2 rounded" to="/about?isHome=true">
        About
      </Link>
    </div>
  );
};
export default Home; */

import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { user } = useOutletContext();
  return (
    <div className="bg-cyan-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      Home
      {user && <p>Hello, {user}.</p>}
    </div>
  );
};

export default Home;
