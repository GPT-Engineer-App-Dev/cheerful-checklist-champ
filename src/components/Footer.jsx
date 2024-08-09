import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 text-center text-gray-600">
      <p>&copy; {currentYear} Todo App. All rights reserved.</p>
    </footer>
  );
};
