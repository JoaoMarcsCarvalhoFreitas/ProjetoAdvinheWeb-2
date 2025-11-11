import React, { useState } from 'react';
import styles from './EntradaPalpite.module.css';

interface EntradaPalpiteProps {
  adicionarLetra: (letra: string) => void;
}

const EntradaPalpite: React.FC<EntradaPalpiteProps> = ({ adicionarLetra }) => {
  const [letra, setLetra] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (letra.length === 1) {
      adicionarLetra(letra.toUpperCase());
      setLetra('');
    }
  };

  return (
    <form className={styles.entradaPalpite} onSubmit={handleSubmit}>
      <p>Palpite</p>
      <input
        type="text"
        value={letra}
        onChange={(e) => setLetra(e.target.value)}
        maxLength={1}
        placeholder="Palpite"
      />
      <button type="submit">Confirmar</button>
    </form>
  );
};

export default EntradaPalpite;