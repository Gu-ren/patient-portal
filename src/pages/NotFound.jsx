import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4p">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col items-center justify-center mb-8">
          <img
          src={logo}
          alt="Clinic Logo"
          className="flex place-center my-4"
        />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 text-center">
              <span className="text-[#00F0D0]">404</span> Page Not Found
            </h1>
            <p className="text-gray-600 text-center text-xs  ">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center  py-3 px-4 rounded-lg bg-[#00F0D0]   transition-all duration-200"
          >
            <span className=""> Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
