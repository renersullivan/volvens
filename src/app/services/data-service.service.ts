import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  resultadosConsulta: any[] = []; // Variável para armazenar os resultados da consulta
  private API_URL= environment.API_URL;
  
  constructor(private http: HttpClient) {}

  realizarConsulta(idVenda: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/venda/${idVenda}`) // Substitua 'URL_DA_API' pela URL real da sua API
      .pipe(
        map((resposta: any) => {
          this.resultadosConsulta = resposta; // Armazena os resultados da consulta na variável
          return resposta;
        })
      );
  }
}