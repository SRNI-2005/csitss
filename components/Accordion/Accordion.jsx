import React, { useState } from 'react';
import styles from './Accordion.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordion = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={styles['accordion-container']}>
      <div 
        className={`${styles['accordion-header']} ${isOpen ? styles['open'] : ''}`} 
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span><ArrowDropDownIcon/></span>
      </div>
      
      <div className={isOpen ? styles['accordion-content'] : styles['hidden']}>
        <ul className={styles['accordion-list']}>
          {links && links.map((link, index) => (
            <li 
              key={index} 
              className={`${styles['accordion-item']} ${index === links.length - 1 ? styles['last-item'] : ''}`}
            >
              <a href={link.url} className={styles['accordion-link']}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;