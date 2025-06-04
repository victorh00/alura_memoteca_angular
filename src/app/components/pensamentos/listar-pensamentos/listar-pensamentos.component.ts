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
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate tempus nibh, in luctus nunc egestas id. Curabitur luctus dictum mi, sed commodo odio faucibus a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla purus sem, vestibulum ac risus ac, pretium blandit urna. Pellentesque vitae elementum lectus. Mauris viverra, risus at gravida feugiat, dui est scelerisque ante, pretium vulputate ipsum nibh sed felis. Aliquam ligula lorem, sagittis sed arcu a, tincidunt fringilla lacus. Mauris ultricies massa eget augue lobortis finibus. Fusce auctor sodales ultricies. Etiam ac bibendum neque. Vivamus convallis tempor est, nec fringilla sapien scelerisque quis. Duis lectus mi, mollis ut odio ac, lacinia vestibulum augue. Quisque blandit lobortis nunc, a volutpat nisl iaculis ut. Mauris quis mi viverra, ultricies leo et, tincidunt erat. Morbi semper pretium dolor vitae consectetur. Donec at molestie urna, ac auctor ligula.',
      autoria: 'Lorena Y',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
