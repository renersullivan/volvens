import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';
import { DataService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit {
  resultados: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private consultaService: DataService,public dialogRef: MatDialogRef<ModalClienteComponent>) {}

  ngOnInit(): void {
    this.consultaService.consultaCliente(this.data).subscribe((result) => {
      this.resultados = result
      console.log(this.resultados)
    });
  }


  fecharModal(): void {
    this.dialogRef.close();
  }
  
  imprimir(): void {
    window.print();
  }
  
 
}
