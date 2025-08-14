import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Charger l'état du thème depuis localStorage
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Basculer le thème
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-zts-blue font-bold text-2xl">ZTS</span>
              <span className="ml-2 text-zts-dark dark:text-gray-200 font-medium hidden sm:block">
                Zoom Tech Solutions
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-zts-dark dark:text-gray-300 hover:text-zts-blue dark:hover:text-blue-400 font-medium transition-colors">
                Services
              </a>
              <a href="#equipements" className="text-zts-dark dark:text-gray-300 hover:text-zts-blue dark:hover:text-blue-400 font-medium transition-colors">
                Matériels
              </a>
              <a href="#formations" className="text-zts-dark dark:text-gray-300 hover:text-zts-blue dark:hover:text-blue-400 font-medium transition-colors">
                Formations
              </a>
              <a 
                href="https://wa.me/237670184922" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Contact WhatsApp
              </a>
            </div>
            
            {/* Bouton de basculement thème */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
              aria-label={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {darkMode ? (
                <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* Menu mobile */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-zts-dark dark:text-gray-300 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-zts-dark dark:text-gray-300 hover:text-zts-blue dark:hover:text-blue-400 font-medium">
              Services
            </a>
            <a href="#equipements" className="block px-3 py-2 text-zts-dark dark:text-gray-300 hover:text-zts-blue dark:hover:text-blue-400 font-medium">
              Matériels
            </a>
            <a href="#formations" className="block px-3 py-2 text-zts-dark dark:text-gray-300 hover:text-zts-blue dark:hover:text-blue-400 font-medium">
              Formations
            </a>
            <a 
              href="https://wa.me/237670184922" 
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-primary mx-3 mt-2 text-center"
            >
              Contact WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;