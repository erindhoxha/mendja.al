import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appTitle: string = 'mendja.al';

  public navLinks: Array<object>;
  constructor() { 
    this.navLinks = [
    {
      icon: 'fas fa-th',
      navLink: 'Kategorite',
      navHref: '#',
    },
    {
      // icon: 'fab fa-buromobelexperte',
      navLink: 'N\'shtepi',
      navHref: '/',
    },
    {
      // icon: 'fab fa-buromobelexperte',
      navLink: 'Kontakto',
      navHref: '/contact',
    },
    {
      // icon: 'fab fa-buromobelexperte',
      navLink: 'Kurset',
      navHref: '#',
    },
    {
      // icon: 'fab fa-buromobelexperte',
      navLink: 'Per Ne',
      navHref: '#',
    }]
}

  ngOnInit() {
  }

  public consoleLog(item) {
    console.log('Hi I\'m a button! ' + item);
  }
}
