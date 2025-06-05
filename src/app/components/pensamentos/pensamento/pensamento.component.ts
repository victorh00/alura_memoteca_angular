/**
 * @component PensamentoComponent
 * @description
 * Componente que representa cada card individual de pensamento.
 * Também responsável por armazenar os pensamentos criados.
 *
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

import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'dumbComponent',
    autoria: 'dumbComponent',
    modelo: 'dumbComponent',
  };

  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
