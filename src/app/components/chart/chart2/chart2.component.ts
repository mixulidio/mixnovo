import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'nfx-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  Highcharts = Highcharts;

  linechart = {
    series: [
      {
        data: [1, 2, 3]
      }
    ],
    chart: {
      type: "line"
    },
    title: {
      text: "linechart"
    }
  };
  
/*  chartOptions: Highcharts.Options = {
    title: {
      text: 'My custom title'
    },
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };*/

  constructor() { }

  ngOnInit(): void {
    this.linechart =  JSON.parse(
    '{"chart":{"type":"line","plotShadow":false,"plotBorderWidth":1.0,"events":{"click":null,"selection":null,"select":null}},"title":{"text":"<b>Chart Title</b>","margin":0}}'
        );

//    this.chartOptions.series.push()

  }

}
