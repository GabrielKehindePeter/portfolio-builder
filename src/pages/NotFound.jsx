import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-2xl mt-4 font-semibold">Page Not Found</h2>
      <p className="text-gray-500 mt-2 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;