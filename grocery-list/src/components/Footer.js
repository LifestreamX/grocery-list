import React from 'react';
import '../index.css';

const Footer = ({items}) => {
  return (
    <footer>
      <p className='footer-text'>Grocery List Total: {items.length}</p>
    </footer>
  );
};

export default Footer;
