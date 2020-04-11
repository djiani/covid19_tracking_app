import { Component, OnInit } from '@angular/core';
import { FectchDataService } from 'src/app/fectch-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data:any;
  constructor(private fectchDataService: FectchDataService) { }

  ngOnInit() {
    this.fectchDataService.getStatsWorldWide()
    .subscribe( data => {
      console.log(data);
      data = data;
    });
  }

}
