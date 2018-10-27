import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'System Analysis and Design 61 / 1';
 
  constructor(private router:Router){

  }

  isUndefine():boolean{
    return localStorage.getItem('id')==undefined;
  }

  isAdmin():boolean{
    return localStorage.getItem('id')==='admin';
  }

  logout(){
    localStorage.removeItem('id');
    this.router.navigate(['/login'])
  }

  goClassification(){
      this.router.navigate(['/classification'])
  }
  goHomePage(){
    this.router.navigate(['/'])
  }
  goShopping(){
    this.router.navigate(['/shopping'])
  }
  goHistory(){
    this.router.navigate(['/show-preorder'])
  }
  goStock() { 
    this.router.navigate(['/Stock']); 
  }
  goRegister() { 
    this.router.navigate(['/Register']); 
  }
  goShipping() {
    this.router.navigate(['/shipping'])
  }
  goShowShipping(){
    this.router.navigate(['/showship'])
  }
  goReview(){
    this.router.navigate(['/review'])
  }
  goTranfer(){
    this.router.navigate(['/tranfer'])
  }
}


