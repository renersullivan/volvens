import { Component,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  @Input()
  public title!: string;

  public hoverPicture:boolean = false
  constructor(private tokenStorageService:TokenStorageService, private router:Router){ }

  public logout(){
    this.tokenStorageService.signOut()
    this.router.navigateByUrl('/login')
  }

  public onHoverPicture(param: boolean){
    this.hoverPicture = param
  }

 
}


