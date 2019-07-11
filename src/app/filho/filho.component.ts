import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() receberFamilia;

  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.receberFamilia);
    console.log('Objeto família recebido do component Pai - via @Input: ', this.receberFamilia);
    this.feedback();
  }

  feedback() {
    console.log('Resposta para o component Pai: ', this.respostaFamilia.emit({nome: 'Raphaela', sobreNome: 'Almeida Cardoso Cambraia'}) );
  }

}
