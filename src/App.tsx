import React, { useState, useEffect } from 'react';
import Cabecalho from './components/Cabecalho';
import Dica from './components/Dica';
import PalpiteLetras from './components/PalpiteLetras';
import EntradaPalpite from './components/EntradaPalpite';
import HistoricoLetras from './components/HistoricoLetras';
import BotaoReiniciar from './components/BotaoReiniciar';
import { WORDS } from './utils/words';
import './app.css';
import './global.css';

const App: React.FC = () => {
  const [palavraSorteada, setPalavraSorteada] = useState<string>('');
  const [dica, setDica] = useState<string>('');
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [tentativas, setTentativas] = useState<number>(10); // 10 tentativas conforme documento
  const [palpiteAtual, setPalpiteAtual] = useState<string[]>([]);
  const [letrasAcertadas, setLetrasAcertadas] = useState<Set<string>>(new Set());

  useEffect(() => {
    const sorteio = WORDS[Math.floor(Math.random() * WORDS.length)];
    setPalavraSorteada(sorteio.word.toUpperCase());
    setDica(sorteio.tip);
    setPalpiteAtual(Array(sorteio.word.length).fill(''));
  }, []);

  const adicionarLetra = (letra: string) => {
    if (letrasUsadas.includes(letra) || tentativas <= 0) return;
    setLetrasUsadas([...letrasUsadas, letra]);
    const novaPalpite = [...palpiteAtual];
    let acertou = false;
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (palavraSorteada[i] === letra) {
        novaPalpite[i] = letra;
        acertou = true;
      }
    }
    setPalpiteAtual(novaPalpite);
    if (!acertou) setTentativas(tentativas - 1);
    if (acertou) setLetrasAcertadas(new Set([...letrasAcertadas, letra]));
  };

  const reiniciarJogo = () => {
    const sorteio = WORDS[Math.floor(Math.random() * WORDS.length)];
    setPalavraSorteada(sorteio.word.toUpperCase());
    setDica(sorteio.tip);
    setLetrasUsadas([]);
    setTentativas(10); // Reinicia com 10 tentativas
    setPalpiteAtual(Array(sorteio.word.length).fill(''));
    setLetrasAcertadas(new Set());
  };

  return (
    <div className="app">
      <Cabecalho tentativas={tentativas} reiniciar={reiniciarJogo} />
      <Dica dica={dica} />
      <PalpiteLetras palavra={palavraSorteada} palpite={palpiteAtual} />
      <EntradaPalpite adicionarLetra={adicionarLetra} />
      <HistoricoLetras letras={letrasUsadas} letrasAcertadas={letrasAcertadas} />
    </div>
  );
};

export default App;