import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'environment';
import { ModalComponent } from 'src/app/elements/modal/modal.component';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit{

  results!: any;
  metaData!:any;

  page: number = 1;
  itemPerPage: string = '10';
  filter?: string = 'cidade'
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient, public dialog: MatDialog,private dataService: DataService) { }

  city: string = '';

  ngOnInit(): void {
    this.requestPage()
  }

  public onChange(param: any) {
   this.itemPerPage = param.value
}
  public requestPage(page?: number, itemPerPage?: string | null) {

    this.page = page ??  this.page
    this.itemPerPage = itemPerPage ?? this.itemPerPage 

    if(this.city){
      this.http.get<any>(`${this.API_URL}/vendas?page=${this.page}&limit=${this.itemPerPage}&orderBy=cidade&filter=${this.city}`).subscribe(
        result => {
          this.results = result.data;
          this.metaData = result.meta
        },
      )
      return
    }
    this.http.get<any>(`${this.API_URL}/vendas?page=${this.page}&limit=${this.itemPerPage}&orderBy=cidade`).subscribe(
      result => {
        this.results = result.data;
        this.metaData = result.meta
      },
    )
  }

  public resetPageAndSearch(){
    this.page = 1
    this.requestPage()
  }
  
  toggleModal(idVenda: string): void {
    const dialogRef = this.dialog.open(ModalComponent,{
      data: idVenda
    });

    // Se quiser realizar ações quando o modal for fechado:
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
      // Aqui você pode executar ações após o modal ser fechado
    });
}}
