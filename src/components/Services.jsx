import React from 'react';
import FeatureCard from './FeatureCard';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Sites Vitrines',
      description: 'Présence en ligne professionnelle avec design responsive et référencement optimisé',
      features: ['Design moderne', 'Mobile-first', 'SEO intégré', 'Administration facile']
    },
    {
      icon: '🚀',
      title: 'Hébergement & Maintenance',
      description: 'Solutions d\'hébergement sécurisées et maintenance proactive',
      features: ['Serveurs Cameroun', 'Sauvegardes quotidiennes', 'SSL inclus', 'Support 24/7']
    },
    {
      icon: '💻',
      title: 'Matériel Informatique',
      description: 'Vente et installation d\'équipements de qualité pour votre entreprise',
      features: ['Configurations sur mesure', 'Installation professionnelle', 'Garantie étendue', 'Support technique']
    },
    {
      icon: '🎓',
      title: 'Formations Pratiques',
      description: 'Ateliers intensifs pour maîtriser les outils numériques',
      features: ['Web développement', 'Administration système', 'Bureautique avancée', 'Cybersécurité']
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services Clés</h2>
          <p className="section-subtitle">
            Des solutions complètes pour la transformation numérique de votre Entreprise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FeatureCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;