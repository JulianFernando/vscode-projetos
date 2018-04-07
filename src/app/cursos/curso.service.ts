import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor() { }

  getCursos() {
    return  ['Java', 'PHP', 'Ext JS', 'Angular'];
  }
}
