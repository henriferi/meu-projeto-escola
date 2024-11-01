import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Método GET para obter todos os alunos
export async function GET() {
  const alunos = await prisma.aluno.findMany();
  return NextResponse.json(alunos);
}

// Método POST para adicionar um novo aluno
export async function POST(request: Request) {
  const { nome, dataNascimento, dataMatricula } = await request.json();

  const novoAluno = await prisma.aluno.create({
    data: {
      nome,
      dataNascimento: new Date(dataNascimento),
      dataMatricula: new Date(dataMatricula),
    },
  });

  return NextResponse.json(novoAluno, { status: 201 });
}
