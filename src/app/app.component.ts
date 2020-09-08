import { Component, VERSION } from '@angular/core';
import {Hero} from './hero';
@Component({
  selector: 'my-app',
  template : `
  <h1>My name is Prashanth</h1>
  <p>The hero's birthday is {{ birthday | date }}</p>`,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  title = 'Tour of Heroes';
  prducts = ['Shirt','Trousers','Watches'];
  heroos=[
    new Hero(1,"Superman"),
    new Hero(1,"Batman")
  ]
  birthday = new Date(2000,3,18);
  toggle = true;
  get format(){return this.toggle?'shortDate':'fullDate';}
  toggleFormat(){this.toggle = !this.toggle;}
}