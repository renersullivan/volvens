import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/interfaces/clientes.interface';
import { MetaData } from 'src/app/interfaces/page.interface';

 

 interface Clientes{ 
    meta: MetaData
    data: Cliente[]
 
 }

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

results!: Cliente[];
metaData!: MetaData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Clientes>('http://138.68.232.90:3333/clientes').subscribe(
      result => {
        console.log(result); 
        this.results = result.data;
        this.metaData = result.meta

        
      },

    
  
    )}}
