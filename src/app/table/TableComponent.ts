import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

results: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://138.68.232.90:3333/clientes').subscribe(
      data => {
        console.log(data); 
        this.results = data.results;
      },

    
  
    )}}
