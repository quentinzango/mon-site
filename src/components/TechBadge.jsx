import React from 'react';

const TechBadge = ({ tech }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-zts-dark border border-gray-200 shadow-sm">
      {tech}
    </span>
  );
};

export default TechBadge;