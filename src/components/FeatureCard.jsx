import React from 'react';

const FeatureCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 border border-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-zts-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureCard;