import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() releaseDate: Date;
  @Input() apps: string;

  initialStatus : string = "Pending";
  releaseDateINT: number;
  releaseDatePRE: number;

  constructor() { }

  ngOnInit() {
    this.releaseDateINT = this.getINTReleaseDate();
    this.releaseDatePRE = this.getPREReleaseDate();
  }

  getINTReleaseDate() {
    var date = new Date();
    return date.setDate(this.releaseDate.getDate() - 7);
  }

  getPREReleaseDate(){
    var date = new Date();
    return date.setDate(this.releaseDate.getDate() - 2);
  }

}
