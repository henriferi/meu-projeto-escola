'use client'


import React, { useState } from 'react';

const AdicionarAluno: React.FC = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [dataMatricula, setDataMatricula] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, dataNascimento, dataMatricula }),
    });

    if (response.ok) {
      setNome('');
      setDataNascimento('');
      setDataMatricula('');
      alert('Aluno adicionado com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-2xl mb-4">Adicionar Aluno</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="date"
        value={dataMatricula}
        onChange={(e) => setDataMatricula(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Adicionar Aluno
      </button>
    </form>
  );
};

export default AdicionarAluno;
