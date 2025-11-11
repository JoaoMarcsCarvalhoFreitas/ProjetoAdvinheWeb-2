import React from 'react';
import styles from './Cabecalho.module.css';
import { FiRefreshCcw } from 'react-icons/fi';
import logo from '../../assets/logo.png';

interface CabecalhoProps {
  tentativas: number;
  reiniciar: () => void;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ tentativas, reiniciar }) => {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.tentativasContainer}>
        <span className={styles.tentativas}><strong>{tentativas}</strong> de 10 tentativas</span>
        <FiRefreshCcw className={styles.refresh} onClick={reiniciar} />
      </div>
    </header>
  );
};

export default Cabecalho;