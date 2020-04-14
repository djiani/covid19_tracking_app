import { Component, OnInit } from '@angular/core';
import { Covid19DataService } from 'src/app/Covid19Service/covid19Data.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  covid19Data:any;
  diff: number = Date.now();

  constructor(private covid19DataService: Covid19DataService ) { }

  ngOnInit() {
    this.covid19DataService.getStatsWorldWide()
    .subscribe( data => {
      console.log(data);
      this.covid19Data = data;
      const updated = new Date(this.covid19Data.updated);
      const today = new Date();
      this.diff = today.getTime() - updated.getTime();
      console.log(' up ', today.getTime());
      console.log(' diff ', this.diff);
    });

  }

}
