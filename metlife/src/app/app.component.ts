import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './service/user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  constructor(
    public userService: UserServiceService) {
    this.title = 'MetLife';
  }
  ngOnInit() {

  }
}
