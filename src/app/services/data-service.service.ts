import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://138.68.232.90:3333/vendas'; // Coloque aqui a URL do seu backend

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`); // Substitua '/dados' pela rota do seu backend para obter os dados desejados
  }
}
