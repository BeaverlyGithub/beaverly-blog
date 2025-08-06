import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" || path === "/blog") {
      return location === "/" || location === "/blog" || location.startsWith("/blog/");
    }
    return location === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-header ${isScrolled ? 'nav-scrolled' : ''}`} data-testid="navbar">
      <div className="container-wide">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="nav-logo" data-testid="logo-link">
            <img 
              src="/beaverly-logo-light.png" 
              alt="Beaverly" 
              className="w-8 h-8"
            />
            <span>
              Beaverly<span className="text-sm opacity-75">®</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-menu hidden-mobile">
            <Link 
              href="/blog" 
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
              data-testid="nav-blog"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              data-testid="nav-about"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
            <a 
              href="https://beaverlyai.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              data-testid="main-site-link"
            >
              Main Site
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button hidden-desktop"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu hidden-desktop" data-testid="mobile-menu">
            <Link 
              href="/blog" 
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-nav-blog"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-nav-about"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-nav-contact"
            >
              Contact
            </Link>
            <a 
              href="https://beaverlyai.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              data-testid="mobile-main-site-link"
            >
              Main Site
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
