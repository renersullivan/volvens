import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  resultadosConsulta: any[] = []; // Variável para armazenar os resultados da consulta

  constructor(private http: HttpClient) {}

  realizarConsulta(): Observable<any> {
    return this.http.get<any>('http://138.68.232.90:3333/vendas') // Substitua 'URL_DA_API' pela URL real da sua API
      .pipe(
        map((resposta: any) => {
          this.resultadosConsulta = resposta; // Armazena os resultados da consulta na variável
          return resposta;
        })
      );
  }
}