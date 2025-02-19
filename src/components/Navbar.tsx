import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="border-b bg-white fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-xl font-bold text-gray-800">
              Portfolio
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  to="/" 
                  className={`px-3 py-2 ${
                    isActive('/') 
                      ? 'text-teal-600 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  to="/blog" 
                  className={`px-3 py-2 ${
                    isActive('/blog') 
                      ? 'text-teal-600 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="default" className="bg-teal-500 hover:bg-teal-600">
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;