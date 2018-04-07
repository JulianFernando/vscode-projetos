import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoService } from './curso.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  declarations: [
    CursosComponent, 
    CursoDetalheComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
