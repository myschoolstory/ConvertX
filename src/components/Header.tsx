import React from 'react';
import { FileImage } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <FileImage className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-900">ConvertX</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/')}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/about')}`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};