import React, { useState } from 'react';

function VagaDisponivel({ trocarPagina }) {
  // Dados de exemplo para simular vagas ocupadas e vagas disponíveis
  const [vagas, setVagas] = useState([
    { placa: 'ABC1234', nomeProprietario: 'João', numeroApartamento: '101', blocoApartamento: 'A', modeloVeiculo: 'Toyota', corVeiculo: 'Preto', numeroVaga: '1', ocupada: true },
    { placa: '', nomeProprietario: '', numeroApartamento: '', blocoApartamento: '', modeloVeiculo: '', corVeiculo: '', numeroVaga: '2', ocupada: false },
    { placa: '', nomeProprietario: '', numeroApartamento: '', blocoApartamento: '', modeloVeiculo: '', corVeiculo: '', numeroVaga: '5', ocupada: false },
    { placa: 'XYZ5678', nomeProprietario: 'Maria', numeroApartamento: '203', blocoApartamento: 'B', modeloVeiculo: 'Honda', corVeiculo: 'Azul', numeroVaga: '3', ocupada: true },
    { placa: 'ABC1234', nomeProprietario: 'João', numeroApartamento: '101', blocoApartamento: 'A', modeloVeiculo: 'Toyota', corVeiculo: 'Preto', numeroVaga: '12', ocupada: true },
    { placa: '', nomeProprietario: '', numeroApartamento: '', blocoApartamento: '', modeloVeiculo: '', corVeiculo: '', numeroVaga: '61', ocupada: false },
    { placa: '', nomeProprietario: '', numeroApartamento: '', blocoApartamento: '', modeloVeiculo: '', corVeiculo: '', numeroVaga: '72', ocupada: false },
    { placa: 'XYZ5678', nomeProprietario: 'Maria', numeroApartamento: '203', blocoApartamento: 'B', modeloVeiculo: 'Honda', corVeiculo: 'Azul', numeroVaga: '42', ocupada: true },
    { placa: 'ABC1234', nomeProprietario: 'João', numeroApartamento: '101', blocoApartamento: 'A', modeloVeiculo: 'Toyota', corVeiculo: 'Preto', numeroVaga: '11', ocupada: true },
    { placa: '', nomeProprietario: '', numeroApartamento: '', blocoApartamento: '', modeloVeiculo: '', corVeiculo: '', numeroVaga: '8', ocupada: false },
    { placa: '', nomeProprietario: '', numeroApartamento: '', blocoApartamento: '', modeloVeiculo: '', corVeiculo: '', numeroVaga: '9', ocupada: false },
    { placa: 'XYZ5678', nomeProprietario: 'Maria', numeroApartamento: '203', blocoApartamento: 'B', modeloVeiculo: 'Honda', corVeiculo: 'Azul', numeroVaga: '4', ocupada: true },
  ]);

  const excluirVaga = (index) => {
    const novasVagas = vagas.filter((_, i) => i !== index);
    setVagas(novasVagas);
  };

  return (
    <div>
      <h1>Vaga Disponível</h1>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Nome do Proprietário</th>
            <th>Número do Apartamento</th>
            <th>Bloco do Apartamento</th>
            <th>Modelo do Veículo</th>
            <th>Cor do Veículo</th>
            <th>Número da Vaga</th>
            <th>Está Ocupada?</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vagas.map((vaga, index) => (
            <tr key={index}>
              <td>{vaga.placa}</td>
              <td>{vaga.nomeProprietario}</td>
              <td>{vaga.numeroApartamento}</td>
              <td>{vaga.blocoApartamento}</td>
              <td>{vaga.modeloVeiculo}</td>
              <td>{vaga.corVeiculo}</td>
              <td>{vaga.numeroVaga}</td>
              <td>{vaga.ocupada ? 'Sim' : 'Não'}</td>
              <td>
                <button onClick={() => excluirVaga(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => trocarPagina('cadastro')}>Voltar para Cadastro</button>
    </div>
  );
}

export default VagaDisponivel;
