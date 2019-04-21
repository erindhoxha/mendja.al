import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  features:Array<object>;
  constructor() {
    this.features = [
      {
        img: '',
        title:'Lorem ipsum',
        subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
      },
      {
        img: 'Lorem ipsum',
        title: 'Lorem ipsum',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
      },
      {
        img: 'Lorem ipsum',
        title: 'Lorem ipsum',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      }
    ]
  }
  ngOnInit() {
  }

}
