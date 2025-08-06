import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" || path === "/blog") {
      return (
        location === "/" ||
        location === "/blog" ||
        location.startsWith("/blog/")
      );
    }
    return location === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav-header ${isScrolled ? "nav-scrolled" : ""}`}
      data-testid="navbar"
    >
      <div className="container-wide">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="nav-logo" data-testid="logo-link">
            <img
              src="/beaverly-logo.png"
              alt="Beaverly - AI Trading & Forex Automation"
              className="h-8 w-auto"
            />
            <span className="ml-2">
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
            <a
              href="https://beaverlyai.com#about"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              data-testid="nav-about"
              onClick={() => trackEvent("click", "navigation", "about_section")}
            >
              About
            </a>
            <a
              href="https://beaverlyai.com#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              data-testid="nav-contact"
              onClick={() =>
                trackEvent("click", "navigation", "contact_section")
              }
            >
              Contact
            </a>
            <a
              href="https://app.beaverlyai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              data-testid="start-chilling-link"
              onClick={() =>
                trackEvent("click", "navigation", "start_chilling")
              }
            >
              Start Chilling Now
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
            <a
              href="https://beaverlyai.com#about"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-nav-about"
            >
              About
            </a>
            <a
              href="https://beaverlyai.com#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-nav-contact"
            >
              Contact
            </a>
            <a
              href="https://app.beaverlyai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-start-chilling-link"
            >
              Start Chilling Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
