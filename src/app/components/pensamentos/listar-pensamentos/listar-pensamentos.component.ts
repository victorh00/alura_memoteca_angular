import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Girar, girar, mexer.',
      autoria: 'Singed Reflexões',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Hora do acerto de contas.',
      autoria: 'A Caçadora Noturna',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
