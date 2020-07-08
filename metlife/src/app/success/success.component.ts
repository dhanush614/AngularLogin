import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  msg: string;

  constructor(private router: Router) {
    this.msg = this.router.getCurrentNavigation().extras.state.msg;
  }

  ngOnInit(): void {
	location.reload();
  }

}
