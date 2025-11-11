import React from 'react';
import styles from './HistoricoLetras.module.css';

interface HistoricoLetrasProps {
  letras: string[];
  letrasAcertadas: Set<string>;
}

const HistoricoLetras: React.FC<HistoricoLetrasProps> = ({ letras, letrasAcertadas }) => {
  return (
    <div className={styles.historicoLetras}>
      <p>Letras utilizadas</p>
      <div>
        {letras.map((letra, index) => (
          <span
            key={index}
            className={letrasAcertadas.has(letra) ? styles.verde : styles.amarelo}
          >
            {letra}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HistoricoLetras;