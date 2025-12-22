import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ylpLogo from "@/assets/ylp logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Law for Her", href: "/#law-for-her" },
    { label: "Student Corner", href: "/#law-student" },
    { label: "Team", href: "/#team" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href === "/") {
      // Navigate to home page
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (isHomePage && href.startsWith("/#")) {
      // On home page, just scroll to section
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and scroll to section
      navigate(href);
      setTimeout(() => {
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            {/* <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">YLA</span>
            </div> */}
            <img 
              src={ylpLogo} 
              alt="Your Legal Pal Logo" 
              className="w-20 h-20 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Your Legal Pal</h1>
              <p className="text-xs text-muted-foreground">Law. Simplified.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-sm font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 9161108822</span>
            </div> */}
            <Button
              onClick={() => handleNavClick("/#contact")}
              size="sm" className="bg-accent hover:bg-accent-dark">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2 py-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="nav-link px-4 py-2 text-sm font-medium text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2 border-t border-border mt-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 6387026454</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Mail className="w-4 h-4" />
                  <span>yourlegalpal.ylp@gmail.com</span>
                </div>
                <Button size="sm" className="w-full bg-accent hover:bg-accent-dark">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;