import React, { useState } from 'react';

function Cadastro({ trocarPagina }) {
  const [placa, setPlaca] = useState('');
  const [nomeProprietario, setNomeProprietario] = useState('');
  const [numeroApartamento, setNumeroApartamento] = useState('');
  const [blocoApartamento, setBlocoApartamento] = useState('');
  const [modeloVeiculo, setModeloVeiculo] = useState('');
  const [corVeiculo, setCorVeiculo] = useState('');
  const [numeroVaga, setNumeroVaga] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados, como enviar para um servidor, etc.
    console.log({
      placa,
      nomeProprietario,
      numeroApartamento,
      blocoApartamento,
      modeloVeiculo,
      corVeiculo,
      numeroVaga
    });
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Placa do veículo:
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </label>
        <label>
          Nome do proprietário:
          <input type="text" value={nomeProprietario} onChange={(e) => setNomeProprietario(e.target.value)} />
        </label>
        <label>
          Número do apartamento:
          <input type="text" value={numeroApartamento} onChange={(e) => setNumeroApartamento(e.target.value)} />
        </label>
        <label>
          Bloco do apartamento:
          <input type="text" value={blocoApartamento} onChange={(e) => setBlocoApartamento(e.target.value)} />
        </label>
        <label>
          Modelo do veículo:
          <input type="text" value={modeloVeiculo} onChange={(e) => setModeloVeiculo(e.target.value)} />
        </label>
        <label>
          Cor do veículo:
          <input type="text" value={corVeiculo} onChange={(e) => setCorVeiculo(e.target.value)} />
        </label>
        <label>
          Número da vaga de estacionamento:
          <input type="text" value={numeroVaga} onChange={(e) => setNumeroVaga(e.target.value)} />
        </label>
        <button type="submit">Salvar</button>
      </form>
      <button onClick={() => trocarPagina('vaga')}>Ir para Vaga Disponível</button>
    </div>
  );
}

export default Cadastro;
