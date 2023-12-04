import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  resultados: any[] = [];

  constructor(private consultaService: DataService,public dialogRef: MatDialogRef<ModalComponent>) {}

  ngOnInit(): void {
    this.consultaService.realizarConsulta().subscribe(() => {
      this.resultados = this.consultaService.resultadosConsulta;
    });
  }




  fecharModal(): void {
    this.dialogRef.close();
  }
  imprimir(): void {
    window.print();
  }
  
}
