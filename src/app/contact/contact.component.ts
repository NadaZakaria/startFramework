import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  work(element:any):void{
    element.classList.remove("d-none")
  }

  stop(element:any):void{
    element.classList.add("d-none")
  }
}
