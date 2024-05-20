import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import VagaDisponivel from './components/VagaDisponivel';
import './styles/global.css'; // Importa o arquivo CSS global


function App() {
  const [pagina, setPagina] = useState('cadastro');

  const trocarPagina = (novaPagina) => {
    setPagina(novaPagina);
  };

  return (
    <div>
      {pagina === 'cadastro' ? (
        <Cadastro trocarPagina={trocarPagina} />
      ) : (
        <VagaDisponivel trocarPagina={trocarPagina} />
      )}
    </div>
  );
}

export default App;
