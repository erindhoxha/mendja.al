import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  users: Object;
  headerExist: boolean = false;
  headerText: string = 'Main page of Mendja.al'
  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getUsers().subscribe(data=> {
      this.users = data;
      console.log(this.users);
    })
  }

  

}
