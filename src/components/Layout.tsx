import { Link, useLocation } from "react-router-dom";
import { Search, Moon, Sun, Hexagon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Branches', path: '/branches' },
    { label: 'Roadmaps', path: '/careers/cybersecurity-analyst' },
    { label: 'Legends', path: '/legends' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 h-14 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
        <div className="container-custom h-full flex items-center justify-between">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-medium text-lg">
            <Hexagon className="w-5 h-5 text-brand-accent fill-brand-accent/20" />
            <span>Tech Universe</span>
          </Link>
          
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`text-sm transition-all pb-1 ${isActive(link.path) ? 'text-brand-text border-b-2 border-brand-accent' : 'text-brand-muted hover:text-brand-text'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-4 text-brand-muted">
            <button className="hover:text-brand-text transition-colors p-1.5">
              <Search className="w-4.5 h-4.5" />
            </button>
            <button onClick={toggleTheme} className="hover:text-brand-text transition-colors p-1.5" aria-label="Toggle theme">
              {theme === 'dark' ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
            </button>
            <button className="md:hidden hover:text-brand-text transition-colors p-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-brand-bg border-b border-brand-border z-40 py-4 px-6 animate-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium block transition-colors ${isActive(link.path) ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export const Footer = () => (
  <footer className="py-12 border-t border-brand-border/50">
    <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2 text-sm text-brand-muted">
        <Hexagon className="w-4 h-4 text-brand-accent fill-brand-accent/10" />
        <span>Tech Universe &middot; Every technology. Explained.</span>
      </div>
      
      <div className="flex gap-8 text-sm text-brand-muted">
        <Link to="/branches" className="hover:text-brand-text transition-colors">Branches</Link>
        <Link to="/careers/cybersecurity-analyst" className="hover:text-brand-text transition-colors">Roadmaps</Link>
        <Link to="/legends" className="hover:text-brand-text transition-colors">Legends</Link>
        <Link to="/about" className="hover:text-brand-text transition-colors">About</Link>
      </div>

      <div className="text-xs text-brand-muted opacity-60">
        Built by Mandar Malkhede
      </div>
    </div>
  </footer>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
