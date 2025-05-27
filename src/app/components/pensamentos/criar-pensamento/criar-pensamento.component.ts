import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  criarPensamento() {
    alert('Novo pensamento criado! ');
  }

  cancelarPensamento() {
    this.pensamento.conteudo = '';
    this.pensamento.autoria = '';
    alert('Pensamento cancelado. ');
  }

  constructor() {}

  ngOnInit(): void {}
}
