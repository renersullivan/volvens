import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  public title!: string;

  
  @Input()
  public description!: string;

  
  @Input()
  public body!: string;

  
  @Input()
  public button!: string;

  @Input()
  public showModal: boolean = false
  constructor(){ }

  

 
}


