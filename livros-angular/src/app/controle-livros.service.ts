import {Injectable} from '@angular/core';
import {Livro} from './livro'; 

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {codigo: 1, codEditora: 1, titulo: 'O Caso dos 10 Negrinhos', resumo: '“O Caso dos Dez Negrinhos” é um suspense de Agatha Christie. Dez estranhos são convidados para uma ilha e acusados de crimes. Um a um, eles são assassinados, seguindo um poema infantil.', autores: ['Agatha Chris']},
    {codigo: 2, codEditora: 2, titulo: 'Moby Dick', resumo: 'De Herman Melville, é uma obra épica que narra a viagem do navio baleeiro Pequod e a busca obsessiva de seu capitão, Ahab, pela baleia branca Moby Dick.', autores: ['Herman Melville']},
    {codigo: 3, codEditora: 3, titulo: 'O Pequeno Principe', resumo: 'É uma obra literária de Antoine de Saint-Exupéry. Conta a história de um piloto que encontra um príncipe de um asteroide, B 6121. A obra aborda temas como amor, amizade e sabedoria infantil.', autores: ['Antoine de Saint-Exupéry']},
    {codigo: 4, codEditora: 4, titulo: 'Doce Feito Mel', resumo: 'Conta uma história divertida sobre um estudante que, quando questionado sobre palavras doces e bonitas, responde com ‘goiabada’, surpreendendo a todos com sua originalidade.', autores: ['Zibombrete']}
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.obterProximoCodigo();
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

    obterProximoCodigo(): number {
    const codigos = this.livros.map(livro => livro.codigo);
    const maiorCodigo = Math.max(...codigos);
    return maiorCodigo + 1;
  }
}
