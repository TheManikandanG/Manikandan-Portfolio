import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="bg-[#836FFF] dark:bg-[#211951] text-[#F0F3FF] sticky top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold text-white">
          <Link to="/" className="hover:text-[#15F5BA] transition-colors">
            Manikandan
          </Link>
        </div>

        {/* Theme Toggle and Hamburger Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-2xl hover:text-[#15F5BA] transition-all"
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl hover:text-[#15F5BA] transition-all"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Nav Links for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-[#15F5BA] transition-all">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#15F5BA] transition-all">
            About
          </Link>
          <Link to="/skills" className="hover:text-[#15F5BA] transition-all">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-[#15F5BA] transition-all">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-[#15F5BA] transition-all">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="text-2xl hover:text-[#15F5BA] transition-all"
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#836FFF] dark:bg-[#1E3A8A] text-white text-center py-4 space-y-4">
          <Link to="/" className="block p-2 hover:text-[#15F5BA] transition-all" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block p-2 hover:text-[#15F5BA] transition-all" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/skills" className="block p-2 hover:text-[#15F5BA] transition-all" onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
          <Link to="/projects" className="block p-2 hover:text-[#15F5BA] transition-all" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="block p-2 hover:text-[#15F5BA] transition-all" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
