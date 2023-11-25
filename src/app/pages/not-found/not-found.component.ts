import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { Cliente } from 'src/app/interfaces/clientes.interface';
import { MetaData } from 'src/app/interfaces/page.interface';
import { Route, Router } from '@angular/router';

 

 interface Clientes{ 
    meta: MetaData
    data: Cliente[]
 
 }

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
 
  constructor(private location: Location, private router:Router) {}

  ngOnInit(): void {
  setTimeout(()=>{
    this.router.navigateByUrl('/login')
  }, 4000)  
  }

  public backButton(){
    this.location.back();
  }
  
  }
