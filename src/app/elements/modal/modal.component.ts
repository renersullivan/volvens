import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  resultados: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private consultaService: DataService,public dialogRef: MatDialogRef<ModalComponent>) {}

  ngOnInit(): void {
    this.consultaService.realizarConsulta(this.data).subscribe((result) => {
      this.resultados = result
    });
  }


  fecharModal(): void {
    this.dialogRef.close();
  }
  
  imprimir(): void {
    window.print();
  }
  
}
