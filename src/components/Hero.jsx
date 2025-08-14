import React, { useState, useEffect } from 'react';
import TechBadge from './TechBadge';

const Hero = () => {
  const techStack = ['React', 'Django', 'CakePHP', 'PostgreSQL', 'TailwindCSS', 'Firebase'];
  
  // Les différentes sections à afficher en rotation
  const sections = [
    {
      content: (
        <h1 className="text-4xl md:text-5xl font-extrabold text-zts-dark dark:text-white mb-4 animate-fadeIn">
          Digitalisation des <span className="text-zts-blue">PME</span> au Cameroun
        </h1>
      )
    },
    {
      content: (
        <div className="animate-fadeIn">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Solutions web sur mesure, hébergement professionnel et support technique pour transformer votre entreprise
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} darkMode={false} />
            ))}
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn">
          <a 
            href="#contact" 
            className="btn-primary inline-block"
          >
            Demander un devis
          </a>
          <a 
            href="#services" 
            className="inline-block bg-white dark:bg-gray-800 text-zts-blue border border-zts-blue font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:bg-zts-blue hover:text-white dark:hover:bg-blue-700"
          >
            Voir nos services
          </a>
        </div>
      )
    }
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Après un court délai pour l'animation, passer à la section suivante
      setTimeout(() => {
        setCurrentSection((prev) => (prev + 1) % sections.length);
        setIsAnimating(false);
      }, 300);
      
    }, 5000); // Changement toutes les 5 secondes

    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16 relative overflow-hidden">
      {/* Fond sombre avec effet de particules */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/10 to-indigo-900/20 dark:from-gray-900/70 dark:to-gray-800/80">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
        
        {/* Effet de particules */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-300/20 dark:bg-blue-400/20"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center min-h-[400px] flex flex-col items-center justify-center">
          {/* Section actuelle avec animation */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {sections[currentSection].content}
          </div>
          
          {/* Indicateurs de progression */}
          <div className="flex justify-center mt-12 space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentSection(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSection === index 
                    ? 'bg-zts-blue w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Aller à l'étape ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Ajout des animations CSS dans le style */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;