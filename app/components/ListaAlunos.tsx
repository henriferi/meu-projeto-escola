'use client'

import React, { useEffect, useState } from 'react';

const ListaAlunos: React.FC = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      const response = await fetch('/api/alunos');
      const data = await response.json();
      setAlunos(data);
    };
    fetchAlunos();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno: { id: number; nome: string; dataNascimento: string }) => (
          <li key={aluno.id} className="border p-2 mb-2">
            {aluno.nome} - {new Date(aluno.dataNascimento).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAlunos;
