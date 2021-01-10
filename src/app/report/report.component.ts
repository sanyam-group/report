import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  username:string;
  mobile:number;
  startDate:any;
  endDate:any;
  panelty:string;
  meetings:string;
  sanchalak:string;
  reportMakerName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
