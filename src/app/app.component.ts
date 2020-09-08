import { Component, VERSION } from '@angular/core';
import {Hero} from './hero';
@Component({
  selector: 'my-app',
  template : `
  <h1>My name is Prashanth</h1>`,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  title = 'Tour of Heroes';
  prducts = ['Shirt','Trousers','Watches'];
  heroos=[
    new Hero(1,"Superman"),
    new Hero(2,"Batman")
  ]
}
