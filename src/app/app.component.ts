import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-galeria';
  listaUsuarios = [
    { id: 1, nome: 'Alexandre' },
    { id: 2, nome: 'Ana' },
    { id: 3, nome: 'Maria Inês' },
    { id: 4, nome: 'Julian Fernando' },
    { id: 5, nome: 'Frederico' },
    { id: 6, nome: 'Eduardo' },
  ]
}
