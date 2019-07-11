import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-child',
  templateUrl: './titulo-child.component.html',
  styleUrls: ['./titulo-child.component.scss']
})
export class TituloChildComponent implements OnInit {
  
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
