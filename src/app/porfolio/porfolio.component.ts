import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent {
 img:string ="";

  welcome(elem:any):void{
    this.img = elem.image
    
    

  }


  all:Data[]=[
    {image:"./assets/pOne.png"},
    {image:"./assets/pTwo.png"},
    {image:"./assets/pThree.png"},
    {image:"./assets/pOne.png"},
    {image:"./assets/pTwo.png"},
    {image:"./assets/pThree.png"}
  ]
}
