import AdicionarAluno from './components/AdicionarAluno';
import ListaAlunos from './components/ListaAlunos';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-6">Sistema de Gerenciamento Escolar</h1>
      <AdicionarAluno />
      <ListaAlunos />
    </div>
  );
}
