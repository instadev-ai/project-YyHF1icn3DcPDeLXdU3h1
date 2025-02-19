import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Home
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Blog
              </Link>
              <Button variant="default" className="bg-teal-500 hover:bg-teal-600">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;