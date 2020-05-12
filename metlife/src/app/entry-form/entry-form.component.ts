import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {


  constructor(
    private route: ActivatedRoute,
    private router: Router, private userService: UserServiceService
  ) {

  }

  onSubmit() {

  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
