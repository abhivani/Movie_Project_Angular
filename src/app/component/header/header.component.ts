import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  queryTerm: string = '';
  constructor(public router: Router) {}

  ngOnInit(): void {

  }

  submitHandler(evt: any) {
    evt.preventDefault();
    // this.router.navigate(['/movies']);
    this.router.navigate(['/movies'],{queryParams:{movieName:this.queryTerm}});
    //this.router.navigate(['/movies'],{queryParams:{}
  }
}
