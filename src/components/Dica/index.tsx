import React from 'react';
import styles from './Dica.module.css';
import { FaLightbulb } from 'react-icons/fa';

interface DicaProps {
  dica: string;
}

const Dica: React.FC<DicaProps> = ({ dica }) => {
  return (
    <div className={styles.dica}>
      <FaLightbulb className={styles.icon} />
      <div className={styles.dicaContent}>
        <strong className={styles.dicaTitle}>Dica</strong>
        <span className={styles.dicaText}>{dica}</span>
      </div>
    </div>
  );
};

export default Dica;