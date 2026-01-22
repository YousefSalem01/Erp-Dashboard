import React from 'react';

interface NotFoundProps {
  // Add props here
}

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};
