import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" || path === "/blog") {
      return location === "/" || location === "/blog" || location.startsWith("/blog/");
    }
    return location === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gray-700" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-white">
              Beaverly<span className="text-sm">®</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/blog" 
              className={`font-medium transition-colors duration-300 ${
                isActive("/blog") ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              data-testid="nav-blog"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors duration-300 ${
                isActive("/about") ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              data-testid="nav-about"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors duration-300 ${
                isActive("/contact") ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
            <a 
              href="https://beaverlyai.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
              data-testid="main-site-link"
            >
              Main Site
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/blog" 
                className={`font-medium transition-colors duration-300 ${
                  isActive("/blog") ? "text-white" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-nav-blog"
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className={`font-medium transition-colors duration-300 ${
                  isActive("/about") ? "text-white" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-nav-about"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition-colors duration-300 ${
                  isActive("/contact") ? "text-white" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-nav-contact"
              >
                Contact
              </Link>
              <a 
                href="https://beaverlyai.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 inline-block text-center"
                data-testid="mobile-main-site-link"
              >
                Main Site
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
