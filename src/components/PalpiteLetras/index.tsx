import React from 'react';
import styles from './PalpiteLetras.module.css';

interface PalpiteLetrasProps {
  palavra: string;
  palpite: string[];
}

const PalpiteLetras: React.FC<PalpiteLetrasProps> = ({ palavra, palpite }) => {
  return (
    <div className={styles.palpiteLetras}>
      {palpite.map((letra, index) => (
        <span
          key={index}
          className={
            letra
              ? palavra[index] === letra
                ? styles.verde
                : styles.amarelo
              : ''
          }
        >
          {letra}
        </span>
      ))}
    </div>
  );
};

export default PalpiteLetras;