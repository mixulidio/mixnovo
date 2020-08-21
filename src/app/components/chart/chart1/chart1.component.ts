
import { ServiceControlService } from './../../../services/service-control.service';
import { Component, OnInit } from '@angular/core';


import * as Highcharts from 'highcharts';

@Component({
  selector: 'chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  Highcharts : typeof Highcharts = Highcharts;
  chartOptions : any ;

  constructor(private serCtrl: ServiceControlService) { }

  ngOnInit(): void {


// https://stackoverflow.com/questions/54434380/how-to-use-add-series-and-update-methods-in-the-high-chart-wrapper-for-angular

    this.serCtrl.readChart1().subscribe(data => {
       this.chartOptions =          data            ;
    });
  }

}
