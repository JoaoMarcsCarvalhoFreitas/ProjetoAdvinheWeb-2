import React from 'react';
import styles from './BotaoReiniciar.module.css';

interface BotaoReiniciarProps {
  reiniciar: () => void;
}

const BotaoReiniciar: React.FC<BotaoReiniciarProps> = ({ reiniciar }) => {
  return (
    <div className={styles.botaoReiniciar}>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default BotaoReiniciar;