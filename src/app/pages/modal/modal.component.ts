import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  dadosDoBackend: any; // Variável para armazenar os dados do backend

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dadosDoBackend = data.dados; // Receba os dados passados pelo componente principal
  }

  close(): void {
    this.dialogRef.close();
  }
}
