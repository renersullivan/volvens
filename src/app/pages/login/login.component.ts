import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
 
username: string = '';
  password: string = '';

  

 


onSubmit() {
     
   
console.log('Nome de usuário:', this.username);
    
   
console.log('Senha:', this.password);
    
  }
}


