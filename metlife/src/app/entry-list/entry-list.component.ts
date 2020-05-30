import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestServiceService } from '../service/request-service.service';
import { Request } from '../model/request';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  requests: Request[];

  constructor(private requestService: RequestServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.requestService.findAll().subscribe(data => {
      this.requests = data;
    });
  }

}
