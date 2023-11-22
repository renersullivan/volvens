import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/interfaces/clientes.interface';
import { MetaData } from 'src/app/interfaces/page.interface';

 

 interface Clientes{ 
    meta: MetaData
    data: Cliente[]
 
 }

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

results!: Cliente[];
metaData!: MetaData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Clientes>('http://localhost:3333/clientes?page=1&limit=10&orderBy=cidade').subscribe(
      result => {
        console.log(result); 
        this.results = result.data;
        this.metaData = result.meta
      },

    
  
    )}
  }
