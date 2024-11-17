import React from 'react';
import { useLocation } from 'react-router-dom';

function Relatorio() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const formData = {
    nome: params.get('nome'),
    cpf: params.get('cpf'),
    dataNascimento: params.get('dataNascimento'),
    estadoCivil: params.get('estadoCivil'),
    email: params.get('email'),
    endereco: params.get('endereco'),
    bairro: params.get('bairro'),
    cidade: params.get('cidade'),
    uf: params.get('uf'),
    cep: params.get('cep'),
    celular: params.get('celular'),
    login: params.get('login'),
    senha: params.get('senha')
  };

  return (
    <div>
      <h1>Relatório de Cadastro</h1>
      <ul>
        {Object.keys(formData).map((key) => (
          <li key={key}><strong>{key}:</strong> {formData[key]}</li>
        ))}
      </ul>
    </div>
  );
}

export default Relatorio;