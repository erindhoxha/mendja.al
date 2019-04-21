import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navLinks: Array<string>;

  constructor() { 
    this.navLinks = ['Home', 'About']
  }

  ngOnInit() {
  }

  public consoleLog(item) {
    console.log('Hi I\'m a button! ' + item);
  }
}
