import {Injectable} from '@angular/core';
import {Editora} from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    {codEditora: 1, nome: 'O Globo'},
    {codEditora: 2, nome: 'Cosac & Naif'},
    {codEditora: 3, nome: 'HarperCollins'},
    {codEditora: 4, nome: 'Tambaú'}

  ];

  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}
