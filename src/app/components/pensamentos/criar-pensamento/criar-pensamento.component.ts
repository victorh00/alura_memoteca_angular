/**
 * @component CriarPensamentoComponent
 * @description
 * Componente responsável pelo formulário de criação de pensamento.
 * @#todo
 * @example
 * <app-nome-do-componente [input]="valor"></app-nome-do-componente>
 *
 * @inputs
 * - input1: Tipo - Descrição do input
 * - input2: Tipo - Descrição do input
 *
 * @outputs
 * - output1: EventEmitter<Tipo> - Descrição do evento emitido
 *
 * @usage
 * Este componente é usado para [explicação do uso].
 *
 * @author Seu Nome
 * @date 2025-05-30
 */

import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarPensamento() {
    alert(`Novo pensamento criado usando o ${this.pensamento.modelo}`);
  }

  cancelarPensamento() {
    this.pensamento.conteudo = '';
    this.pensamento.autoria = '';
    this.pensamento.modelo = '';
    alert('Pensamento cancelado. Retorne ao ócio! ');
  }

  constructor() {}

  ngOnInit(): void {}
}
