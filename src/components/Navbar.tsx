
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-input">
      <div className="cms-container py-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-primary px-2 py-1 rounded text-white font-bold">CMS</span>
          <span className="text-xl font-serif font-bold text-secondary-dark">Demographic Data Collection</span>
        </Link>
        
        <nav className="flex space-x-6 items-center">
          <Link 
            to="/" 
            className={`transition-standard hover:text-primary ${
              location.pathname === '/' ? 'text-primary font-semibold' : 'text-secondary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/form" 
            className={`transition-standard hover:text-primary ${
              location.pathname === '/form' ? 'text-primary font-semibold' : 'text-secondary'
            }`}
          >
            Start Form
          </Link>
          <a 
            href="https://github.com/CMSgov/design-system" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cms-button-outline py-2 text-sm"
          >
            CMS Design System
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
