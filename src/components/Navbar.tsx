
import { useState, useEffect } from "react";
import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 py-2",
      isScrolled ? "bg-netflix-black" : "bg-gradient-to-b from-netflix-black/80 to-transparent"
    )}>
      <div className="netflix-container flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-10">
          {/* Netflix Logo */}
          <h1 className="text-netflix-red font-bold text-2xl lg:text-4xl cursor-pointer">NETFLIX</h1>
          
          {/* Nav Links - Hidden on mobile */}
          <ul className="hidden md:flex space-x-6">
            <li className="text-sm font-light cursor-pointer transition hover:text-gray-300">Home</li>
            <li className="text-sm font-light cursor-pointer transition hover:text-gray-300">TV Shows</li>
            <li className="text-sm font-light cursor-pointer transition hover:text-gray-300">Movies</li>
            <li className="text-sm font-light cursor-pointer transition hover:text-gray-300">New & Popular</li>
            <li className="text-sm font-light cursor-pointer transition hover:text-gray-300">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <div className="flex items-center">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="text-netflix-white hover:text-gray-300"
              >
                <Search size={20} />
              </button>
              {showSearch && (
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className="ml-2 bg-netflix-black/80 border border-netflix-gray text-white px-2 py-1 text-sm rounded focus:outline-none"
                  autoFocus
                />
              )}
            </div>
          </div>

          {/* Notifications */}
          <button className="text-netflix-white hover:text-gray-300">
            <Bell size={20} />
          </button>

          {/* Profile */}
          <div className="cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
              alt="Profile"
              className="rounded w-6 h-6 object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
