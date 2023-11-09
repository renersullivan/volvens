import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
    data = [
      { nome: 'felipe', sobreNome: 'cabo' },
      { nome: 'rener', sobreNome: 'cabo' },
      { nome: 'gael', sobreNome: 'cabo' }
    ];
  
    displayedColumns: string[] = ['nome', 'sobreNome'];
  }
