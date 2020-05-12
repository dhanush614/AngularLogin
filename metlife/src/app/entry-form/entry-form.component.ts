import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { Request } from '../model/request';

@Component({
  selector: 'app-user-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {

  request: Request;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private userService: UserServiceService
  ) {
    this.request = new Request();
  }

  onSubmit() {
    this.userService.saveRequest(this.request).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
