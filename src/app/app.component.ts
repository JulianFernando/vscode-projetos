import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arroba-input';
  novoTitulo: string = "Novo Título gerado no componente Pai";
}
