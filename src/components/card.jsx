import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`px-6 pb-6 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`px-6 pb-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

// Export all components
export { Card, CardHeader, CardContent, CardFooter };

// Example usage with default export
export default Card;