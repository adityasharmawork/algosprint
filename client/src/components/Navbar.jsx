import { Link, useLocation } from "react-router-dom";
import { Calendar, Clock, BookmarkCheck, ShieldCheck, Home, Youtube, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Check if a route is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <header className="border-b border-border py-2">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold inline-flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            {/* <span>AlgoSprint</span> */}
            <div>
                    <h1 className='text-2xl font-bold'>Algo<span className='text-[#F83002]'>Sprint</span></h1>
              </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1 ml-64">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </span>
            </Link>
            
            <Link
              to="/upcoming"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/upcoming") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Upcoming
              </span>
            </Link>
            
            <Link
              to="/past"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/past") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Past
              </span>
            </Link>

            <Link
              to="/resources"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/resources") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                <Youtube className="h-4 w-4 mr-1" />
                Learning Resources
              </span>
            </Link>
            
            <Link
              to="/bookmarks"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/bookmarks") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                <BookmarkCheck className="h-4 w-4 mr-1" />
                Bookmarks
              </span>
            </Link>
            
            <Link
              to="/admin"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/admin") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                <ShieldCheck className="h-4 w-4 mr-1" />
                Admin
              </span>
            </Link>
          </nav>
          
          <div className="flex items-center">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              id="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 p-1.5 rounded-md text-muted-foreground hover:bg-secondary md:hidden"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar - Simple slide-in without backdrop blur */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-50 w-64 bg-card shadow-lg border-l border-border transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-border flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold inline-flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            <h1 className='text-xl font-bold'>Algo<span className='text-[#F83002]'>Sprint</span></h1>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-md text-muted-foreground hover:bg-secondary"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col space-y-1">
          <Link
            to="/"
            className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive("/") 
                ? "bg-primary/10 text-primary" 
                : "text-foreground hover:bg-secondary"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Home
            </span>
          </Link>
          
          <Link
            to="/upcoming"
            className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive("/upcoming") 
                ? "bg-primary/10 text-primary" 
                : "text-foreground hover:bg-secondary"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming
            </span>
          </Link>
          
          <Link
            to="/past"
            className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive("/past") 
                ? "bg-primary/10 text-primary" 
                : "text-foreground hover:bg-secondary"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Past
            </span>
          </Link>

          <Link
            to="/resources"
            className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive("/resources") 
                ? "bg-primary/10 text-primary" 
                : "text-foreground hover:bg-secondary"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              <Youtube className="h-5 w-5 mr-2" />
              Learning Resources
            </span>
          </Link>
          
          <Link
            to="/bookmarks"
            className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive("/bookmarks") 
                ? "bg-primary/10 text-primary" 
                : "text-foreground hover:bg-secondary"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              <BookmarkCheck className="h-5 w-5 mr-2" />
              Bookmarks
            </span>
          </Link>
          
          <Link
            to="/admin"
            className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive("/admin") 
                ? "bg-primary/10 text-primary" 
                : "text-foreground hover:bg-secondary"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2" />
              Admin
            </span>
          </Link>
        </div>
        
        <div className="p-4 border-t border-border">
          <ThemeToggle />
        </div>
      </div>
      
      {/* Clickable overlay to close menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/60 md:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
