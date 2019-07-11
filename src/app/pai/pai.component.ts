import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  familia: Object[];

  constructor() {
    this.familia = [
      {
        nome: 'Julian',
        sobreNome: 'Fernando'
      },
      {
        nome: 'Maria Inês',
        sobreNome: 'Cardoso'
      },
      {
        nome: 'Frederico',
        sobreNome: 'Cardoso Cambraia'
      }
    ];
  }

  ngOnInit() {
    console.log(this.familia);
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho) {
    console.log('Foi emitido o Evento e chegou no Pai >>>> ', respostaFilho);
    this.familia.push(respostaFilho);
  }
}
