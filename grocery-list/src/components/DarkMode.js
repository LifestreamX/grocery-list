import React from 'react';

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className='dark-mode-toggle-button'>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode;
