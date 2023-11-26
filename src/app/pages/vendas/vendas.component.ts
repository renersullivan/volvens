import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

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

  constructor(private http: HttpClient, public dialog: MatDialog) { }

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
      this.http.get<any>(`http://138.68.232.90:3333/vendas?page=${this.page}&limit=${this.itemPerPage}&orderBy=cidade&filter=${this.city}`).subscribe(
        result => {
          this.results = result.data;
          this.metaData = result.meta
        },
      )
      return
    }
    this.http.get<any>(`http://138.68.232.90:3333/vendas?page=${this.page}&limit=${this.itemPerPage}&orderBy=cidade`).subscribe(
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


  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
    });
  }
  

}

