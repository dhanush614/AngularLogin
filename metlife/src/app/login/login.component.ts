import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  temp: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private userService: UserServiceService
  ) {
    this.user = new User();
  }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.login(this.user).subscribe(result => this.temp = result,
      error => this.errorpage());
    if (this.temp.valueOf()) {
      localStorage.setItem('userid', this.temp.userid);
      this.gotohomepage();
    }
    else {
      this.errorpage();
    }
  }

  gotohomepage() {
    this.router.navigate(['/users']);
  }

  errorpage() {
    this.router.navigate(['/error']);
  }
}
