import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/interfaces/clientes.interface';
import { MetaData } from 'src/app/interfaces/page.interface';



interface Clientes {
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

  page: number = 1;
  itemPerPage: string = '10';
  filter?: string = 'cidade'

  constructor(private http: HttpClient) { }

  city: string = '';

  ngOnInit(): void {
    this.requestPage()
  }

  public onChange(param: any) {
   this.itemPerPage = param.value
}

  public requestPage(page?: number, itemPerPage?: string | null) {

    this.page = page ||  this.page
    this.itemPerPage = itemPerPage || this.itemPerPage 

    if(this.city){
      this.http.get<Clientes>(`http://127.0.0.1:3333/clientesByCity?page=${this.page}&limit=${this.itemPerPage}&orderBy=cidade&filter=${this.city}`).subscribe(
        result => {
          console.log(result);
          this.results = result.data;
          this.metaData = result.meta
        },
      )
      return
    }
    this.http.get<Clientes>(`http://127.0.0.1:3333/clientes?page=${this.page}&limit=${this.itemPerPage}&orderBy=cidade`).subscribe(
      result => {
        console.log(result);
        this.results = result.data;
        this.metaData = result.meta
      },
    )
  }

  public resetPageAndSearch(){
    this.page = 1
    this.requestPage()
  }

  

}
